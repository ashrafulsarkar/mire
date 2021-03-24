;(function ($) {
    $(document).ready(function(){

        // search option
        // $( ".has_input_part input" ).focus(function() {
        //     $( ".has_search_sugg" ).removeClass('d-none');
        // });

        // $( ".has_input_part input" ).blur(function() {
        //     $( ".has_search_sugg" ).addClass('d-none');
        // });
        if($( window ).width()<768){
            $( ".has_input_part input" ).focus(function() {
                location.replace("#search");
                if(window.location.toString().includes("#search")){
                    $( "#mobile_search" ).removeClass('d-none');
                }
            });
            $( ".mobile_input_part span a" ).click(function() {
                $( "#mobile_search" ).addClass('d-none');
            });

        }

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