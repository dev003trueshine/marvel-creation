import React, { useState } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaHandSparkles,
  FaExclamationTriangle,
  FaCube,
  FaMinus,
  FaPlus,
  FaWhatsapp,
} from "react-icons/fa";

const ProductCard = ({ product, onWhatsAppOrder }) => {
  const minQty = product.minQuantity || 1;
  const qtyStep = product.quantityStep || 1;
  const [quantity, setQuantity] = useState(minQty);

  const handleQuantityChange = (delta) => {
    const newQty = quantity + delta;
    if (newQty >= minQty) setQuantity(newQty);
  };

  const handleOrder = () => {
    onWhatsAppOrder(product, quantity);
  };

  return (
    <div className="bg-card border rounded-xl overflow-hidden shadow-organic shadow-card-lg-hover product-card">
      {/* Image */}
      <div className="position-relative h-48 overflow-hidden bg-body">
        <img
          src={product.image}
          alt={product.alt}
          className="object-cover product-hover-img animate-pulse bg-gray-200 w-100 h-100"
          style={{ transition: "0.4s" }}
        />

        {/* Badges */}
        <div className="position-absolute premium-badge">
          {product.organic && (
            <span className="px-3 z-5 py-1 bg-success rounded-pill fw-semibold text-xs text-white text-uppercase shadow-organic d-flex align-items-center gap-1">
              <FaCheckCircle /> Organic
            </span>
          )}
          {product.seasonal && (
            <span className="px-3 z-5 py-1 bg-warning rounded-pill fw-semibold text-xs text-heading text-uppercase shadow-organic d-flex align-items-center gap-1">
              <FaHandSparkles /> Seasonal
            </span>
          )}
        </div>

        {/* Out of stock */}
        {!product.inStock && (
          <div className="position-absolute premium-badge bg-dark d-flex align-items-center justify-content-center text-white rounded-full px-3 py-2 gap-2">
            <FaExclamationTriangle size={16} className="mb-2 text-warning" />
            <span>Out of Stock</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="d-flex align-items-center justify-content-between gap-1 mb-2">
          <span className="text-xs text-uppercase tracking-wide">{product.category}</span>
          <span className="d-flex align-items-center gap-1 svg-bg-warning">
            <FaStar className="text-warning" />
            <span className="text-xs fw-semibold text-heading">{product.rating}</span>
            <span className="text-xs">({product.reviews})</span>
          </span>
        </div>

        <div className="d-flex flex-column gap-3">

            <div className="">
                {/* Name */}
                <h6 className="fw-bold text-lg mb-2 ine-clamp-1">{product.name}</h6>

                {/* Description */}
                <p className="text-sm mb-0 line-clamp-2">{product.description}</p>
            </div>

            {/* Price */}
            <div className="">
                <div className="d-flex align-items-baseline gap-2">
                    <div className="h5 fw-bold text-2xl text-primary mb-0">
                        ₹{product.price.toLocaleString("en-IN")}
                        <span className="text-sm">/ {product.unit}</span>
                    </div>
                </div>

            {product.bulkPrice && (
                <div className="d-flex align-items-center gap-1 mt-1 text-xs text-secondary">
                <FaCube />
                Bulk: ₹{product.bulkPrice.toLocaleString("en-IN")} (10+ {product.unit})
                </div>
            )}

            {product.minQuantity && (
                <div className="mt-2 p-3 bg-warning-10 rounded-md text-xs text-warning fw-medium">
                Minimum order: {product.minQuantity} kg
                </div>
            )}
            </div>

            {/* Quantity */}
            {product.inStock && (
            <div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                <span>Quantity</span>
                {qtyStep > 1 && <span>Step: {qtyStep} kg</span>}
                </div>

                <div className="d-flex align-items-center gap-3">
                <button
                    onClick={() => handleQuantityChange(-qtyStep)}
                    disabled={quantity <= minQty}
                    className="w-10 h-10 d-flex align-items-center justify-content-center rounded-lg fw-bold text-lg transition-organic bg-muted text-body border-0 cursor-not-allowed opacity-50"
                >
                    <FaMinus />
                </button>

                <div className="flex-grow-1 text-center">
                    <div className="h6 m-0 text-2xl">{quantity} kg</div>
                    <div className="text-xs mt-1">
                    Total: ₹{(quantity * product.price).toLocaleString("en-IN")}
                    </div>
                </div>

                <button
                    onClick={() => handleQuantityChange(qtyStep)}
                    className="w-10 h-10 d-flex align-items-center justify-content-center rounded-lg fw-bold text-lg transition-organic bg-primary text-white border-0 cursor-pointer"
                >
                    <FaPlus />
                </button>
                </div>
            </div>
            )}

            {/* Order Button */}
            <button
            onClick={handleOrder}
            disabled={!product.inStock}
            className={`btn text-white w-100 d-flex align-items-center justify-content-center gap-2 ${
                product.inStock ? "btn-success" : "btn-secondary disabled"
            }`}
            >
            <FaWhatsapp />
            {product.inStock ? "Order on WhatsApp" : "Currently Unavailable"}
            </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
