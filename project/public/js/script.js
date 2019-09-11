import MainPageElement from './Main.js'
import RoomsPageElement from './Rooms.js'
import BookingPageElement from './Bookings.js'
import BlogPageElement from './Blog.js'
import ContactPageElement from './Contact.js'
import RegistrationPageElement from './Regist.js'

customElements.define('main-page-element', MainPageElement)

let mainMenuElem = document.createElement('main-page-element')
mainMenuElem.className = 'custom-element'
document.body.appendChild(mainMenuElem)


//ROOMS-COMPONENT
customElements.define('rooms-page-element', RoomsPageElement)

let roomsPageElem = document.createElement('rooms-page-element')
roomsPageElem.className = 'custom-element'


//BOOKING-COMPONENT
customElements.define('booking-page-element', BookingPageElement)

let bookingPageElem = document.createElement('booking-page-element')
bookingPageElem.className = 'custom-element'


//BLOG-COMPONENT
customElements.define('blog-page-element', BlogPageElement)

let blogPageElem = document.createElement('blog-page-element')
blogPageElem.className = 'custom-element'


//CONTACT-COMPONENT
customElements.define('contact-page-element', ContactPageElement)
let contactPageElem = document.createElement('contact-page-element')
contactPageElem.className = 'custom-element'


//REGISTRATION-USER

customElements.define('registration-user-element', RegistrationPageElement)
let registrationPageElem = document.createElement('registration-user-element')
registrationPageElem.className = 'custom-element'


//test-click-links

function removeCustomElements() {
	let tags = document.getElementsByClassName('custom-element')
	Array.from(tags)
		.forEach(elem => elem.remove())
}

testClick('home-page', mainMenuElem)
testClick('rooms-page', roomsPageElem)
testClick('bookings-page', bookingPageElem)
testClick('blog-page', blogPageElem)
testClick('contact-page', contactPageElem)
testClick('registration-page', registrationPageElem)

function testClick(elemId, elem) {
	let nameLink = document.getElementById(elemId)
	nameLink.onclick = function click(event) {
		removeCustomElements()
		document.body.insertBefore(elem, document.getElementById('footer'))
	}
}


//REGISTRATION

let currentUser = null

registrationPageElem.shadowRoot.getElementById("pass-word-1").oninput = function ( event ) {
    let pass = event.target.value
    event.target.valid = pass.length > 6 && !!pass.match ( /\d/ ) && !!pass.match ( /\D/ )
    event.target.style.color = event.target.valid ? "green" : "red"
    registrationPageElem.shadowRoot.getElementById("pass-word-2").disabled = !event.target.valid
}

registrationPageElem.shadowRoot.getElementById("pass-word-2").oninput = function ( event ) {
    event.target.valid = event.target.value === registrationPageElem.shadowRoot.getElementById("pass-word-1").value
    event.target.style.color = event.target.valid ? "green" : "red"
}

registrationPageElem.shadowRoot.getElementById("pass-word-2").onchange = function ( event ) {
    event.target.valid ?
        registrationPageElem.shadowRoot.getElementById("pass-hash")
            .value = Sha256.hash(event.target.value) : null
}

let photoReader = registrationPageElem.shadowRoot.getElementById('load-photo-input')
let img = registrationPageElem.shadowRoot.getElementById('user-photo-preview')
let hiddenInput = registrationPageElem.shadowRoot.getElementById( "photo-url" )

photoReader.onchange = event => {
    // document.cookie = "userId=; expires=" + new Date(0).toUTCString()
    // document.cookie = "userPass=; expires=" + new Date(0).toUTCString()
    let photo = event.target.files[0]
    if ( photo.type.indexOf ( "image" ) !== 0 || photo.size > 300000) return
    let picture = URL.createObjectURL( photo )
    console.log(picture)
    img.src = picture
    hiddenInput.value = picture
}

let submit = registrationPageElem.shadowRoot.getElementById("register-button")

submit.onclick = function ( event ) {
    let formData = new FormData(registrationPageElem.shadowRoot.getElementById("reg-form"))
    let result = {}
    formData.forEach (
      ( val, key ) => Object.assign ( result, { [key]: val } )
    )
    fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( result )
    }).then ( response => response.json() )
        .then ( response => {
            currentUser = response
            console.log(response.body)
            document.cookie = `userId=${currentUser.id}; expires=${timeForCookie}`
            document.cookie = `userPass=${currentUser["pass-hash"]}; expires=${timeForCookie}`
            document.getElementById('user-log').innerHTML = `Current User: ${response.userName}`
            document.getElementById('user-log-photo').src = `${currentUser['photo-url']}`
        })
}


//COOKIE
let cookie = Object.assign({},...document.cookie.split('; ')
    .map(item => Object.assign({},{[item.split('=')[0]]:item.split('=')[1]})
    )
)

if ( cookie.userId ) {
    autentifyUser()
    registrationPageElem.shadowRoot
        .getElementById('autentification-pass').style = 'border: 1px solid rgb(225, 0, 0)'
}

function autentifyUser() {
    fetch( `http://localhost:3000/users/${cookie.userId}` )
        .then(response => response.json())
            .then(response => {
                currentUser = response
                registrationPageElem.shadowRoot.getElementById('autentification-name')
                    .value = `${currentUser.userName}`
        })
}

let autentificationButton = registrationPageElem.shadowRoot.getElementById('autentification-button')

autentificationButton.onclick = event => {
    fetch(`http://localhost:3000/users/${cookie.userId}`)
        .then(response => response.json())
            .then(response => {
                document.getElementById('user-log').innerHTML = `Current User: ${response.userName}`
                document.getElementById('user-log-photo').src = `${response['photo-url']}`
            })
}

let timeForCookie = new Date ( new Date().getTime() + 500 * 1000 ).toUTCString()


//CONTACT
let contactSubmit = contactPageElem.shadowRoot.getElementById('submit')

contactSubmit.onclick = function (event) {
	let formData = new FormData(contactPageElem.shadowRoot.getElementById('form'))
	let result = {}
	formData.forEach(
		( val, key ) => Object.assign( result, { [key] : val } )
	)
	fetch('http://localhost:3000/contacts', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(result)
	}).then(response => response.json())
		.then(response => console.log(response))
}