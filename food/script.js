let age = document.querySelector(".age");
let rost = document.querySelector(".rost");
let ves = document.querySelector(".ves");

function Calculator() {
  age.addEventListener("input", function (e) {
    age1 = e.target.value;
  });
  rost.addEventListener("input", function (e) {
    rost1 = e.target.value;
  });
  ves.addEventListener("input", function (e) {
    ves1 = e.target.value;
  });
}
Calculator();
let knopka = document.querySelector(".result");
let davai = document.querySelector(".davai2");
let compliment = document.querySelector(".compliment");
let pitanie = document.querySelector(".pitanie");
let kkal = document.querySelector(".kkal");

knopka.onclick = function (e) {
  e.preventDefault();
  davai.classList.add("hidden2");
  compliment.classList.remove("hidden");
  pitanie.classList.remove("hidden");
  kkal.classList.remove("hidden");
};
