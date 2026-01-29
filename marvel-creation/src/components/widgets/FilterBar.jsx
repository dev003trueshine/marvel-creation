import React, { useState } from "react";

import {
  FaSlidersH,
  FaChevronDown,
  FaChevronUp,
  FaHandSparkles,
  FaSun,
  FaStar,
  FaFlask,
  FaCheckCircle,
  FaClock,
  FaCheck,
  FaFilter,
} from "react-icons/fa";

const FilterBar = ({
  activeCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  showOrganic,
  onOrganicToggle,
  showAvailable,
  onAvailableToggle,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Fruits", icon: <FaHandSparkles /> },
    { id: "mangoes", label: "Mangoes", icon: <FaSun /> },
    { id: "chikoo", label: "Chikoo", icon: <FaStar /> },
    { id: "pulp", label: "Pulp Products", icon: <FaFlask /> },
  ];

  const handlePriceChange = (value, index) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    onPriceRangeChange(newRange);
  };

  return (
    <div className="w-100 bg-white border rounded shadow-sm">
      {/* Mobile Header */}
      <div className="d-lg-none d-flex align-items-center justify-content-between p-3 border-bottom">
        <div className="d-flex align-items-center gap-2">
          <FaSlidersH className="text-primary" />
          <strong>Filters</strong>
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="btn btn-light btn-sm"
        >
          {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Filters */}
      <div className={`${isFilterOpen ? "d-block" : "d-none"} d-lg-block p-4`}>
        {/* Categories */}
        <div className="mb-4">
          <small className="text-muted fw-semibold text-uppercase">Categories</small>
          <div className="d-flex flex-wrap gap-2 mt-5">
            {categories.map((cat) => (
              <div className="" key={cat.id}>
                <button
                  onClick={() => onCategoryChange(cat.id)}
                  className={`btn w-100 d-flex align-items-center justify-content-center gap-2 py-2 px-4 ${
                    activeCategory === cat.id
                      ? "btn-primary"
                      : "btn-outline-secondary"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="row g-4">

          {/* Price Range */}
          <div className="col-12">
            <small className="text-muted fw-semibold text-uppercase">Price Range</small>

            <div className="mt-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
                  className="form-range flex-grow-1"
                />
                <span className="fw-medium">₹{priceRange[0]}</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
                  className="form-range flex-grow-1"
                />
                <span className="fw-medium">₹{priceRange[1]}</span>
              </div>

              <div className="d-flex justify-content-between small text-muted mt-2">
                <span>Min: ₹{priceRange[0]}</span>
                <span>Max: ₹{priceRange[1]}</span>
              </div>
            </div>
          </div>
                  
          {/* Active Filters */}
          <div className="col-12">
            <small className="text-muted fw-semibold text-uppercase">Active Filters</small>

            <div className="mt-3 small d-grid gap-2">
              <div className="d-flex align-items-center gap-2">
                <FaFilter className="text-primary" />
                <span>
                  {activeCategory === "all"
                    ? "All Categories"
                    : categories.find((c) => c.id === activeCategory)?.label}
                </span>
              </div>

              {showOrganic && (
                <div className="d-flex align-items-center gap-2 text-success">
                  <FaCheckCircle />
                  Organic Only
                </div>
              )}

              {showAvailable && (
                <div className="d-flex align-items-center gap-2 text-primary">
                  <FaClock />
                  Available Now
                </div>
              )}
            </div>
          </div>

          {/* Quick Filters */}
          <div className="col-12">
            <small className="text-muted fw-semibold text-uppercase">Quick Filters</small>

            <div className="mt-3 d-grid gap-2">
              <button
                onClick={onOrganicToggle}
                className={`btn d-flex justify-content-between align-items-center ${
                  showOrganic ? "btn-success" : "btn-outline-secondary"
                }`}
              >
                <span className="d-flex align-items-center gap-2">
                  <FaCheckCircle />
                  Organic Certified
                </span>
                {showOrganic && <FaCheck />}
              </button>

              <button
                onClick={onAvailableToggle}
                className={`btn d-flex justify-content-between align-items-center ${
                  showAvailable ? "btn-primary" : "btn-outline-secondary"
                }`}
              >
                <span className="d-flex align-items-center gap-2">
                  <FaClock />
                  In Stock Only
                </span>
                {showAvailable && <FaCheck />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterBar;
