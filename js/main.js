;(function ($) {
    $(document).ready(function(){

        // owl carousel review part
        $('.review-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
            nav:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        })

        // hero section magnificPopup 
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        // meanmenu
        $('.main_nav').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanRevealPosition: "left",
        });
        $(".meanmenu-reveal").click(function(){
            $(".mean-expand").html('<i class="fas fa-sort-down"></i>');
        });
        $(".mean-expand").click(function(){
            $(this).html('<i class="fas fa-sort-down"></i>');
        });

        // nice selector
        $('select').niceSelect();
        
        
    });
})(jQuery);