"use strict";

const menu1 = document.querySelector(".menuItem1");
const menu2 = document.querySelector(".menuItem2");
const menu3 = document.querySelector(".menuItem3");

function closeNav() {
  document.querySelector(".openNav").classList.toggle("!left-0");
  document.querySelector("body").classList.toggle("overflow-hidden");
  menu1.classList.toggle("rotate-45");
  menu1.classList.toggle("translate-y-[13px]");
  menu2.classList.toggle("translate-x-[-100%]");
  menu2.classList.toggle("opacity-0");
  menu3.classList.toggle("rotate-[-48deg]");
  menu3.classList.toggle("translate-y-[-10px]");
}

// slider
$(".mySlider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  arrows: false,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
        infinite: true,
        autoplaySpeed: 2100,
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        autoplay: false,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1.9,
        slidesToScroll: 1,
      },
    },
  ],
});
//
$(".boxSlider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        autoplay: false,
        infinite: true,
        autoplaySpeed: 2100,
        slidesToShow: 1.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        autoplay: false,
        infinite: false,
        autoplaySpeed: 2000,
        slidesToShow: 1.09,
        slidesToScroll: 1,
      },
    },
  ],
});

// back to top button //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});
