class BookingPageElement extends HTMLElement {
	constructor() {
		super()
		let wrapper = document.createElement('div')
		wrapper.className = 'booking-page-element'

		//top-container
		this.container = document.createElement('div')
		this.container.className = 'top-container'
		wrapper.appendChild(this.container)
		//booking-container
		this.booking = document.createElement('div')
		this.booking.className = 'booking-container'
		wrapper.appendChild(this.booking)

		this.container.innerHTML = `<h1>BOOKING</h1>`
		this.booking.innerHTML = `
			<div class="booking-reservation">
				<img src="images/booking-pic.jpg">
				<div class="check-in-out">
					<h3>YOUR RESERVATION</h3>
					<div class="check-flex">
						<div class="chek-in">
							<h4>CHECK IN</h4>
							<h4>26</h4>
							<p>June, 2017 <br>MONDAY</p>
						</div>
						<div class="chek-out">
							<h4>CHECK OUT</h4>
							<h4>28</h4>
							<p>June, 2017 <br>FRIDAY</p>
						</div>
						<div class="guests">
							<h4>2</h4>
							<p>GUESTS</p>
						</div>
						<div class="nights">
							<h4>4</h4>
							<p>NIGHTS</p>
						</div>
					</div>
				</div>
				<div class="total-price">
					<h3>300 <sup>$</sup><sub>/</sub>TOTAL</h3>
				</div>
			</div>
			<div class="booking-form">
				<div class="extra-services">
					<form class="services-form">
						<h2>Add Extra Services</h2>
						<div class="servise-flex">
							<div class="left-form-inputs">
								<input type="checkbox" name="option-1"><b>Animal Allowed</b> : $ 37.00 / Group / Trip <br>
								<input type="checkbox" name="option-2"><b>Smooking Room</b> : $ 15.00 / Room / Night <br>
								<input type="checkbox" name="option-3"><b>Sea View </b>: $ 15.00 / Room / Night <br>
							</div>
							<div class="right-form-inputs">
								<input type="checkbox" name="option-4"><b>Swimming Pool</b> : $ 15.00 / Room / Night <br>
								<input type="checkbox" name="option-5"><b>Wifi 24 H</b> : $ 15.00 / Room / Night <br>
								<input type="checkbox" name="option-6"><b>Breakfast Included</b> : $ 15.00 / Room / Night <br>
							</div>
						</div>
					</form>
				</div>
				<div class="add-information">
					<h2>Add Your Informations</h2>
					<div class="top-inputs">
						<div class="input">
							<h4>Name :</h4><br>
							<input type="text" name="">
						</div>
						<div class="input">
							<h4>Surname :</h4><br>
							<input type="text" name="">
						</div>
						<div class="input">
							<h4>Email :</h4><br>
							<input type="email" name="">
						</div>
						<div class="input">
							<h4>Phone :</h4><br>
							<input type="text" name="">
						</div>
						<div class="input">
							<h4>Address :</h4><br>
							<input type="text" name="">
						</div>
						<div class="input">
							<h4>City :</h4><br>
							<input type="text" name="">
						</div>
						<div class="input">
							<h4>Country :</h4><br>
							<input type="text" name="">	
						</div>
						<div class="input">
							<h4>ZIP :</h4><br>
							<input type="text" name="">
						</div>
					</div>
					<div class="textarea">
						<h4>Requests :</h4><br>
						<textarea></textarea>
					</div>
					<div class="sub-inputs">
						<div class="input">
							<h4>Arrival :</h4><br>
							<input type="text" name="">
						</div>
						<div class="input">
							<h4>Coupon :</h4><br>
							<input type="text" name="">
						</div>
					</div>
					<div class="submit">
						<a href="">BOOK NOW</a>
					</div>
				</div>
			</div>
		`

		let style = document.createElement('style')
		style.innerHTML = `@import url(css/booking-styles.css)`

		this.shadow = this.attachShadow({mode: 'open'})

		this.shadow.appendChild(style)
		this.shadow.appendChild(wrapper)
	}
}

export default BookingPageElement