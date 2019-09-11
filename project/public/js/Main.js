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

export default MainPageElement