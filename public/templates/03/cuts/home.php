<?php include 'includes/header.php' ?>

	<section id="top-banner">
		<div class="homepage-slider flexslider container">
			  <ul class="slides body-list">
			    <li>
			    	<div class="body-list"> 
				      	<div class="slide-content">
							<h1 class="title">I'm a title or a message in a striking font</h1>
							<p class="text">Space for some more text to go here, or maybe here. Definitely not here though!</p>
							<a class="cta sc inverse" href="#">Click Me</a>
						</div>
						<img src="http://placehold.it/640x360&text=Slide+1" />
					</div>
			    </li>
			    <li>
			    	<div class="body-list">
				      	<div class="slide-content">
							<h1 class="title">Another Slide Title</h1>
							<p class="text">Some text to go underneath the title here</p>
							<a class="cta sc inverse" href="#">Custom CTA text</a>
						</div>
						<img src="http://placehold.it/640x360&text=Slide+2" />
					</div>
			    </li>
			    <li>
			    	<div class="body-list"> 	
				      	<div class="slide-content">
							<h1 class="title">I'm a title or a message in a striking font</h1>
							<p class="text">Space for some more text to go here, or maybe here. Definitely not here though!</p>
							<a class="cta sc inverse" href="#">Click Me</a>
						</div>
						<img src="http://placehold.it/640x360&text=640x360" />
					</div>
			    </li>
			  </ul>
		</div>
		<script type="text/javascript">
			$(document).ready(function() {

				// Reference: http://www.woothemes.com/flexslider/
				$('.homepage-slider').flexslider({
					animation: "slide",
					selector: ".slides > li",
					slideshow: true,
					slideshowSpeed: 7000,
					animationSpeed: 800,
					smoothHeight: false,
					controlNav: true, // Generates pagination
					directionNav: true // Generates next / prev arrows
				});

			});
		</script>
	</section> <!-- top-banner -->

	<section class="body">
		<div class="body-top">
			<div class="container">
				<div class="block-heading">
					<h3 class="heading">Three column layout</h3>
				</div>
				<div class="body-list">
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x300&text=400x300" />
							<figcaption>
								<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
								<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
							</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x300&text=400x300" />
							<figcaption>
								<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
								<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
							</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x300&text=400x300" />
							<figcaption>
								<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
								<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
							</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x300&text=400x300" />
							<figcaption>
								<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
								<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
							</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x300&text=400x300" />
							<figcaption>
								<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
								<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
							</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x300&text=400x300" />
							<figcaption>
								<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
								<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
							</figcaption>
						</figure>
					</a>
				</div>
			</div>
		</div>
		<div class="body-middle">
			<div class="container">
				
				<div class="block-heading">
					<h3 class="heading">Four column layout</h3>
				</div>
				<div class="body-list">
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x250&text=400x250" />
							<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x250&text=400x250" />
							<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x250&text=400x250" />
							<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
						</figure>
					</a>
					<a href="#">
						<figure>
							<img src="http://placehold.it/400x250&text=400x250" />
							<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
						</figure>
					</a>
				</div>
			</div><!-- container -->	
		</div> <!-- body-middle -->
	</section> <!-- outer -->

<?php include 'includes/footer.php' ?>