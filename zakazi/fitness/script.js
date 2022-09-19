const screenWidth = window.screen.width;
console.log(screenWidth);

if (screenWidth > 430) {
  document.body.classList.add("swiper");
  document.body.querySelector(".container").classList.add("swiper-wrapper");
  document.body.querySelector("#sector1").classList.add("swiper-slide");
  document.body.querySelector("#sector2").classList.add("swiper-slide");
  document.body.querySelector("#sector3").classList.add("swiper-slide");
  document.body.querySelector("#sector4").classList.add("swiper-slide");
  var swiper = new Swiper(".swiper", {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,

    // freeMode: true,
    // freeModeSticky: true
  });
  console.log(swiper);
}
