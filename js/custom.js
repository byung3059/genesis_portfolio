$(function () {




    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
    })

    $('.header .inner .util .mbtn').on('click', function () {
        $('.header .sub').toggleClass('on')
    })

    $('.header .inner .sub>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.sub02').stop().slideUp();

        if ($('.header .inner .sub').hasClass('on')) {
            e.preventDefault();

            $(this).next().stop().slideToggle();
        }
    })

    $('.header .inner .sub02>li>a').on('click', function (e) {

        e.preventDefault();
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.header .mbtn').removeClass('on');
        $('.header .sub>ul>li ul').removeAttr('style');
        $('.header .sub .sub02').removeAttr('style');
    })



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
        },


    });

    $('.main_visual_list li').on('click', function () {
        let idx = $(this).index();

        main_visual_slide.slideToLoop(idx, 400);
    });







    const main_product_slide = new Swiper('.product_slide', {

        slidesPerView: 1,
        spaceBetween: 30,
        on: {
            slideChangeTransitionStart: function () {
                $('.main_product_dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        },

        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
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



    const main_space_slide = new Swiper('.space_slide', {

        slidesPerView: 2,
        spaceBetween: 30,

        on: {
            slideChangeTransitionStart: function () {
                $('.inner_space .left .space_desc li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');

                $('.inner_space .space_slide_dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        },

        breakpoints: {

            769: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    })

    $('.space_slide_dots li').on('click', function () {
        let idx = $(this).index();

        main_space_slide.slideToLoop(idx, 400);
    })



    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })



    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})