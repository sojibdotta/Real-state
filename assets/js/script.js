
// jquery start 

$(function(){

  $('#menu').slicknav({
    brand: "<h3>REAL<em>HOUSE</em></h3>",
    closedSymbol: '',
    openedSymbol: ''
  });

  // header animate 
  $(window).scroll(function(){
    var scroll = $(this).scrollTop()
    if(scroll > 100){
        $('.nav-top').addClass('navbar-animate')
    }else{
        $('.nav-top').removeClass('navbar-animate')
    }
  })
  // slicknav animate 
  $(window).scroll(function(){
    var scroll = $(this).scrollTop()
    if(scroll > 100){
        $('.slicknav_menu').addClass('slicknav-animate')
    }else{
        $('.slicknav_menu').removeClass('slicknav-animate')
    }
  })


  // banner dropdown 
  $('.tab-content .properties .all-properties').click(function() {
    $('.tab-content .properties .properties-dropdown').toggleClass('show');
  })
  $('.tab-content .room .all-room').click(function() {
    $('.tab-content .room .room-dropdown').toggleClass('show');
  })
  $('.tab-content .price .all-price').click(function() {
    $('.tab-content .price .price-dropdown').toggleClass('show');
  })
  // for nav tabs 
  $('.nav-tabs .nav-item .nav-link').click(function(){
    $('.activeA').removeClass('activeA')
    $(this).toggleClass('activeA')
  })

  // banner slider 
  $('.banner-bottom-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    infinite: true,
    autoplaySpeed: 6000,
    dots: false,
    prevArrow: "<span class='priv-arrow'><i class='fas fa-angle-left'></i></span>",
    nextArrow: "<span class='next-arrow'><i class='fas fa-angle-right'></i></span>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,              
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,              
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,              
          }
        },

      ]
  });

  // venobox here 
  $('.venobox').venobox();

  // banner slider 
  $('.recent-poperties-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    infinite: true,
    autoplaySpeed: 6000,
    dots: false,
    prevArrow: "<span class='priv-arrow'><i class='fas fa-angle-left'></i></span>",
    nextArrow: "<span class='next-arrow'><i class='fas fa-angle-right'></i></span>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,             
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,            
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,            
          }
        },

      ]
  });

})

// aos library 
AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-quad',
  delay: 100,
});

// back to top 
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
  return false;
});
