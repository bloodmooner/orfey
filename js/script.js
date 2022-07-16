
$(document).ready(function(){

     // Mobile Menu START

     let closeMenuButton = $(".header-mobile__close");
     let openMenuButton = $(".header__burger");
     let menuContainer = $(".header-mobile");
     let menuLinks = $(".header-mobile__link");
   
   
     openMenuButton.click(function() {
       menuContainer.addClass("header-mobile_active");
       console.log('open');
     });
   
     closeMenuButton.click(function() {
       menuContainer.removeClass("header-mobile_active");
     });
   
     menuLinks.click(function() {
       menuContainer.removeClass("header-mobile_active");
     });
 
 
     // Mobile Menu END

    $('.cert__items').slick({
        'slidesToShow': 4,
        'arrows': true,
        nextArrow: $(document).find('.cert__arrow_left'),
        prevArrow: $(document).find('.cert__arrow_right'),
    }); 

});

