<?php include 'includes/header.php' ?>

	<section id="top-banner" class="outer">

		<div class="wrap">
			<div class="slide-images">
				<div class="slides">
					<!-- First slide is output as a template for the rest -->
					<div class="slide"><img src="../assets/images/temp/1175x500.png" alt="" class="image" /></div>
				</div>
			</div>
		</div>

		<div class="overlay">
			<div class="wrap">
				<div class="slide-content">
					<div class="slides">
						<!-- First slide is output as a template for the rest -->
						<div class="slide">
							<div class="inner">
								<h1 class="title">I'm a title or a message in a striking font</h1>
								<p class="text">Space for some more text to go here, or maybe here. Definitely not here though!</p>
								<a class="btn inverse sc cta" href="#">Click Me</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script type="text/javascript">
			$(document).ready(function() {

				// Initialise the slideshow here, the rest of the slides can be added by JS
				var banner = new BannerSlideshow({
					wrap: $('#top-banner'),
					contentOffset: -60,
					slides: [
						{
							image:'../assets/images/temp/1175x500_2.png',
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

			<nav class="breadcrumbs">
				<ul>
					<li class="on"><a href="#">Alternative navigation</a></li><li class="div">/</li>
					<li><a href="#">Another link</a></li><li class="div">/</li>
					<li><a href="#">Another link</a></li><li class="div">/</li>
					<li><a href="#">Another link</a></li><li class="div">/</li>
					<li><a href="#">Another link</a></li><li class="div">/</li>
					<li><a href="#">Another link</a></li>
				</ul>
			</nav>

			<div class="block-list col4">
				<div class="block-heading">
					<h3 class="heading">This is the heading of the next section</h3>
					<a href="#" class="right">All items</a>
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

			<div class="hr"></div>

			<div class="usp-list col3">
				<div class="item" data-height-group="usp1">
					<div class="border">
						<h3 class="heading">Another Section</h3>
						<p class="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
					</div>
				</div>
				<div class="item" data-height-group="usp1">
					<div class="border">
						<h3 class="heading">Another Section</h3>
						<p class="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
					</div>
				</div>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<div class="item" data-height-group="usp1">
					<div class="border">
						<h3 class="heading">Another Section</h3>
						<p class="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
					</div>
				</div>
			</div>

			<div class="hr"></div>

		</div> <!-- wrap -->
	</section> <!-- outer -->

<?php include 'includes/footer.php' ?>