$('#myCarousel').on('slide.bs.carousel', function (e) {
            const nextSlideIndex = $(e.relatedTarget).index();
            if (nextSlideIndex === 1) {
                $(this).find('.carousel-item').first().removeClass('active');
            }
        });