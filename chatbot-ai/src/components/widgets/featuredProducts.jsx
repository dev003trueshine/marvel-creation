import React, { useState } from "react";
import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

export default function FeaturedProducts({ onWhatsAppOrder }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Alphonso Mango",
      category: "Mangoes",
      price: 450,
      unit: "per dozen",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
      alt: "Dozen fresh golden yellow Alphonso mangoes arranged in wooden crate",
      badge: "Premium",
      rating: 4.9,
      reviews: 234,
      inStock: true,
    },
    {
      id: 2,
      name: "Kesar Mango",
      category: "Mangoes",
      price: 380,
      unit: "per dozen",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_193d9ad6b-1765888820981.png",
      alt: "Fresh orange-yellow Kesar mangoes with red blush on white background",
      badge: "Seasonal",
      rating: 4.8,
      reviews: 189,
      inStock: true,
    },
    {
      id: 3,
      name: "Premium Chikoo",
      category: "Chikoo",
      price: 120,
      unit: "per kg",
      image:
        "https://images.unsplash.com/photo-1587921283692-a0cf685545a9",
      alt: "Brown ripe chikoo sapodilla fruits in natural fiber basket",
      rating: 4.7,
      reviews: 156,
      inStock: true,
    },
    {
      id: 4,
      name: "Mango Pulp",
      category: "Pulp",
      price: 280,
      unit: "per kg",
      image:
        "https://images.unsplash.com/photo-1631606517999-3778ba6f7d0b",
      alt: "Glass bowl filled with smooth golden mango pulp on wooden table",
      badge: "Best Seller",
      rating: 5.0,
      reviews: 312,
      inStock: true,
    },
    {
      id: 5,
      name: "Totapuri Mango",
      category: "Mangoes",
      price: 320,
      unit: "per dozen",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1eaa4ac3e-1765377558677.png",
      alt: "Green-yellow Totapuri mangoes with pointed tips in woven basket",
      rating: 4.6,
      reviews: 98,
      inStock: true,
    },
    {
      id: 6,
      name: "Chikoo Pulp",
      category: "Pulp",
      price: 240,
      unit: "per kg",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1ea7b59bf-1765992410929.png",
      alt: "Brown chikoo pulp in glass jar with fresh chikoo fruits beside",
      rating: 4.8,
      reviews: 145,
      inStock: true,
    },
  ];

  const categories = ["All", "Mangoes", "Chikoo", "Pulp"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-primary-subtle rounded-pill mb-3">
            <Icon name="StarIcon" size={20} className="text-warning" variant="solid" />
            <span className="h6 fw-semibold text-sm text-primary m-0 text-uppercase tracking-wide">
              Featured Products
            </span>
          </div>
          <h2 className="fw-bold md-text-5xl text-5xl mb-3">
            Fresh From Our Farms
          </h2>
          <p className="text-lg max-w-2xl mx-auto m-0">
            Handpicked premium fruits, naturally ripened and delivered fresh to your doorstep
          </p>
        </div>

        {/* Category Filter */}
        <div className="nav nav-pills nav-product-tab d-flex flex-wrap justify-content-center gap-12 mb-12">
          {categories.map((category) => (
            <li className="nav-item">
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`nav-link ${
                    selectedCategory === category
                    ? "active"
                    : ""
                }`}
                >
                {category}
                </button>
            </li>
          ))}
        </div>

        {/* Products Grid */}
        <div className="d-grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-3 gap-3 gap-lg-5 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-organic shadow-card-lg-hover product-card"
            >
              {/* Image */}
              <div className="position-relative h-64 overflow-hidden product-image">
                <AppImage
                  src={product.image}
                  alt={product.alt}
                  className="product-hover-img animate-pulse bg-gray-200 w-100 h-100 object-cover"
                />

                {/* {product.badge && (
                  <div className="position-absolute star-badge px-3 z-5 py-1 bg-gray-900 rounded-pill fw-semibold text-xs text-heading text-uppercase shadow-organic d-flex align-items-center gap-1">
                    {product.badge}
                  </div>
                )} */}

                <div className="position-absolute star-badge px-3 z-5 py-1 bg-gray-900 rounded-pill fw-semibold text-xs text-heading text-uppercase shadow-organic d-flex align-items-center gap-1">
                  <Icon name="StarIcon" size={16} className="text-warning" variant="solid" />
                  <span className="fw-bold text-sm text-heading">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="fw-bold text-xl mb-2">
                    {product.name}
                  </h3>
                  <div className="d-flex align-items-center gap-2 text-sm text-body">
                    <Icon name="UserGroupIcon" size={16} />
                    <span>{product.reviews} reviews</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold text-2xl text-primary m-0">
                      ₹{product.price}
                    </span>
                    <span className="text-sm">
                      {product.unit}
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 text-success">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" />
                    <span className="text-sm fw-medium">In Stock</span>
                  </div>
                </div>

                <button
                  onClick={() => onWhatsAppOrder(product)}
                  className="btn btn-success text-white d-flex align-items-center justify-content-center w-100 rounded-lg gap-2 px-6 py-3"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="d-flex align-items-center justify-content-center">
          <a href="/fruits-catalog" className="btn btn-primary text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-6 py-3">
            View Complete Catalog
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
