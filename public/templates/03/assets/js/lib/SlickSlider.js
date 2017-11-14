/**
 * Slick Slider configuration, MUST change the slidesToShow options.
 * Copy function to create other slider configurations
 *
 *
 * Docs: http://kenwheeler.github.io/slick/
 */
require('../../../../../../node_modules/slick-carousel/slick/slick.js');
require('../../../../../../node_modules/slick-carousel/slick/slick.scss');

(function ($) {

    Slider = function (parent) {
        $(parent).slick({
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
})(jQuery);