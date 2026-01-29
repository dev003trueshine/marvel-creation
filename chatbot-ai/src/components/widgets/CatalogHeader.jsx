import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const CatalogHeader = ({ totalProducts, filteredProducts, sortBy, onSortChange }) => {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3 mb-4">
      
      {/* Left Info */}
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <FaShoppingBag size={22} className="text-primary" />
          <h2 className="fw-bold fs-4 mb-0">Fresh Fruits Catalog</h2>
        </div>

        <div className="d-none d-lg-block vr"></div>

        <p className="mb-0 text-muted small">
          Showing <span className="fw-semibold text-dark">{filteredProducts}</span> of{" "}
          <span className="fw-semibold text-dark">{totalProducts}</span> products
        </p>
      </div>

      {/* Sort Dropdown */}
      <div className="d-flex align-items-center gap-2">
        <label htmlFor="sort-select" className="text-muted small mb-0">
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="form-select form-select-sm w-auto"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

    </div>
  );
};

export default CatalogHeader;
