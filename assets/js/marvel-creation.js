/*
 * Version: 1.0.1
 * Template: chat bot ai
 * Author: Creatiix Design
 * Design and Developed by: Creatiix Design
 * NOTE: This file contains the script for initialize & listener Template.
 */
/*----------------------------------------------
Index Of Script
------------------------------------------------
:: Back To Top
:: Portfolio Slider
:: Generic Slick Slider
:: Banner Slider
:: Reviews Slider
:: Offcanvas & Navbar Events
------------------------------------------------
----------------------------------------------*/

(function () {
  "use strict";

  jQuery(document).ready(function () {
    callPortfolioSlider();
  });

  /*----------------Back To Top--------------------*/
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.classList.add("animate__animated", "animate__fadeOut");

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 350) {
        backToTop.classList.remove("animate__fadeOut");
        backToTop.classList.add("animate__fadeIn");
      } else {
        backToTop.classList.remove("animate__fadeIn");
        backToTop.classList.add("animate__fadeOut");
      }
    });

    // scroll body to 0px on click
    const topBtn = document.querySelector("#top");
    if (topBtn) {
      topBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }

  /*----------------Portfolio Slider--------------------*/
  function callPortfolioSlider() {
    if (typeof $ !== "undefined" && $.fn.slick && $(".portfolio-container").length) {
      $(".portfolio-container").not(".slick-initialized").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "100px",
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ph ph-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ph ph-chevron-right"></i></button>',
        responsive: [
          { breakpoint: 1199, settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" } },
          { breakpoint: 1023, settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" } },
          { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "0px" } },
          { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true, centerPadding: "0px" } },
        ],
      });
    }
  }

  /*----------------Offcanvas & Navbar--------------------*/
  document.addEventListener("show.bs.offcanvas", function () {
    document.body.classList.add("offcanvas-open");
  });
  document.addEventListener("hidden.bs.offcanvas", function () {
    document.body.classList.remove("offcanvas-open");
  });
  document.addEventListener("shown.bs.collapse", function (e) {
    if (e.target.classList.contains("navbar-collapse")) {
      document.body.classList.add("navbar-expanded");
    }
  });
  document.addEventListener("hidden.bs.collapse", function (e) {
    if (e.target.classList.contains("navbar-collapse")) {
      document.body.classList.remove("navbar-expanded");
    }
  });
})();

/*----------------Generic Slick Slider--------------------*/
$(function () {
  const $generic = $(".slick-slider");
  if ($generic.length && !$generic.hasClass("slick-initialized")) {
    $generic.slick({
      slidesToShow: 3,
      infinite: false,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: false,
      arrows: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    });
  }
});

/*----------------Banner Slider--------------------*/
$(window).on("load", function () {
  const $banner = $(".slick-banner");
  if ($banner.length && $banner.children().length > 0 && !$banner.hasClass("slick-initialized")) {
    $banner.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    });
  }
});

/*----------------Reviews Slider--------------------*/
$(function () {
  const $reviews = $(".slick-reviews");
  if ($reviews.length && $reviews.children().length > 0 && !$reviews.hasClass("slick-initialized")) {
    $reviews.slick({
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ph ph-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ph ph-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 1 } },
      ],
    });
  }
});
