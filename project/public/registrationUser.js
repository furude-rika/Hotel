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

photoReader.onchange = event => {
    let photo = event.target.files[0]
    if ( photo.type.indexOf ( "image" ) !== 0 || photo.size > 300000) return
    let picture = URL.createObjectURL ( photo )
    img.src = picture
    registrationPageElem.shadowRoot.getElementById( "photo-url" )[0].value = picture
    let reader = new FileReader();
    reader.onload = event => {
        img.src = event.target.result        
    }
    reader.readAsDataURL(event.target.files[0])
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
            document.cookie = `userId=${currentUser.id}`
            document.cookie = `userPass=${currentUser["pass-hash"]}`
        })
}