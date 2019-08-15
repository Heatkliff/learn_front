jQuery(
    $(function () {
        const slider = $(".slider");

        slider.slick({
            vertical: true,
            dots: true,
            arrows: false,
            dotsClass: "slider-dots",
            verticalSwiping: true
        });

        slider.on('wheel', (function(e) {
            e.preventDefault();
            if (e.originalEvent.deltaY > 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        }));
    })
);