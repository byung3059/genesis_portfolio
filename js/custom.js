$(function () {

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.main_visual .main_visual_list li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        }
    });

    $('.main_visual_list li').on('click', function () {
        let idx = $(this).index();

        main_visual_slide.slideToLoop(idx, 400);
    });

    const main_product_slide = new Swiper('.product_slide', {

        slidesPerView: 3,
        spaceBetween: 30,
        on: {
            slideChangeTransitionStart: function () {
                $('.main_product_dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        }
    })

    $('.main_product_dots li').on('click', function () {
        let idx = $(this).index();

        main_product_slide.slideTo(idx, 400);
    });

    const main_content_slide = new Swiper('.content_slide', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.content_slide_dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        }
    })

    $('.content_slide_dots li').on('click', function () {
        let idx = $(this).index();

        main_content_slide.slideTo(idx, 400);
    })

    AOS.init();


})