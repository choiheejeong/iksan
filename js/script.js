
//메인 슬라이드
const swiper1 = new Swiper('.slide_visual', {
    loop: true,
    effect:'fade',
    autoplay: {    
    delay: 3000,  
   },
   speed: 1000,

   // 버튼
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

/*
축제 슬라이드
const festival = new Swiper('.festival .f_swiper', {
  containerModifierClass: 'f_swiper',
  wrapperClass:'iksan_festival',
  slideClass:'fst',
  loop: true,
  slidesPerView: auto,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },


});
*/