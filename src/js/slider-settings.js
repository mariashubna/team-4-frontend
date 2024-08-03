document.addEventListener('DOMContentLoaded', function() {
  var swiper;
  function initSwiper() {
      if (window.innerWidth <= 1280) {
          if (!swiper) {
              swiper = new Swiper('.swiper', {
                  loop: false,
                  slidesPerView: 1,
                  breakpoints: {
                    768: {
                      slidesPerView: 2,
                    }
                  },
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: false,
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
              });
              var slides = document.querySelectorAll('.swiper .swiper-slide');
              slides.forEach(function(slide) {
                  slide.setAttribute('role', 'listitem');
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
