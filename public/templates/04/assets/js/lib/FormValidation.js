require('../../../../../../node_modules/parsleyjs/dist/parsley.js');

(function($) {

    /**
     * Form Validation using Parsley JS: http://parsleyjs.org/doc/index.html
     */
    initValidation = function()
    {
        // Validate all forms with the "validate" class
        $('form.validate').parsley({
            trigger: 'change', // Which event to trigger validation on
            errorClass: 'has-error', // Class when there are errors
            successClass: 'has-success', // Class for successful validation
            errorsMessagesDisabled: true, // Whether to add disable messages on each field
            trimValue: true, // Trim whitespace before validation
            validationThreshold: 3, // Minimum number of chars before validation will fire

            classHandler: function(field)
            {
                var tagName = (field.$element.prop('tagName') || '').toLowerCase();
                var type = (field.$element.attr('type') || '').toLowerCase();

                // Add feedback class and icons
                if (type != 'radio' && type != 'checkbox' && tagName != 'textarea') {
                    field.$element.after(
                        '<i class="fa fa-check form-control-feedback feedback-success" aria-hidden="true"></i>' +
                        '<i class="fa fa-remove form-control-feedback feedback-error" aria-hidden="true"></i>'
                    );
                    field.$element.parents('.form-group').eq(0).addClass('has-feedback');
                }

                return field.$element.parents('.form-group').eq(0);
            },

            errorsContainer: function (field)
            {
                return field.$element.parents('.form-group').eq(0);
            }

        });
    }


})(jQuery);