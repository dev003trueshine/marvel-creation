import React from "react";
import Slider from "react-slick";
import Icon from "components/ui/AppIcon";

import slide1 from "../../assets/images/banner.png";

const slides = [
  {
    bg: slide1,
    title: "Farm Fresh Mangoes",
    subtitle: "Pure, Preservative-Free Goodness",
    desc: "Experience the authentic taste of Alphonso mangoes, handpicked at peak ripeness and delivered to your doorstep within 24 hours.",
  },
  {
    bg: slide1,
    title: "Organic Fruits",
    subtitle: "Healthy & Natural",
    desc: "Fresh produce directly from farmers with no chemicals and full nutrition.",
  },
  {
    bg: slide1,
    title: "Fast Delivery",
    subtitle: "Within 24 Hours",
    desc: "Doorstep delivery with freshness guaranteed.",
  },
];

const SliderPage = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="general-slider banner-container overflow-hidden">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="slide">
            <div
              className="banner-content"
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="position-relative container mx-auto px-4 h-100 d-flex align-items-center py-24">
                <div className="max-w-2xl text-white animate-fade-in">
                  {/* Badge */}
                  <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning text-heading rounded-full mb-4 shadow-md">
                   <Icon name="SparklesIcon" size={20} variant="solid" />
                    Organic
                  </div>

                  <h1 className="fw-bolder text-6xl mb-3 leading-tight text-white">{item.title}</h1>
                  <p className="fw-semibold text-2xl mb-4 text-warning">
                    {item.subtitle}
                  </p>
                  <p className="text-lg mb-5 text-white leading-relaxed">{item.desc}</p>

                  {/* Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <button className="d-flex align-items-center justify-content-center gap-12 px-8 py-4 btn btn-success text-white rounded-lg fw-bold text-lg shadow-lg">
                       <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                       Order on WhatsApp
                    </button>
                    <button className="d-flex align-items-center justify-content-center gap-12 px-8 py-4 btn btn-white-01 backdrop-blur-sm text-white border border-white-02 rounded-lg fw-semibold text-lg">
                     <Icon name="ShoppingBagIcon" size={24} />
                     Browse Catalog
                    </button>
                  </div>

                  {/* Features */}
                  <div className="d-flex flex-wrap align-items-center gap-4 mt-5 pt-8 border-top border-white-02">
                    <div className="d-flex align-items-center gap-2">
                       <Icon name="CheckBadgeIcon" size={24} className="text-success" variant="solid" />
                       <span>Farm Direct</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                     <Icon name="TruckIcon" size={24} className="text-warning" />
                     <span>24/7 Delivery</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Icon name="ShieldCheckIcon" size={24} className="text-success" variant="solid" />
                      <span>Quality Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPage;
