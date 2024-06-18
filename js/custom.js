$(function () {

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        on: {
            slideChangeTransitionEnd: function () {
                $('.main_visual .main_visual_list li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        }
    });

    $('.main_visual_list li button').on('click', function () {
        let idx = $(this).parent().index();

        main_visual_slide.slideToLoop(idx, 400);
    });

})