document.addEventListener('DOMContentLoaded', function() {
  var swiper;
  function initSwiper() {
      if (window.innerWidth <= 1280) {
          if (!swiper) {
              swiper = new Swiper('.swiper', {
                  loop: false,
                  slidesPerView: 1,
                  // spaceBetween: 40,
                  breakpoints: {
                    // when window width is >= 480px
                    768: {
                      slidesPerView: 2,
                      // spaceBetween: 64
                    }
                  },
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
              });
          }
      } else {
          if (swiper) {
              swiper.destroy(true, true);
              swiper = null;
          }
      }
  }

  initSwiper();
  window.addEventListener('resize', initSwiper);
});
