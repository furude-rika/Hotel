class MainPageElement extends HTMLElement {
	constructor() {
		super()
		let wrapper = document.createElement('div')
		wrapper.className = 'main'
		//top-container
		this.container = document.createElement('div')
		wrapper.appendChild(this.container)
		this.container.className = 'top-container'
		//about-container
		this.aboutContent = document.createElement('div')
		wrapper.appendChild(this.aboutContent)
		this.aboutContent.className = 'about-container'

		//places-container
		this.placesContainer = document.createElement('div')
		wrapper.appendChild(this.placesContainer)
		this.placesContainer.className = 'places-container'

		//locations-container
		this.locationContainer = document.createElement('div')
		wrapper.appendChild(this.locationContainer)
		this.locationContainer.className = 'locations-container'
		
		//phrase-container
		this.phraseContainer = document.createElement('div')
		wrapper.appendChild(this.phraseContainer)
		this.phraseContainer.className = 'phrase-container'
		
		this.container.innerHTML = `
			<div class="top-text-content">
				<h4>luxury hotel & best resort</h4><hr>
				<p>enjoy a luxury<br>experience</p>
				<div class="top-button">
					<a href="">rooms e suites</a>
				</div>
				<div class="data">
				</div>
			</div>
		`
		this.aboutContent.innerHTML = `
			<div class="about-content">
				<div class="text-about-content">
					<h6>hotel bayview</h6>
					<h1>Relax in our <br>Resort</h1>
					<p>
						Vivamus volutpat eros pulvinar velit laoreet, sit amet <br>egestas eart dignissim. Set quis rutrum tellus, sit amet <br>viverra felis. Cras sagittis sem amet urna feugiat <br>rutrum. Nam nulla ipsum, venenatis malesuada felis.
					</p>
					<div class="about-anchor">
						<a href="">about us</a>
					</div>
				</div>
				<div class="about-images">
					<img class="first-img" src="images/main-page/about-container/about-img-1.jpg">
					<img class="second-img" src="images/main-page/about-container/about-img-2.jpg">
					<img class="third-img" src="images/main-page/about-container/about-img-3.jpg">
				</div>
			</div>
		`
		this.locationContainer.innerHTML = `
			<div class="location-images">
				<img src="images/main-page/locations-container/location-img-1.jpg">
				<img src="images/main-page/locations-container/location-img-2.jpg">
				<img src="images/main-page/locations-container/location-img-4.jpg">
				<img src="images/main-page/locations-container/location-img-3.jpg">
			</div>
			<div class="locations-description">
				<h6>luxury hotel & best resort</h6>
				<h1>discover our <br><span class="change-color">locations</span></h1>
				<div class="text-location-content">
					<p>
						Phasellus enim libero, blandit vel sapien vitae, <br>condimentum ultricies magns et. Quisque <br>euismod ourci ut et lobortis. <a href="">Blandit vel sapien <br>vitae,</a> condimentum ultricies magns et orci ut <br>et lobortis, Phasellus enim
					</p>
					<p>
						Phasellus enim libero, blandit vel sapien vitae, <br>condimentum ultricies magns et. Quisque <br>euismod ourci ut et lobortis. <a href="">Blandit vel sapien <br>vitae,</a> condimentum ultricies magns et orci ut <br>et lobortis, Phasellus enim
					</p>
				</div>
				<div class="location-anchor">
					<a href="">check all packages</a>
				</div>
			</div>
		`
		this.phraseContainer.innerHTML = `
			<p>
				Phasellus enim libero, blandit vel sapien vitae, condimentum <br>ultricies magns et. Best services orci ut et lobortis. Blandit vel sapien <br>vitae, condimentum
			</p>
		`

		this.placesContainer.innerHTML = `
			<div class="places">
				<div class="places-content">
					<h6>wellness</h6><hr>
					<h1>Spa and Beauty</h1>
					<p>
						Phasellus enim libero, blandit vel sapien vitae, <br>condimentum ultricies magna et. Quisque euismod <br>orci ut et lobortis. Phasellus enim libero, blandit.
					</p>
					<div class="read-anchour">
						<a href="">READ MORE</a>
					</div>
				</div>
				<div class="places-img">
					<img src="images/main-page/places-container/places-img-1.jpg">
				</div>
				<div class="places-img">
					<img src="images/main-page/places-container/places-img-2.jpg">
				</div>
				<div class="places-content">
					<h6>wedding</h6><hr>
					<h1>Luxury Location</h1>
					<p>
						Phasellus enim libero, blandit vel sapien vitae, <br>condimentum ultricies magna et. Quisque euismod <br>orci ut et lobortis. Phasellus enim libero, blandit.
					</p>
					<div class="read-anchour">
						<a href="">READ MORE</a>
					</div>
				</div>
			</div>
		`
		let style = document.createElement('style')
		style.innerHTML = `@import url(css/comp-styles.css)`
		this.shadow = this.attachShadow({mode: 'open'})

		this.shadow.appendChild(style)
		this.shadow.appendChild(wrapper)		
	}
}

