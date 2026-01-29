import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductGrid = ({ products, onWhatsAppOrder }) => {
  if (!products || products.length === 0) {
    return (
      <div className="col-12 d-flex flex-column align-items-center justify-content-center py-5 px-3 text-center">
        <div
          className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
          style={{ width: 96, height: 96 }}
        >
          <svg viewBox="0 0 64 64" width="48" height="48">
            <path
              d="M32 8C24 8 18 14 18 22C18 30 24 36 32 44C40 36 46 30 46 22C46 14 40 8 32 8Z"
              fill="#0d6efd"
              opacity="0.2"
            />
            <circle cx="32" cy="22" r="8" fill="#6c757d" opacity="0.3" />
          </svg>
        </div>

        <h4 className="fw-bold mb-2">No Products Found</h4>
        <p className="text-muted small" style={{ maxWidth: 420 }}>
          We couldn't find any products matching your filters. Try adjusting your
          search criteria or browse all categories.
        </p>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onWhatsAppOrder={onWhatsAppOrder}
            />
      ))}
    </>
  );
};

export default ProductGrid;
