class RegistrationPageElement extends HTMLElement {
	constructor() {
		super()
		let wrapper = document.createElement('div')
		wrapper.className = 'registration-page-element'

		//top-container
		this.container = document.createElement('div')
		this.container.className = 'top-container'
		wrapper.appendChild(this.container)

		//main-container
		this.main = document.createElement('div')
		this.main.className = 'main-container'
		wrapper.appendChild(this.main)

		this.container.innerHTML = `<h1>account</h1>`
		this.main.innerHTML = `
			<div class="forms">
				<div class="form-for-users">
					<div class="form-content">
						<div class="h-container">
							<h3>already a member</h3>
						</div>
						<h2>Sign In</h2>
						<form class="form">
							<div class="input">
								<h4>Username :</h4>
								<input type="text" name="userName" placeholder="Your Name" id="autentification-name">
							</div>
							<div class="input">
								<h4>Password :</h4>
								<input type="password" name="passWord" placeholder="Your Password" id="autentification-pass">
							</div>
							<div class="send-anchor">
								<button id="autentification-button">sign in</button>
							</div>
						</div>
					</form>
				</div>
				<div class="registration-form">
					<div class="form-content">
						<div class="h-container">
							<h3>i don't have an account</h3>
						</div>
						<h2>Sign Up</h2>
						<form id="reg-form">
							<div class="input">
								<h4>Username :</h4>
								<input type="text" name="userName" placeholder="Your Name">
							</div>
							<div class="input">
								<h4>Password :</h4>
								<input type="password" id="pass-word-1" placeholder="Your Password">
							</div>
							<div class="input">
								<h4>Repeat Your Password :</h4>
								<input type="password" id="pass-word-2" placeholder="Your Password" disabled="">
							</div>
							<input type="hidden" value="" name="pass-hash" id="pass-hash">
							<div class="input">
								<h4>Email :</h4>
								<input type="email" name="email" placeholder="Your Email">
							</div>
							<div class="input">
								<h4>Firstname :</h4>
								<input type="text" name="firstName" placeholder="Your Firstname">
							</div>
							<div class="input">
								<h4>Lastname :</h4>
								<input type="text" name="lastName" placeholder="Your Lastname">
							</div>
							<div class="photoInput">
								<h4>Upload your photo :</h4>
								<input type="file" id="load-photo-input">
								<img src="images/header/icons/user (1).png" id="user-photo-preview">
								<input type="hidden" name="photo-url" id="photo-url"> 
							</div>
							<div class="send-anchor">
								<button id="register-button" value="http://localhost:3000/users">sign up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		`
		let style = document.createElement('style')
		style.innerHTML = `@import url(css/registration-styles.css)`

		this.shadow = this.attachShadow({mode: 'open'})

		this.shadow.appendChild(style)
		this.shadow.appendChild(wrapper)
	}
}

export default RegistrationPageElement