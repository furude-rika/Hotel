class ContactPageElement extends HTMLElement {
	constructor() {
		super()
		let wrapper = document.createElement('div')
		wrapper.className = 'contact-page-element'

		//top-container
		this.container = document.createElement('div')
		this.container.className = 'top-container'
		wrapper.appendChild(this.container)

		//contact-container
		this.contact = document.createElement('div')
		this.contact.className = 'contact-container'
		wrapper.appendChild(this.contact)

		this.container.innerHTML = `<h1>CONTACT</h1>`
		this.contact.innerHTML = `
			<div class="form-container">
				<h2>Drop us a line</h2>
				<p>
					Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. <br>Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna <br>feugiat ruturn. Nam nulla ipsum, venenatis malesuada felis quis, ulrticies <br>convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh <br>in dolor pharetra, a euismod nulla dignissim.
				</p>
				<form id="form">
					<div class="input">
						<h4>Name :</h4>
						<input type="text" name="client-name">
					</div>
					<div class="input">
						<h4>Surname :</h4>
						<input type="text" name="client-surname">
					</div>
					<div class="input">
						<h4>Email :</h4>
						<input type="email" name="client-email">
					</div>
					<div class="input">
						<h4>Phone :</h4>
						<input type="text" name="client-phone">
					</div>
					<div class="textarea">
						<h4>Message :</h4>
						<textarea name="client-message"></textarea>
					</div>
					<div class="send-anchor">
						<button id="submit">SEND NOW</button>
					</div>
				</form>
			</div>
			<div class="map-container">
				<div class="img-holder">
					<img src="images/map/map.jpg">
				</div>
				<div class="contacts">
					<div class="adress">
						<p>
							<b>Address</b> : Avenue Piccad 234
						</p>
						<p>
							<b>City</b> : New York ( US )
						</p>
						<p>
							<b>Check-In</b> : 15:00 am
						</p>
					</div>
					<div class="phone">
						<p>
							<b>Phone</b> : 00 837920234
						</p>
						<p>
							<b>Email</b> : info@hotel.com
						</p>
						<p>
							<b>Check-Out</b> : 11:00 am
						</p>
					</div>
					<div class="sub-info">
						<h4>AVAILABLE AT 10AM - 8PM</h4>
						<h1>+ 202 555 0116</h1>
					</div>
				</div>
			</div>
		`

		let style = document.createElement('style')
		style.innerHTML = `@import url(css/contact-styles.css)`

		this.shadow = this.attachShadow({mode: 'open'})

		this.shadow.appendChild(style)
		this.shadow.appendChild(wrapper)
	}
}

export default ContactPageElement