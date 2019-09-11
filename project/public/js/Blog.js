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

// customElements.define( 'blog-page-element', BlogPageElement )

export default BlogPageElement