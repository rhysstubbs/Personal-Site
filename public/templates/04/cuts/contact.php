<?php include 'includes/header.php' ?>

	<section id="contact">
		<div class="container pad-top pad-bot">
            <h1 class="page-title">Contact Form</h1>
			<div class="row">
				<div class="form col-md-18 col-sm-16 col-xs-24">
					<form method="post" class="form validate">
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
				</div>
				<div class="right col-md-6 col-sm-8 col-xs-24">
					<i class="fa fa-phone"></i> 01234567899<br>
					<i class="fa fa-mobile"></i> 01234567899<br>
					<i class="fa fa-building"></i> 9 station road<br>
					<i class="fa fa-building"></i>Exeter<br>
					<i class="fa fa-building"></i>Postcode
				</div>
			</div>
		</div>
	</section> <!-- section -->

<?php include 'includes/footer.php' ?>