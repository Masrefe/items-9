(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        $(".screenshot-carousel").owlCarousel({
          margin:30,
        	loop:true,
        	dots:true,
          center:true,
          navText:false,
          autoplay:true,
          smartSpeed:1000,
          responsive:{
                    0:{
                        items:1,
                        nav:true,
                         loop:true
                    },
                    450:{
                        items:1,
                        nav:true,
                         loop:true
                    },
                    600:{
                        items:3,
                        nav:true,
                         loop:true
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:true
                    }
                }

        });
        // Active Wow Js For Animation
           var wow = new WOW({
               mobile: false
               });
           wow.init();

        /* meanmenu */
        $('.main-menu').meanmenu({
              meanMenuContainer: '.mobile-menu',
              meanScreenWidth: "767"
          }); 
        // Scroll Events
        $(window).scroll(function() {

            var wScroll = $(this).scrollTop();

            // For fix heder add class
            if (wScroll > 300) {
                $('.header-area').addClass('stiky');
            } else {
                $('.header-area').removeClass('stiky');
            };

        });
        //one page nav for smoth scroll
       $('.main-nav').onePageNav({
          currentClass: 'active',
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
          filter: '',
          easing: 'swing'
        });

        // Active Counter Up 
          $('.counter-up').counterUp({
              delay: 10,
              time: 1000
          });

        // Active Back to top 
          if ($('#back-to-top').length) {
            var scrollTrigger = window.innerHeight, // px
            backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
              } else {
                $('#back-to-top').removeClass('show');
              }
            };
            backToTop();
            $(window).on('scroll', function () {
              backToTop();
            });
            $('#back-to-top').on('click', function (e) {
              e.preventDefault();
              $('html,body').animate({
                scrollTop: 0
              }, 700);
            });
          }
    });

     $(window).on('load',function(){
        //preloader
        var preLoder = $("#preloader");
        var backToTop = $(".back-to-top");
        preLoder.fadeOut(2000);
        backToTop.hide()
    });
    

   

}(jQuery));	


