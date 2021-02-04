;(function ($) {
    $(document).ready(function(){

        // owl carousel review part
        $('.review-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            nav:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                }
            }
        })
        
    });
})(jQuery);