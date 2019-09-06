function createElem(tagName) {
	return document.body.appendChild(document.createElement(tagName))
}

let cookie = Object.assign({},...document.cookie.split('; ')
	.map(item => Object.assign({},{[item.split('=')[0]]:item.split('=')[1]})
	)
)

cookie.userId
	? fetch(`http://localhost:3000/users/${cookie.userId}`)
		.then(response => response.json())
			.then(response => {
				console.log(response.userName)
				document.getElementById('userLog').innerHTML = `Current User: ${response.userName}`
			})
				: console.warn('User is not registered')
