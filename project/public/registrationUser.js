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