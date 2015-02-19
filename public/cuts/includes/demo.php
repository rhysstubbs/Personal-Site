<div class="container">

	<br>
	<h2>
		Grid: 
		<span class="visible-lg-inline">Large</span>
		<span class="visible-md-inline">Desktop</span>
		<span class="visible-sm-inline">Tablet</span>
		<span class="visible-xs-inline">Handheld Landscape</span>
		<span class="visible-hs-inline">Handheld</span>
	</h2>

	<!-- 1 Column -->
	<div class="row">
		<div class="test-col col-xs-24"><div class="inner">
			.col-xs-24
		</div></div>
	</div>

	<!-- 2 Column -->
	<div class="row">
		<div class="test-col col-xs-12"><div class="inner">
			.col-xs-12
		</div></div>
		<div class="test-col col-xs-12"><div class="inner">
			.col-xs-12
		</div></div>
	</div>

	<!-- 3 Column -->
	<div class="row">
		<div class="test-col col-xs-8"><div class="inner">
			.col-xs-8
		</div></div>
		<div class="test-col col-xs-8"><div class="inner">
			.col-xs-8
		</div></div>
		<div class="test-col col-xs-8"><div class="inner">
			.col-xs-8
		</div></div>
	</div>

	<!-- 4 Column -->
	<div class="row">
		<div class="test-col col-xs-6"><div class="inner">
			.col-xs-6
		</div></div>
		<div class="test-col col-xs-6"><div class="inner">
			.col-xs-6
		</div></div>
		<div class="test-col col-xs-6"><div class="inner">
			.col-xs-6
		</div></div>
		<div class="test-col col-xs-6"><div class="inner">
			.col-xs-6
		</div></div>
	</div>

	<!-- 5 Column -->
	<div class="row">
		<div class="test-col col-xs-5th"><div class="inner">
			.col-xs-5th
		</div></div>
		<div class="test-col col-xs-5th"><div class="inner">
			.col-xs-5th
		</div></div>
		<div class="test-col col-xs-5th"><div class="inner">
			.col-xs-5th
		</div></div>
		<div class="test-col col-xs-5th"><div class="inner">
			.col-xs-5th
		</div></div>
		<div class="test-col col-xs-5th"><div class="inner">
			.col-xs-5th
		</div></div>
	</div>

	<!-- 6 Column -->
	<div class="row">
		<div class="test-col col-xs-4"><div class="inner">
			.col-xs-4
		</div></div>
		<div class="test-col col-xs-4"><div class="inner">
			.col-xs-4
		</div></div>
		<div class="test-col col-xs-4"><div class="inner">
			.col-xs-4
		</div></div>
		<div class="test-col col-xs-4"><div class="inner">
			.col-xs-4
		</div></div>
		<div class="test-col col-xs-4"><div class="inner">
			.col-xs-4
		</div></div>
		<div class="test-col col-xs-4"><div class="inner">
			.col-xs-4
		</div></div>
	</div>
	
	<!-- 12 Column -->
	<div class="row">
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		<div class="test-col col-xs-2"><div class="inner">
			
		</div></div>
		
	</div>

	<br>

	<section>
		<h2>FlexSlider Slideshow</h2>
		<div class="slideshow-demo flexslider">
		  <ul class="slides">
		    <li>
		      <img src="http://placehold.it/1120x450&text=Slide+1" />
		    </li>
		    <li>
		      <img src="http://placehold.it/1120x450&text=Slide+2" />
		    </li>
		    <li>
		      <img src="http://placehold.it/1120x450&text=Slide+3" />
		    </li>
		  </ul>
		</div>
		<script type="text/javascript">
			$(document).ready(function() {

				// Reference: http://www.woothemes.com/flexslider/
				$('.slideshow-demo').flexslider({
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
	</section>

	<!-- Form with validation -->
	<form method="post" class="form validate">
		<br>
		<h2>Form with validation</h2>
		<div class="form-group form-group-lg">
			<input type="text" class="form-control" id="form-name" name="name" placeholder="Name" tabindex="1" required>
			<span class="fa fa-check form-control-feedback" aria-hidden="true"></span>
		</div>
		<div class="form-group form-group-lg">
			<input type="email" class="form-control" id="form-email" name="email" placeholder="E-mail" tabindex="2" required>
		</div>
		<div class="row">
			<div class="col-xs-12 col-hs-24">
				<div class="form-group form-group-lg">
					<input type="text" class="form-control" id="form-mobile" name="mobile" placeholder="Mobile" tabindex="3" required>
				</div>
			</div>
			<div class="col-xs-12 col-hs-24">
				<div class="form-group form-group-lg">
					<input type="text" class="form-control" id="form-landline" name="landline" placeholder="Landline (optional)" tabindex="4">
				</div>
			</div>
		</div>
		<div class="form-group form-group-lg">
			<textarea class="form-control" id="form-message" name="message" placeholder="Message" rows="6" tabindex="5" required></textarea>
		</div>
		<button type="submit" class="btn btn-lg btn-block btn-submit">Send</button>
	</form>

	<br><br><br>

	<!-- Generic content -->
	<section>
		<div class="editor">
		  <p class="large">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		  <h2>Heading #2</h2>
		  <h3>Heading #3</h3>
		  <h4>Heading #4</h4>
		  <h5>Heading #5</h5>
		  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
		  <ul>
		  	<li>A bulleted list</li>
		  	<li>containing some items</li>
		  	<li>that you need to show</li>
		  	<li>in the content</li>
		  </ul>
		  <p>Lorem ipsum dolor sit amet, <strong>this text is in bold</strong> consectetur adipisicing elit, <i>and this text is in italic</i> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <em>This text is also in italic</em> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">This is a link somewhere</a> Excepteur sint occaecat cupidatat non proident, <b>this text is also in bold</b> sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		  <table>
		  	<tr>
		  		<th>Headings</th>
		  		<th>Inside</th>
		  		<th>The</th>
		  		<th>Table</th>
		  	</tr>
		  	<tr>
		  		<td>table content</td>
		  		<td>table content</td>
		  		<td>table content</td>
		  		<td>table content</td>
		  	</tr>
		  </table>
		  <ol>
		  	<li>A numbered list</li>
		  	<li>containing some items</li>
		  	<li>that you need to show</li>
		  	<li>in the content</li>
		  </ol>
		</div>
	</section>

	<br>

</div> <!-- wrap -->