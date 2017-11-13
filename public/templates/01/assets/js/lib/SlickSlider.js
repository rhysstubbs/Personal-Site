/**
 * Slick Slider configuration, MUST change the slidesToShow options.
 * Docs: http://kenwheeler.github.io/slick/
 */
require('../../../../../../node_modules/slick-carousel/slick/slick.js');

(function ($) {

    Slider = function (parent) {
        $(parent).slick({
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

})(jQuery);