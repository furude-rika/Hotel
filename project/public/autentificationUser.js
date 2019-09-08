function createElem(tagName) {
	return document.body.appendChild(document.createElement(tagName))
}



// let cookie = Object.assign({},...document.cookie.split('; ')
// 	.map(item => Object.assign({},{[item.split('=')[0]]:item.split('=')[1]})
// 	)
// )

// cookie.userId
// 	? fetch( `http://localhost:3000/users/${cookie.userId}` )
// 		.then(response => response.json())
// 			.then(response => {
// 				console.log(`Current User: ${response.userName}`, response)
// 				document.getElementById('user-log').innerHTML = `Current User: ${response.userName}`
// 				 // = `${response['photo-url']}`
// 			})
// 				: console.warn('User is not registered')


// export let timeForCookie = new Date ( new Date().getTime() + 500 * 1000 ).toUTCString()