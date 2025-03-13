document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,      // Безкінечний слайдер
    navigation: {    // Кнопки навігації
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});