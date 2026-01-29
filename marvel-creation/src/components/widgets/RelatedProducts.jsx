import React from "react";
import { FaStar, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const RelatedProducts = ({ products, onWhatsAppOrder }) => {
  return (
    <div className="my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary mb-0">You May Also Like</h3>
        <button className="btn btn-link text-primary text-decoration-none d-flex align-items-center gap-1 p-0">
          View All <FaArrowRight size={14} />
        </button>
      </div>

      {/* Products Grid */}
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-3">
            <div className="card h-100 shadow-sm border-0">
              {/* Image */}
              <div className="position-relative">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="card-img-top"
                  style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
                />

                {!product.inStock && (
                  <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white px-3 py-1 rounded small">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="card-body d-flex flex-column gap-2">
                <div>
                  <h6 className="fw-semibold mb-1" style={{ minHeight: "2.5rem" }}>
                    {product.name}
                  </h6>

                  {/* Rating */}
                  <div className="d-flex gap-1 text-warning">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={12}
                        className={star <= product.rating ? "opacity-100" : "opacity-25"}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="d-flex align-items-end gap-1">
                  <span className="fw-bold text-primary fs-5">₹{product.price}</span>
                  <small className="text-muted">/{product.unit}</small>
                </div>

                {/* Button */}
                <button
                  onClick={() => onWhatsAppOrder(product.name)}
                  disabled={!product.inStock}
                  className="btn btn-success w-100 mt-auto d-flex align-items-center justify-content-center gap-2"
                >
                  <FaWhatsapp />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
