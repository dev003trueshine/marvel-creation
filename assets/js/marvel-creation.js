/*
 * Version: 1.0.0
 * Template: chat bot ai
 * Author: true shine
 * Design and Developed by: true shine
 * NOTE: This file contains the script for initialize & listener Template.
 */
/*----------------------------------------------
Index Of Script
------------------------------------------------
:: Back To Top
------------------------------------------------
Index Of Script
----------------------------------------------*/

(function () {
  "use strict";
  
  jQuery(document).ready(function () {
    callPortfolioSlider();
  });
  /*----------------Back To Top--------------------*/
  const backToTop = document.getElementById("back-to-top")
  if (backToTop !== null && backToTop !== undefined) {
    document.getElementById("back-to-top").classList.add("animate__animated", "animate__fadeOut")
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop > 350) {
        document.getElementById("back-to-top").classList.remove("animate__fadeOut")
        document.getElementById("back-to-top").classList.add("animate__fadeIn")
      } else {
        document.getElementById("back-to-top").classList.remove("animate__fadeIn")
        document.getElementById("back-to-top").classList.add("animate__fadeOut")
      }
    })
    // scroll body to 0px on click
    document.querySelector('#top').addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })
  }

 function callPortfolioSlider() {
  if (typeof $ !== "undefined" && $.fn.slick && $(".portfolio-container").length) {
    $(".portfolio-container").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "100px",
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: "0px"
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: "0px"
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "0px"
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "0px"
          },
        }
      ],
    });
  }
 }



  document.addEventListener('show.bs.offcanvas', function () {
    document.body.classList.add('offcanvas-open');
  });
  document.addEventListener('hidden.bs.offcanvas', function () {
    document.body.classList.remove('offcanvas-open');
  });
  document.addEventListener('shown.bs.collapse', function (e) {
    if (e.target.classList.contains('navbar-collapse')) {
      document.body.classList.add('navbar-expanded');
    }
  });
  document.addEventListener('hidden.bs.collapse', function (e) {
    if (e.target.classList.contains('navbar-collapse')) {
      document.body.classList.remove('navbar-expanded');
    }
  });


})();
$(function () {
  if ($('.slick-slider').length) {
    $(".slick-slider").slick({
      slidesToShow: 3,
      infinite: false,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: false,
      responsive: [{
          breakpoint: 1024, // tablets & small laptops
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768, // mobile landscape
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480, // small mobiles
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});
$(document).ready(function () {
  if ($('.slick-banner').length) {
    $('.slick-banner').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
});

$(function () {
  $(".slick-reviews").slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,

    responsive: [{
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480, // small mobiles
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});