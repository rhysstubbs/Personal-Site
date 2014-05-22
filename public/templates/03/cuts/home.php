<?php include 'includes/header.php' ?>

	<section id="top-banner" class="outer">

		<div class="wrap">
			<div class="c">

				<div class="left">
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
				</div>

				<div class="right">
					<div class="slide-images">
						<div class="slides">
							<!-- First slide is output as a template for the rest -->
							<div class="slide"><img src="../assets/images/temp/640x360.png" alt="" class="image" /></div>
						</div>
					</div>
				</div>

			</div> <!-- c -->
		</div> <!-- wrap -->

		<script type="text/javascript">
			$(document).ready(function() {

				// Initialise the slideshow here, the rest of the slides can be added by JS
				var banner = new BannerSlideshow({
					wrap: $('#top-banner'),
					slides: [
						{
							image:'../assets/images/temp/640x360_2.png',
							title:'Another Slide Title',
							text:'Some text to go underneath the title here',
							cta: 'Custom CTA text'
						}
					]
				});
				
			});
		</script>
	</section> <!-- outer -->

	<section class="outer">
		<div class="wrap pad-top pad-bot">
			<div class="block-list col3">
				<div class="block-heading">
					<h3 class="heading">Three column layout</h3>
				</div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>
							<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
						</figcaption>
					</figure>
				</a>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>
							<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
						</figcaption>
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>
							<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
						</figcaption>
					</figure>
				</a>
				<!-- For 3-up lists (loop.index0 % 3 == 0) --><div class="clear l-show d-show t-show"></div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>
							<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
						</figcaption>
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>
							<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
						</figcaption>
					</figure>
				</a>
				<a class="item" href="#">
					<figure>
						<img src="../assets/images/temp/400x300.png" />
						<figcaption>
							<h3>Lorem Ipsum Proin gravida nibh velit auctora</h3>
							<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</p>
						</figcaption>
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<!-- For 3-up lists (loop.index0 % 3 == 0) --><div class="clear l-show d-show t-show"></div>
			</div>

			<div class="block-list col4">
				<div class="block-heading">
					<h3 class="heading">Four column layout</h3>
				</div>
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
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
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
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
			</div>

		</div> <!-- wrap -->
	</section> <!-- outer -->

<?php include 'includes/footer.php' ?>