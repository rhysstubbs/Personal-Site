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
require('../../../node_modules/jquery/dist/jquery.js');

require('./lib/EqualHeightGroup');
require('./lib/FormValidation');
require('./lib/SlickSlider')

(function ($) {

    $(document).on('ready', function () {

        window.page = new Page();
    });

    // ------------------------------------------------------------------------------------------------------
    // COMMON PAGE FUNCIONALITY
    Page = function () {
        // Equal height groups
        equalHeightGroup = new EqualHeightGroups();

        // Placeholder support in older browsers
        $('input, textarea').placeholder();

        // Form validation
        this.initValidation();
    }

})(jQuery);
