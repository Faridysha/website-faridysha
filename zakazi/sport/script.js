let woman = document.querySelector(".woman_size");
let man = document.querySelector(".man_size");
woman.onclick = function () {
  let woman_window = document.querySelector(".window1");
  console.log(woman_window);
  woman_window.classList.toggle("woman_window");
};
man.onclick = function () {
  let man_window = document.querySelector(".window2");
  man_window.classList.toggle("man_window");
};
