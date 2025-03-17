document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,      // Безкінечний слайдер
    navigation: {    // Кнопки навігації
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
  let modal = document.getElementById("menuModal");
        let btn = document.getElementById("openModal");
        let span = document.getElementsByClassName("close")[0];
        
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }