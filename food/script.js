let age = document.querySelector(".age");
let rost = document.querySelector(".rost");
let ves = document.querySelector(".ves");
let woman_result = 0;
let man_result = 0;
let age1,
  rost1,
  ves1 = 0;
let knopka = document.querySelector(".result");
let davai = document.querySelector(".davai2");
let compliment = document.querySelector(".compliment");
let pitanie = document.querySelector(".pitanie");
let kkal = document.querySelector(".kkal");

let pol = document.querySelector(".pol");

/* кнопкозагорание*/

let btn = document.getElementById("btn");
btn.disabled = "disabled";
function ystala() {
  age.addEventListener("change", function () {
    if (
      age.checkValidity() == false ||
      rost.checkValidity() == false ||
      ves.checkValidity() == false
    ) {
      btn.disabled = "disabled";
    } else {
      btn.disabled = false;
    }
  });
  rost.addEventListener("change", function () {
    if (
      age.checkValidity() == false ||
      rost.checkValidity() == false ||
      ves.checkValidity() == false
    ) {
      btn.disabled = "disabled";
    } else {
      btn.disabled = false;
    }
  });
  ves.addEventListener("change", function () {
    if (
      age.checkValidity() == false ||
      rost.checkValidity() == false ||
      ves.checkValidity() == false
    ) {
      btn.disabled = "disabled";
    } else {
      btn.disabled = false;
    }
  });
}

knopka.addEventListener("click", function (e) {
  age1 = age.value;
  rost1 = rost.value;
  ves1 = ves.value;
  /*if (age1 == "" || rost1 == "" || ves1 == "") {
    alert("Сначала запиши свои параметры!");
    return;
  }*/
  if (pol.value == "woman") {
    woman_result = (10 * ves1 + 6.25 * rost1 - 5 * age1 - 161) * 1.375;
    let zifra_kkal = document.querySelector(".zifra_kkal");
    zifra_kkal.textContent = Math.ceil(woman_result);
  } else if (pol.value == "man") {
    man_result = (10 * ves1 + 6.25 * rost1 - 5 * age1 + 5) * 1.375;
    let zifra_kkal = document.querySelector(".zifra_kkal");
    zifra_kkal.textContent = Math.ceil(man_result);
  }

  davai.classList.add("hidden2");
  compliment.classList.remove("hidden");
  pitanie.classList.remove("hidden2");
  kkal.classList.remove("hidden");
  e.preventDefault();
});

/* работа с днями неделями */
let weekday = document.querySelector(".week");
weekday.addEventListener("change", function () {
  let monday = document.querySelector(".monday_food");
  let tuesday = document.querySelector(".tuesday_food");
  let wednesday = document.querySelector(".wednesday_food");
  let thursday = document.querySelector(".thursday_food");
  let friday = document.querySelector(".friday_food");
  let weekend = document.querySelector(".weekend_food");

  monday.classList.add("praghy_monday");
  tuesday.classList.add("praghy_tuesday");
  wednesday.classList.add("praghy_wednesday");
  thursday.classList.add("praghy_thursday");
  friday.classList.add("praghy_friday");
  weekend.classList.add("praghy_weekend");

  switch (weekday.value) {
    case "monday":
      monday.classList.remove("praghy_monday");
      break;
    case "tuesday":
      tuesday.classList.remove("praghy_tuesday");
      break;
    case "wednesday":
      wednesday.classList.remove("praghy_wednesday");
      break;
    case "thursday":
      thursday.classList.remove("praghy_thursday");
      break;
    case "friday":
      friday.classList.remove("praghy_friday");
      break;
    case "weekend":
      weekend.classList.remove("praghy_weekend");
      break;
  }
});
