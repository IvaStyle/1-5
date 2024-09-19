let link = document.querySelector('link');
function reloadWindow(){
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    })
}
function updateWindow() {
    if (window.innerWidth < 768){
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        reloadWindow()
    } else {
        reloadWindow();
        link.href = '#';
    }
}

const swiperCustom = document.querySelector('.swiper');
var swiper = new Swiper(swiperCustom, {
    slidesPerView: 1.3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.5,
          spaceBetween: 40
        }
      }
  });

   function test() {
        if (innerWidth >= 768) {
            swiper.disable()
        }
    }

    test();
    

  document.querySelector('.reveal').addEventListener('click', function() {
    const container = document.querySelector('.swiper-wrapper');
    const button = this;
    button.classList.toggle('active');
    container.classList.toggle('active_click');
    button.textContent !== 'Показать все' ? button.textContent = 'Показать все' : button.textContent = 'Скрыть'   ;
    console.log(button)
  });
  