customElements.define('main-page-element', MainPageElement)

let mainMenuElem = document.createElement('main-page-element')
mainMenuElem.className = 'custom-element'
document.body.appendChild(mainMenuElem)


//ROOMS-COMPONENT
class RoomsPageElement extends HTMLElement {
	constructor() {
		super()
		let wrapper = document.createElement('div')
		wrapper.className = 'rooms-page-element'

		//top-container
		this.topContainer = document.createElement('div')
		this.topContainer.className = 'top-container'
		wrapper.appendChild(this.topContainer)
		//navigation
		this.navigation = document.createElement('div')
		this.navigation.className = 'navigation-container'
		wrapper.appendChild(this.navigation)
		//rooms-container
		this.roomsContainer = document.createElement('div')
		this.roomsContainer.className = 'rooms-container'
		wrapper.appendChild(this.roomsContainer)

		this.topContainer.innerHTML = `<h1>SEARCH</h1>`
		this.navigation.innerHTML = `
			<ul class="nav">
				<li><a href="">GUEST REVIEW</a></li>
				<li><a href="">STAY PRICE</a></li>
				<li><a href="">ROOM SIZE</a></li>
			</ul>
		`
		this.roomsContainer.innerHTML = `
			<div class="room">
				<div class="room-img-holder">
					<img src="images/rooms/room-7.jpg">
				</div>
				<div class="h-container">
					<h2>Family Room</h2>
					<div class="custom-elements">
						<img src="images/room-icons/icon.png">
						<p>5 REVIEWS</p>
						<img src="images/room-icons/man.png">
						<p>3 GUESTS</p>
						<img src="images/room-icons/plans.png">
						<p>25 M<sup>2</sup></p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur, <br>adipiscing elit. Quisque arcu magna, luctus
				</p>
				<div class="booking-anchor">
					<a href="">BOOK NOW for 222 $</a>
				</div><hr>
				<div class="custom-logo">
					<img src="images/service-icons/picnic-table.png">
					<img src="images/service-icons/washing-machine.png">
					<img src="images/service-icons/martini.png">
					<img src="images/service-icons/breakfast.png">
					<img src="images/service-icons/shower.png">
					<p>FULL INFO</p>
				</div>
			</div>
			<div class="room">
				<div class="room-img-holder">
					<img src="images/rooms/room-8.jpg">
				</div>
				<div class="h-container">
					<h2>Luxury Room</h2>
					<div class="custom-elements">
						<img src="images/room-icons/icon.png">
						<p>7 REVIEWS</p>
						<img src="images/room-icons/man.png">
						<p>2 GUESTS</p>
						<img src="images/room-icons/plans.png">
						<p>40 M<sup>2</sup></p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur, <br>adipiscing elit. Quisque arcu magna, luctus
				</p>
				<div class="booking-anchor">
					<a href="">BOOK NOW for 222 $</a>
				</div><hr>
				<div class="custom-logo">
					<img src="images/service-icons/picnic-table.png">
					<img src="images/service-icons/washing-machine.png">
					<img src="images/service-icons/martini.png">
					<img src="images/service-icons/breakfast.png">
					<img src="images/service-icons/shower.png">
					<p>
						FULL INFO
					</p>
				</div>
			</div>
			<div class="room">
				<div class="room-img-holder">
					<img src="images/rooms/room-9.jpg">
				</div>
				<div class="h-container">
					<h2>Single Room</h2>
					<div class="custom-elements">
						<img src="images/room-icons/icon.png">
						<p>10 REVIEWS</p>
						<img src="images/room-icons/man.png">
						<p>1 GUEST</p>
						<img src="images/room-icons/plans.png">
						<p>25 M<sup>2</sup></p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur, <br>adipiscing elit. Quisque arcu magna, luctus
				</p>
				<div class="booking-anchor">
					<a href="">BOOK NOW for 222 $</a>
				</div><hr>
				<div class="custom-logo">
					<img src="images/service-icons/picnic-table.png">
					<img src="images/service-icons/washing-machine.png">
					<img src="images/service-icons/martini.png">
					<img src="images/service-icons/breakfast.png">
					<img src="images/service-icons/shower.png">
					<p>
						FULL INFO
					</p>
				</div>
			</div>
			<div class="room">
				<div class="room-img-holder">
					<img src="images/rooms/room10.jpg">
				</div>
				<div class="h-container">
					<h2>Studio Room</h2>
					<div class="custom-elements">
						<img src="images/room-icons/icon.png">
						<p>8 REVIEWS</p>
						<img src="images/room-icons/man.png">
						<p>3 GUESTS</p>
						<img src="images/room-icons/plans.png">
						<p>50 M<sup>2</sup></p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur, <br>adipiscing elit. Quisque arcu magna, luctus
				</p>
				<div class="booking-anchor">
					<a href="">BOOK NOW for 222 $</a>
				</div><hr>
				<div class="custom-logo">
					<img src="images/service-icons/picnic-table.png">
					<img src="images/service-icons/washing-machine.png">
					<img src="images/service-icons/martini.png">
					<img src="images/service-icons/breakfast.png">
					<img src="images/service-icons/shower.png">
					<p>
						FULL INFO
					</p>
				</div>
			</div>
			<div class="room">
				<div class="room-img-holder">
					<img src="images/rooms/room-11.jpg">
				</div>
				<div class="h-container">
					<h2>Standard Family Room</h2>
					<div class="custom-elements">
						<img src="images/room-icons/icon.png">
						<p>15 REVIEWS</p>
						<img src="images/room-icons/man.png">
						<p>2 GUESTS</p>
						<img src="images/room-icons/plans.png">
						<p>25 M<sup>2</sup></p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur, <br>adipiscing elit. Quisque arcu magna, luctus
				</p>
				<div class="booking-anchor">
					<a href="">BOOK NOW for 222 $</a>
				</div><hr>
				<div class="custom-logo">
					<img src="images/service-icons/picnic-table.png">
					<img src="images/service-icons/washing-machine.png">
					<img src="images/service-icons/martini.png">
					<img src="images/service-icons/breakfast.png">
					<img src="images/service-icons/shower.png">
					<p>
						FULL INFO
					</p>
				</div>
			</div>
			<div class="room">
				<div class="room-img-holder">
					<img src="images/rooms/room-12.jpg">
				</div>
				<div class="h-container">
					<h2>Luxury Family Room</h2>
					<div class="custom-elements">
						<img src="images/room-icons/icon.png">
						<p>7 REVIEWS</p>
						<img src="images/room-icons/man.png">
						<p>2 GUESTS</p>
						<img src="images/room-icons/plans.png">
						<p>40 M<sup>2</sup></p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur, <br>adipiscing elit. Quisque arcu magna, luctus
				</p>
				<div class="booking-anchor">
					<a href="">BOOK NOW for 222 $</a>
				</div><hr>
				<div class="custom-logo">
					<img src="images/service-icons/picnic-table.png">
					<img src="images/service-icons/washing-machine.png">
					<img src="images/service-icons/martini.png">
					<img src="images/service-icons/breakfast.png">
					<img src="images/service-icons/shower.png">
					<p>
						FULL INFO
					</p>
				</div>
			</div>
		`

		let style = document.createElement('style')
		style.innerHTML = `@import url(css/rooms-styles.css)`

		this.shadow = this.attachShadow({mode: 'open'})
		this.shadow.appendChild(style)
		this.shadow.appendChild(wrapper)
	}
}

customElements.define('rooms-page-element', RoomsPageElement)

let roomsPageElem = document.createElement('rooms-page-element')
roomsPageElem.className = 'custom-element'


//BOOKING-COMPONENT
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

customElements.define('booking-page-element', BookingPageElement)

let bookingPageElem = document.createElement('booking-page-element')
bookingPageElem.className = 'custom-element'


//BLOG-COMPONENT
class BlogPageElement extends HTMLElement {
	constructor() {
		super()
		let wrapper = document.createElement('div')
		wrapper.className = 'blog-page-element'

		//top-container
		this.container = document.createElement('div')
		this.container.className = 'top-container'
		wrapper.appendChild(this.container)

		//blog-container
		this.blog = document.createElement('div')
		this.blog.className = 'blog-container'
		wrapper.appendChild(this.blog)

		this.container.innerHTML = `<h1>BLOG</h1>`
		this.blog.innerHTML = `
			<div class="dinner">
				<div class="dinner-content">
					<img src="images/blog-content/dinner.jpg">
					<h6>LUXURY HOTEL</h6>
					<h2>Fish Dinner</h2>
					<p>
						Phasellus enim libero, blandit vel sapien <br>vitae, condimentum ultricies magna et. <br>Quisque euimod orci ut et lobortis.
					</p>
					<div class="read-anchor">
						<a href="">READ MORE</a>
					</div>
				</div>
				<div class="check-events">
					<h2>Check New Events</h2>
				</div>
			</div>
			<div class="around-us">
				<div class="follow">
					<h4>Follow Adriatic <br>Luxury Hotels</h4><hr>
					<h5>JOHN DOE</h5>
				</div>
				<div class="around-content">
					<img src="images/blog-content/around-us.jpg">
					<h6>LUXURY HOTEL</h6>
					<h2>Around Us</h2>
					<p>
						Phasellus enim libero, blandit vel sapien <br>vitae, condimentum ultricies magna et. <br>Quisque euimod orci ut et lobortis.
					</p>
					<div class="read-anchor">
						<a href="">READ MORE</a>
					</div>
				</div>
			</div>
			<div class="relax">
				<div class="first-relax-zone">
					<img src="images/blog-content/relax-1.jpg">
					<div class="relax-content">
						<h6>NEWS</h6>
						<h4>Relax Zone</h4>
						<a href="">READ MORE</a>
					</div>
				</div>
				<div class="second-relax-zone">
					<img src="images/blog-content/relax-2.jpg">
					<div class="relax-content">
						<h6>NEWS</h6>
						<h4>Relax Zone</h4>
						<a href="">READ MORE</a>
					</div>
				</div>
			</div>
		`

		let style = document.createElement('style')
		style.innerHTML = `@import url(css/blog-styles.css)`

		this.shadow = this.attachShadow({mode: 'open'})

		this.shadow.appendChild(style)
		this.shadow.appendChild(wrapper)
	}
}

customElements.define('blog-page-element', BlogPageElement)

let blogPageElem = document.createElement('blog-page-element')
blogPageElem.className = 'custom-element'


//CONTACT-COMPONENT
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
				<form class="form">
					<div class="input">
						<h4>Name :</h4>
						<input type="text" name="">
					</div>
					<div class="input">
						<h4>Surname :</h4>
						<input type="text" name="">
					</div>
					<div class="input">
						<h4>Email :</h4>
						<input type="text" name="">
					</div>
					<div class="input">
						<h4>Phone :</h4>
						<input type="text" name="">
					</div>
					<div class="textarea">
						<h4>Message :</h4>
						<textarea></textarea>
					</div>
					<div class="send-anchor">
						<a href="">SEND NOW</a>
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

customElements.define('contact-page-element', ContactPageElement)
let contactPageElem = document.createElement('contact-page-element')
contactPageElem.className = 'custom-element'


//REGISTRATION-USER
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
								<input type="text" name="userName" placeholder="Your Name">
							</div>
							<div class="input">
								<h4>Password :</h4>
								<input type="password" name="passWord" placeholder="Your Password">
							</div>
							<div class="send-anchor">
								<button>sign in</button>
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