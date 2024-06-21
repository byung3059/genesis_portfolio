$(function () {

    // const el = document.querySelector('.main_product');


    // const ani = gsap.timeline({

    //     scrollTrigger: {
    //         trigger: ".main_product",
    //         pin: true,
    //         scrub: 3,
    //         start: "top top",
    //         markers: true,
    //     }
    // });
    // const ani2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".main_content",
    //         pin: true,
    //         scrub: 5,
    //         //start: "top top",
    //         // markers: true,
    //     }
    // });

    // ani.from('.main_product .inner', {
    //     x: 500,
    // }).to('.main_product .inner', {

    // })

    // ani2.from('.main_content .inner', {
    //     scale: 1.1,
    // }).to('.main_content .inner', {

    // })


    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
    })

    $('.header .inner .util .mbtn').on('click', function () {
        $('.header .sub').toggleClass('on')
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



    const main_space_slide = new Swiper('.space_slide', {

        slidesPerView: 2,
        spaceBetween: 30,
        on: {
            slideChangeTransitionStart: function () {
                $('.inner_space .left li')
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
        }
    })

    $('.space_slide_dots li').on('click', function () {
        let idx = $(this).index();

        main_space_slide.slideToLoop(idx, 400);
    })

    AOS.init();


})