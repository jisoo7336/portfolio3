

const container = document.querySelector('#container');
let offset = 0;

window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 60;

  if (offset < 0) {
    offset = 0;
  } else if (offset > 10000 - window.innerWidth) {
    offset = 10000 - window.innerWidth;
  }

  container.style.transform = `translateX(-${offset}px`;

});

$(function(){
  $('.s1').css("transform","translateX(0px)").css("opacity","1");

  $('.s2').css("transform","translateX(0px)").css("opacity","1");

  $('.s3').css("transform","translateX(0px)").css("opacity","1");

  $('.s4').css("transform","translateX(0px)").css("opacity","1");

  $('.s5').css("transform","translateX(0px)").css("opacity","1");


  // $(window).scroll(function(){
  //     var ws=$(this).scrollTop();

  //   var s4=$('.s4').offset().left;
  //     if(ws>s4-500){
  //       $('.s4').css("transform","translateY(0px)").css("opacity","1");
  //     }

  // });

});