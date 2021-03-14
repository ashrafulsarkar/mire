;(function ($) {
    $(document).ready(function(){

        // search option
        $( ".input_part input" ).focus(function() {
            $( ".search_sugg" ).removeClass('d-none');
        });
        $( ".input_part input" ).blur(function() {
            $( ".search_sugg" ).addClass('d-none');
        });

        //password show hide
        $("#show_hide_password a").on('click', function(event) {
            event.preventDefault();
            if($('#show_hide_password input').attr("type") == "text"){
                $('#show_hide_password input').attr('type', 'password');
                $('#show_hide_password i').addClass( "fa-eye-slash" );
                $('#show_hide_password i').removeClass( "fa-eye" );
            }else if($('#show_hide_password input').attr("type") == "password"){
                $('#show_hide_password input').attr('type', 'text');
                $('#show_hide_password i').removeClass( "fa-eye-slash" );
                $('#show_hide_password i').addClass( "fa-eye" );
            }
        });
        
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

        // as a jQuery plugin
        $('.main_nav').hcOffcanvasNav({
            disableAt: 1200,
            levelOpen:'expand',
            levelTitles:false,
            closeActiveLevel:false,
            closeOnClick:true,
        });


        // nice selector
        $('select').niceSelect();
        
        
    });
})(jQuery);