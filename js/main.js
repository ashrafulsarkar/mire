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
        
        //course select
        $( '.course-part label input[type="radio"]' ).click(function() {
            $('.course-part-single').css("border-color", "#fff");
            if($(this).prop("checked", true)){
                $(this).closest('.course-part-single').css("border-color", "#164E7F");
            }
        });

        // after page load modal 
        setTimeout(function() {
            $('#admodal').find('.item').first().addClass('active');
            $('#admodal').modal({
                backdrop: 'static',
                keyboard: false
            });
        }, 1000);
        $("#buttonSuccess").click(function(e){
            e.preventDefault();
            $('#admodal').modal('hide');
        })

        //course select
        $('#select-course input[type="checkbox"]').each(function(){
            if($(this).prop("checked")){
                $(this).attr('checked','checked');
                $(this).siblings('.select-course').addClass('course-selected');
                $(this).siblings('.select-course').text('Unselect');
            }
        });
        $( '#select-course input[type="checkbox"]' ).click(function() {
            if($(this).prop("checked")){
                $(this).attr('checked','checked');
                $(this).siblings('.select-course').addClass('course-selected');
                $(this).siblings('.select-course').text('Unselect');
            }else{
                $(this).removeAttr('checked');
                $(this).siblings('.select-course').removeClass('course-selected');
                $(this).siblings('.select-course').text('Select');
            }
        });

        // accordian plus minus 
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fas").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
        });

        if($( window ).width()<992){
            $(".tab-show").each(function(){
                $(this).addClass("tab-pane fade");
            });
        }
          
    });
})(jQuery);