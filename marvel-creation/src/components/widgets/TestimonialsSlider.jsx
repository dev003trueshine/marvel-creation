import React from "react";
import Slider from "react-slick";
import Icon from 'components/ui/AppIcon';

const testimonials = [
  {
    text: "Best quality chikoo I've ever tasted! Farm-fresh and naturally sweet. The delivery was prompt and packaging was excellent. Highly recommend Rishit Fruits!",
    product: "Premium Chikoo - 5 kg",
    name: "Rajesh Kumar",
    location: "Delhi, India",
    avatar: "https://picsum.photos/100",
  },
  {
    text: "Amazing mangoes! Sweet, juicy, and delivered fresh from the farm. Will definitely order again.",
    product: "Alphonso Mango - 3 kg",
    name: "Amit Sharma",
    location: "Mumbai, India",
    avatar: "https://picsum.photos/101",
  },
  {
    text: "Great packaging and super fast delivery. Fruits were fresh and delicious.",
    product: "Fresh Apples - 2 kg",
    name: "Neha Verma",
    location: "Bangalore, India",
    avatar: "https://picsum.photos/102",
  },
  {
    text: "Excellent quality and taste. Totally worth the price!",
    product: "Organic Oranges - 4 kg",
    name: "Ritika Singh",
    location: "Pune, India",
    avatar: "https://picsum.photos/103",
  },
];

const TestimonialsSlider = () => {
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
    <div className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-10 rounded-full mb-3 svg-bg-warning">
            <Icon name="ChatBubbleLeftEllipsisIcon" size={20} className="text-warning" variant="solid" />
            <span className="fw-semibold text-sm text-primary text-uppercase tracking-wide">
              Customer Stories
            </span>
          </div>
          <h2 className="fw-bold text-5xl mb-4">What Our Customers Say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Real reviews from real customers who love our farm-fresh fruits
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="slick general-slider">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div className="slider" key={index}>
                  <div className="bg-body rounded-2xl p-12 position-relative">
                    {/* Stars */}
                    <div className="d-flex align-items-center gap-1 mb-4 svg-bg-warning">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Icon key={i} name="StarIcon" size={24} className="text-accent" variant="solid" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-xl mb-5 leading-relaxed">
                      "{item.text}"
                    </p>

                    {/* Product */}
                    <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-primary-10 rounded-full mb-4">
                      <Icon name="ShoppingBagIcon" size={16} className="text-primary" />
                      <span className="text-sm text-primary fw-medium">
                        {item.product}
                      </span>
                    </div>

                    {/* User */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="position-relative w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div>
                        <h4 className="fw-bold text-lg mb-0">
                          {item.name}
                        </h4>
                        <div className="d-flex align-items-center gap-1">
                           <Icon name="MapPinIcon" size={16} />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 pt-8 border-top" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>


        <div className="d-flex align-items-center justify-content-center mt-48">
          <a href="/all-review" className="btn btn-primary text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-6 py-3">
            View All
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
