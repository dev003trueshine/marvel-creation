import React, { useEffect, useState } from "react";
import Icon from "components/ui/AppIcon";

export default function SeasonalCalendar() {
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    setSelectedMonth(monthNames[new Date().getMonth()]);
  }, []);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const seasonalFruits = [
    {
      id: 1,
      name: "Alphonso Mango",
      months: ["March", "April", "May", "June"],
      icon: "🥭",
      color: "bg-accent/20 text-accent",
      availability: "peak",
    },
    {
      id: 2,
      name: "Kesar Mango",
      months: ["April", "May", "June", "July"],
      icon: "🥭",
      color: "bg-accent/20 text-accent",
      availability: "peak",
    },
    {
      id: 3,
      name: "Totapuri Mango",
      months: ["May", "June", "July", "August"],
      icon: "🥭",
      color: "bg-accent/20 text-accent",
      availability: "available",
    },
    {
      id: 4,
      name: "Premium Chikoo",
      months: ["October", "November", "December", "January", "February"],
      icon: "🤎",
      color: "bg-chikoo/20 text-chikoo",
      availability: "peak",
    },
    {
      id: 5,
      name: "Mango Pulp",
      months: [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
      ],
      icon: "🥤",
      color: "bg-primary/20 text-primary",
      availability: "available",
    },
  ];

  const availableFruits = seasonalFruits.filter((fruit) =>
    fruit.months.includes(selectedMonth)
  );

  const getAvailabilityBadge = (availability) => {
    switch (availability) {
      case "peak":
        return { text: "Peak Season", color: "bg-success text-white" };
      case "available":
        return { text: "Available", color: "bg-primary text-white" };
      case "limited":
        return { text: "Limited", color: "bg-warning text-white" };
      default:
        return { text: "Available", color: "bg-primary text-white" };
    }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-secondary-10 rounded-circle mb-3">
            <Icon name="CalendarDaysIcon" size={20} className="text-secondary" variant="solid" />
            <span className="fw-semibold text-sm text-primary text-uppercase tracking-wide">Seasonal Guide</span>
          </div>
          <h2 className="fw-bold text-5xl mb-3">What's Fresh This Month</h2>
          <p className="max-w-2xl mx-auto my-0">Plan your orders with our seasonal availability calendar</p>
        </div>

        {/* Month Selector */}
        <div className="mb-12">
          <div className="nav nav-pills nav-product-tab d-flex flex-wrap justify-content-center gap-12 mb-12">
            {months.map((month) => (
                <li className="nav-item">
                    <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`nav-link ${
                        selectedMonth === month
                            ? "active"
                            : ""
                        }`}
                    >
                        {month.substring(0, 3)}
                    </button>
                </li>
            ))}
          </div>
        </div>

        {/* Available Fruits */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-body rounded-2xl p-12">
            <div className="d-flex align-items-center gap-12 mb-5">
              <Icon name="SparklesIcon" size={32} className="text-warning" variant="solid" />
              <h3 className="fw-bold text-2xl">
                Available in {selectedMonth}
              </h3>
            </div>

            {availableFruits.length > 0 ? (
              <div className="d-grid grid-cols-1 md-grid-cols-2 gap-3">
                {availableFruits.map((fruit) => {
                  const badge = getAvailabilityBadge(fruit.availability);
                  return (
                    <div
                      key={fruit.id}
                      className="bg-card rounded-xl p-6 shadow-organic shadow-card-md-hover"
                    >
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center gap-12">
                          <div
                            className={`w-12 h-12 rounded-full ${fruit.color} d-flex align-items-center justify-content-center text-2xl`}
                          >
                            {fruit.icon}
                          </div>
                          <div>
                            <h4 className="fw-bold text-lg">
                              {fruit.name}
                            </h4>
                            <p className="text-sm m-0">
                              {fruit.months.length} months available
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs fw-semibold ${badge.color}`}
                        >
                          {badge.text}
                        </span>
                      </div>

                      <div className="d-flex flex-wrap gap-2">
                        {fruit.months.map((month) => (
                          <span
                            key={month}
                            className={`px-2 py-1 rounded text-xs ${
                              month === selectedMonth
                                ? "bg-primary text-white"
                                : "bg-body text-body"
                            }`}
                          >
                            {month.substring(0, 3)}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="InformationCircleIcon" size={48} className="body-text mx-auto mb-3" />
                <p className="text-lg m-0">
                  No fruits available for this month
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-4xl mx-auto mt-5">
          <div className="bg-warning-10 border-s4 border-start border-warning rounded-lg p-6">
            <div className="d-flex gap-3 svg-bg-warning">
              <Icon name="LightBulbIcon" size={24} className="text-warning flex-shrink-0" variant="solid" />
              <div>
                <h4 className="fw-bold text-lg mb-2">
                  Pro Tip: Order in Season
                </h4>
                <span className="text-sm">
                  Fruits taste best and are most affordable during their peak
                  season. Pre-order for upcoming seasons to secure the best
                  quality and prices!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
