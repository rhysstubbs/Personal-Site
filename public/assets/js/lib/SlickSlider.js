/**
 * Slick Slider configuration, MUST change the slidesToShow options.
 * Docs: http://kenwheeler.github.io/slick/
 */

(function ($) {

    require('../../../../node_modules/slick-carousel/slick/slick.js');

    $(document).ready(function () {

        slick = new slick();

        $('.slick-slider-homepage').slick({
            arrows: true,
            dots: true,
            slidesToShow: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

})(jQuery);