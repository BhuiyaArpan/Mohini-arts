// scroll top addclass 

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.web-header-bottom').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('.web-header-bottom').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

// catagory-inner slider

  $('.catagory-inner-sec-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
  });

//   menubar

  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("menu-visible");
    $(".menu_overlay").toggleClass("menu-visible");
    $("body").css("overflow", "hidden");
  });
  
  $(".menu_close_btn").click(function () {
    $(".navbar-collapse").removeClass("menu-visible");
    $(".navbar-collapse").removeClass("show");
    $(".menu_overlay").removeClass("menu-visible");
    $("body").css("overflow", "auto");
  });
  
  $(".menu_overlay").click(function () {
    $(".menu_overlay").removeClass("menu-visible");
    $(".navbar-collapse").removeClass("show");
    $(".navbar-collapse").removeClass("menu-visible");
    $("body").css("overflow", "auto");
  });
  
  
  $( ".web-header .navbar-nav .nav-item ul" ).find( "li" ) .closest("ul") .parent().parent('li') .addClass( 'dropdownMenu' );
  $(".web-header .navbar-nav .nav-item").click(function(){
    $(this).toggleClass("curent");
    $('.web-header .navbar-nav .nav-item').not($(this)).removeClass('curent');
  });