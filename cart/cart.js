var backdrop = document.querySelector('.backdrop');
var bag=document.querySelector('.fa-shopping-bag');
var shop =document.querySelector('.shop_bag');
var cross=document.querySelector('.cross');


// shopping bag close
cross.addEventListener('click', function(){
    // mobNav.style.display='none';
    shop.classList.remove('open');
    setTimeout(function(){
        backdrop.classList.remove('open');
    },10)
  
  });
  
  // shopping bag open
  bag.addEventListener('click', function(){
    shop.classList.add('open');
    setTimeout(function(){
      backdrop.classList.add('open');
  },10)
  
  })

$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    $('.backdrop').toggleClass("show");
  });
  $('.new-btn').click(function(){
    $('nav ul .new-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
  });
  $('.woman-btn').click(function(){
    $('nav ul .woman-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
  });
  // start sub of ready
  $('.ready-btn').click(function(){
    $('nav ul .ready-show').toggleClass("show_red");
    $('nav ul .sub_first').toggleClass("rotate");
  });
  $('.un-btn').click(function(){
    $('nav ul .un-show').toggleClass("show_un");
    $('nav ul .sub_second').toggleClass("rotate");
  });
  $('.cat-btn').click(function(){
    $('nav ul .cat-show').toggleClass("show_cat");
    $('nav ul .sub_third').toggleClass("rotate");
  });
  $('.mod-btn').click(function(){
    $('nav ul .mod-show').toggleClass("show_mod");
    $('nav ul .sub_fourth').toggleClass("rotate");
  });
  // end sub of ready
  $('.man-btn').click(function(){
    $('nav ul .man-show').toggleClass("show2");
    $('nav ul .third').toggleClass("rotate");
  });
  // start sub of men
  
  $('.men-btn').click(function(){
    $('nav ul .men-show').toggleClass("showmen");
    $('nav ul .sub_menfirst').toggleClass("rotate");
  });
  
  $('.menstit-btn').click(function(){
    $('nav ul .men-unshow').toggleClass("showmenun");
    $('nav ul .sub_mensecond').toggleClass("rotate");
  });
  $('.men-catbtn').click(function(){
    $('nav ul .men-catshow').toggleClass("showmencat");
    $('nav ul .sub_menthird').toggleClass("rotate");
  });
  // end sub of men
  $('.kid-btn').click(function(){
    $('nav ul .kid-show').toggleClass("show3");
    $('nav ul .fourth').toggleClass("rotate");
  });
  $('.beau-btn').click(function(){
    $('nav ul .beau-show').toggleClass("show4");
    $('nav ul .fifth').toggleClass("rotate");
  });
  $('.access-btn').click(function(){
    $('nav ul .access-show').toggleClass("show5");
    $('nav ul .sixth').toggleClass("rotate");
  });
  $('.home-btn').click(function(){
    $('nav ul .home-show').toggleClass("show6");
    $('nav ul .seventh').toggleClass("rotate");
  });
  $('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  })
