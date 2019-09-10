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