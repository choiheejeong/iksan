
//스와이퍼 플러그인 호출
const swiper1 = new Swiper('.slide_visual', {
    // 파라메타
    loop: true,
    effect:'fade',
    autoplay: {    //자동재생
    delay: 2800,  //슬라이드 하나당 표시 시간
   },

   // 버튼
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});