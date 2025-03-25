document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,      // Безкінечний слайдер
    navigation: {    // Кнопки навігації
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
//   let modal = document.getElementById("menuModal");
//         let btn = document.getElementById("openModal");
//         let span = document.getElementsByClassName("close")[0];
        
//         btn.onclick = function() {
//             modal.style.display = "block";
//         }
        
//         span.onclick = function() {
//             modal.style.display = "none";
//         }
        
//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
// }
//         (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();