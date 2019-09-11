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

export default RoomsPageElement