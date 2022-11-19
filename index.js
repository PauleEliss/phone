let swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slide",
  allowSlideNext: "true",
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".accordion").accordion({
  collapsible: true,
  active: 10, // - active line
});

const search = document.querySelector(".header__find");
const searchClose = document.querySelector(".activ__close");
const headerfind = document.querySelectorAll(".activ");
const crossfind = document.querySelectorAll(".cross");

search.addEventListener("click", () => {
  headerfind.forEach((el) => {
    el.classList.add("header__find__form-input_1");
  });

  headerfind.forEach((el) => {
    el.classList.remove("header__find__form-input");
  });
  crossfind.forEach((el) => {
    el.classList.add("header__find__find-close");
  });

  crossfind.forEach((el) => {
    el.classList.remove("header__find__find-close_1");
  });
});

searchClose.addEventListener("click", () => {
  headerfind.forEach((el) => {
    el.classList.remove("header__find__form-input_1");
  });

  headerfind.forEach((el) => {
    el.classList.add("header__find__form-input");
  });

  crossfind.forEach((el) => {
    el.classList.remove("header__find__find-close");
  });
  crossfind.forEach((el) => {
    el.classList.add("header__find__find-close_1");
  });
});

let BurgerLineAll = document.querySelectorAll(".burger__line");
let BurgerLine = document.querySelector(".burger");
let menu = document.querySelector(".header-nav");
let menuLinks = document.querySelectorAll(".header-nav__list-item");

BurgerLine.addEventListener("click", () => {
  BurgerLineAll.forEach((al) => {
    al.classList.toggle("burger__line-close");
  });
  menu.classList.toggle("header-nav-active");
});

menuLinks.forEach((elem) => {
  elem.addEventListener("click", () => {
    BurgerLineAll.forEach((al) => {
      al.classList.remove("burger__line-close");
    });

    menu.classList.remove("header-nav-active");
  });
});

let projectStep_2 = document.querySelector(".project__step-step_2");
let projectStep_3 = document.querySelector(".project__step-step_3");
let projectStep_1 = document.querySelector(".project__step-step_1");
let projectStep_4 = document.querySelector(".project__step-step_4");

let projectDiscr_1 = document.querySelector(".project__discr_1");
let projectDiscr_2 = document.querySelector(".project__discr_2");
let projectDiscr_3 = document.querySelector(".project__discr_3");
let projectDiscr_4 = document.querySelector(".project__discr_4");

let projectImg_1 = document.querySelector(".project__img_1");
let projectImg_2 = document.querySelector(".project__img_2");
let projectImg_3 = document.querySelector(".project__img_3");
let projectImg_4 = document.querySelector(".project__img_4");

projectStep_2.addEventListener("click", () => {
  projectDiscr_2.classList.add("project__discr_2_activ");
  projectDiscr_1.classList.remove("project__discr_1_activ");
  projectDiscr_3.classList.remove("project__discr_3_activ");
  projectDiscr_4.classList.remove("project__discr_4_activ");

  projectImg_2.classList.add("project__img_2_activ");
  projectImg_1.classList.remove("project__img_1_activ");
  projectImg_3.classList.remove("project__img_3_activ");
  projectImg_4.classList.remove("project__img_4_activ");
});

projectStep_3.addEventListener("click", () => {
  projectDiscr_3.classList.add("project__discr_3_activ");
  projectDiscr_1.classList.remove("project__discr_1_activ");
  projectDiscr_2.classList.remove("project__discr_2_activ");
  projectDiscr_4.classList.remove("project__discr_4_activ");

  projectImg_3.classList.add("project__img_3_activ");
  projectImg_1.classList.remove("project__img_1_activ");
  projectImg_2.classList.remove("project__img_2_activ");
  projectImg_4.classList.remove("project__img_4_activ");
});

projectStep_1.addEventListener("click", () => {
  projectDiscr_1.classList.add("project__discr_1_activ");
  projectDiscr_2.classList.remove("project__discr_2_activ");
  projectDiscr_3.classList.remove("project__discr_3_activ");
  projectDiscr_4.classList.remove("project__discr_4_activ");

  projectImg_1.classList.add("project__img_1_activ");
  projectImg_2.classList.remove("project__img_2_activ");
  projectImg_3.classList.remove("project__img_3_activ");
  projectImg_4.classList.remove("project__img_4_activ");
});

projectStep_4.addEventListener("click", () => {
  projectDiscr_4.classList.add("project__discr_4_activ");
  projectDiscr_1.classList.remove("project__discr_1_activ");
  projectDiscr_2.classList.remove("project__discr_2_activ");
  projectDiscr_3.classList.remove("project__discr_3_activ");

  projectImg_4.classList.add("project__img_4_activ");
  projectImg_1.classList.remove("project__img_1_activ");
  projectImg_2.classList.remove("project__img_2_activ");
  projectImg_3.classList.remove("project__img_3_activ");
});
