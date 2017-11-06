<?php include 'includes/header.php' ?>

	<section id="top-banner">
		<div class="container">
			<div class="row no-pad">
				<div class="homepage-slider flexslider hidden-xs hidden-hs">
				  <ul class="slides">
				    <li class="clearfix">
				      <img src="http://placehold.it/1225x400&text=Slide+1" />
				    </li>
				    <li class="clearfix">
				      <img src="http://placehold.it/1225x400&text=Slide+2" />
				    </li>
				    <li class="clearfix">
				      <img src="http://placehold.it/1225x400&text=1225x400" />
				    </li>
				  </ul>
				</div>
			</div>
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
	</section> <!-- outer -->

	<section id="homepage">
		<div class="container">
			<div class="body-list overlay top row clearfix">
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
			</div>

			<div class="body-list middle row clearfix">
				<div class="block-heading col-xs-24">
					<h3 class="heading">This is the heading of the next section</h3>
				</div>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
				<a class="item col-sm-8 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<figcaption>
							<h3>Item Label</h3>
						</figcaption>
					</figure>
				</a>
			</div>

			<div class="body-list bottom row clearfix">
				<div class="block-heading col-xs-24">
					<h3 class="heading">Additional Things</h3>
				</div>
				<a class="item col-sm-6 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<!-- figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption -->
					</figure>
				</a>
				<a class="item col-sm-6 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<!-- figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption -->
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
				<a class="item col-sm-6 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<!-- figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption -->
					</figure>
				</a>
				<a class="item col-sm-6 col-xs-12" href="#">
					<figure>
						<img src="http://placehold.it/400x300&text=400x300" />
						<!-- figcaption>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin</figcaption -->
					</figure>
				</a>
				<!-- For 2-up lists (loop.index0 % 2 == 0) --><div class="clear hl-show h-show"></div>
			</div>

			<div class="body-list other row clearfix">
				<div class="item col-sm-8 col-xs-12" data-height-group="usp2">
					<h3 class="heading">Another Section</h3>
					<p class="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
				</div>
				<div class="item col-sm-8 col-xs-12" data-height-group="usp2">
					<h3 class="heading">Another Section</h3>
					<p class="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
					This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
				</div>
				<div class="item col-sm-8 col-xs-12" data-height-group="usp2">
					<h3 class="heading">Another Section</h3>
					<p class="text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean</p>
				</div>
			</div>

		</div> <!-- wrap -->
	</section> <!-- outer -->

<?php include 'includes/footer.php' ?>