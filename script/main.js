$(document).ready(function(){
  $(".subMenu").hide();

  $("nav").mouseover(function(){
    $(".subMenu").stop().slideDown(300);
  }).mouseout(function(){
    $(".subMenu").stop().slideUp(300);
  });

  var imgs = 2;
  var now = 0;

  start();

  function start() {
    $(".imgSlide > a").eq(0).siblings().animate({width:"-1200px"});

    setInterval(function(){
      now = now==imgs ? 0 : now+=1;
      $(".imgSlide > a").eq(now-1).animate({width:"-1200px"});
      $(".imgSlide > a").eq(now).animate({width:"1200px"});
    },3000);
  }
  
  $(".notice li:first").click(function(){
    $("#modalWrap").addClass("active");
  });
  $(".btn").click(function(){
    $("#modalWrap").removeClass("active");
  });
});