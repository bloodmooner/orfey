
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

    //Tabs toggle
    $('ul.services__tabs').on('click', 'li:not(.services__tab_active)', function() {
      $(this)
        .addClass('services__tab_active').siblings().removeClass('services__tab_active')
        .closest('div.services__content').find('div.services__tab-list').removeClass('open').eq($(this).index()).addClass('open');
    });

    //Tabs animation
    const tabsContainer = document.querySelector(".services__tabs-container"),
    tabs = tabsContainer.querySelectorAll("li"),
    selector = tabsContainer.querySelector(".selector");


    function animationSelector () {
    let activeItem = tabsContainer.querySelector("li.active");
    selector.style.width = activeItem.offsetWidth + "px";
    selector.style.left = activeItem.offsetLeft + "px";
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabsContainer.querySelector("li.active").classList.remove("active");
        tab.classList.add("active");
        animationSelector();
      });
    });

    animationSelector();




    //Accordion
    $(".services__tab-body:first").css("display", "block");
  
    $(".services__tab-header").click(function () {
      
      if ( $(this).find(".services__tab-icon").hasClass("services__tab-icon_active") ) {
        $(this).find(".services__tab-icon").removeClass("services__tab-icon_active");
      } else {
        $(".services__tab-icon").removeClass("services__tab-icon_active");
        $(this).find(".services__tab-icon").addClass("services__tab-icon_active");
      }
      

      $(this).next().slideToggle(400);
      $(".services__tab-body").not($(this).next()).slideUp(400); 
    });

    

});

