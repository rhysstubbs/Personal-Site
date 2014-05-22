<?php include 'includes/header.php' ?>

	<section id="top-banner" class="outer">

		<div class="slide-images">
			<div class="slides">
				<!-- First slide is output as a template for the rest -->
				<div class="slide"><img src="../assets/images/temp/2400x400.png" alt="" class="image" /></div>
			</div>
		</div>

		<div class="wrap">

			<div class="overlay">
				<div class="c">
					<div class="slide-content">
						<div class="slides">
							<!-- First slide is output as a template for the rest -->
							<div class="slide">
								<h1 class="title">I'm a title or a message in a striking font</h1>
								<p class="text">Space for some more text to go here, or maybe here. Definitely not here though!</p>
								<a class="btn inverse sc cta" href="#">Click Me</a>
							</div>
						</div>
					</div>
					<div class="box editor">
						<div class="inner">
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
							<p>Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat.</p>
						</div>
					</div>
				</div>
			</div>

			<script type="text/javascript">
				$(document).ready(function() {

					// Initialise the slideshow here, the rest of the slides can be added by JS
					var banner = new BannerSlideshow({
						wrap: $('#top-banner'),
						contentOffset: -35,
						slides: [
							{
								image:'../assets/images/temp/2400x400_2.png',
								title:'Another Slide Title',
								text:'Some text to go underneath the title here',
								cta: 'Custom CTA text'
							}
						]
					});
					
				});
			</script>

		</div> <!-- wrap -->
	</section> <!-- outer -->

	<section class="outer">
		<div class="wrap pad-top pad-bot">

			<div class="editor pad-top pad-bot">
				<h2 class="large">Space for some more text to go here, or maybe here. Definitely not here though!</h2>
			</div>

			<div class="block-list col3 overlay">
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<!-- For 3-up lists (loop.index0 % 3 == 0) --><div class="clear l-show d-show t-show"></div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<!-- For 3-up lists (loop.index0 % 3 == 0) --><div class="clear l-show d-show t-show"></div>
			</div>

			<div class="editor pad-top pad-bot">
				<h2 class="large">Space for some more text to go here, or maybe here. Definitely not here though!</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="block-list col3">
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x250.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x250.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x250.png" />
						<figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption>
					</figure>
				</a>
			</div>

		</div> <!-- wrap -->
	</section> <!-- outer -->

<?php include 'includes/footer.php' ?>