/**
 * Slick Slider configuration, MUST change the slidesToShow options.
 * Docs: http://kenwheeler.github.io/slick/
 *
 * MULTIPLE CONFIGS MAY BE REQIRED FOR DIFFERENT CSS CLASSES
 */

$(document).ready(function () {
    $('.slider').slick({
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
