/**
 * Imports for Sass styling.
 * Minified version -> assets/dist/app.min.css
 */
require('../scss/screen.scss');
require('../scss/print.scss');


/**
 * Core Javascript/Jquery functionality
 * Minified version -> assets/dist/app.bundle.min.js
 */

require('./lib/EqualHeightGroup');
require('./lib/FormValidation');
require('./lib/SlickSlider');
require('../../../../../node_modules/jquery-placeholder/jquery.placeholder');

(function ($) {

    $(document).on('ready', function () {

        window.page = new Page();
    });

    // ------------------------------------------------------------------------------------------------------
    // COMMON PAGE FUNCIONALITY
    Page = function () {
        // Equal height groups
        equalHeightGroup = new EqualHeightGroups();

        // Sliders
        homeSlider = new Slider(".homepage-slider");

        // Placeholder support in older browsers
        $('input, textarea').placeholder();
        // Form validation
        //validation = new initValidation();
        validate = new initValidation();
    }

})(jQuery);
