// document.addEventListener("DOMContentLoaded", function () {
//     let menuItem = document.querySelector(".main-nav > li:last-child > a");
//     let megaMenu = document.querySelector(".mega-menu");

//     // عند الضغط على الزر، يظهر أو يختفي الميجا منيو
//     menuItem.addEventListener("click", function (e) {
//         e.preventDefault(); // منع الانتقال لو الزر رابط
//         megaMenu.classList.toggle("active");
//     });

//     // عند الضغط في أي مكان خارج الميجا منيو، تختفي
//     document.addEventListener("click", function (e) {
//         if (!menuItem.contains(e.target) && !megaMenu.contains(e.target)) {
//             megaMenu.classList.remove("active");
//         }
//     });
// });
const slider = document.querySelector(".games-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  slider.scrollLeft += 350;
});

prevBtn.addEventListener("click", () => {
  slider.scrollLeft -= 350;
});
