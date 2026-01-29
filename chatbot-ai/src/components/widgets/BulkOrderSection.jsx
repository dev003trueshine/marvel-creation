import Icon from "components/ui/AppIcon";

const BulkOrderSection = ({ onContactClick }) => {
  const bulkPackages = [
    {
      id: 1,
      name: "Restaurant Pack",
      quantity: "25kg",
      price: "₹8,500",
      savings: "Save 15%",
      features: [
        "Mixed varieties available",
        "Daily fresh delivery",
        "Flexible payment terms",
        "Quality guarantee",
      ],
      idealFor: "Restaurants & Cafes",
    },
    {
      id: 2,
      name: "Retailer Pack",
      quantity: "50kg",
      price: "₹16,000",
      savings: "Save 20%",
      features: [
        "Premium sorting",
        "Custom packaging options",
        "Dedicated account manager",
        "Priority delivery",
      ],
      idealFor: "Fruit Retailers",
    },
    {
      id: 3,
      name: "Wholesale Pack",
      quantity: "100kg+",
      price: "Custom Pricing",
      savings: "Save 25%+",
      features: [
        "Volume-based discounts",
        "Direct farm sourcing",
        "Seasonal contracts",
        "Logistics support",
      ],
      idealFor: "Wholesalers & Distributors",
    },
  ];

  const benefits = [
    {
      icon: "TruckIcon",
      title: "Reliable Supply",
      description: "Consistent quality and timely deliveries throughout the season",
    },
    {
      icon: "CurrencyRupeeIcon",
      title: "Competitive Pricing",
      description: "Volume-based discounts and flexible payment terms",
    },
    {
      icon: "UserGroupIcon",
      title: "Dedicated Support",
      description: "Personal account manager for all your requirements",
    },
    {
      icon: "ShieldCheckIcon",
      title: "Quality Assurance",
      description: "Farm-fresh guarantee with replacement policy",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-primary-10 rounded-full mb-3">
            <Icon
              name="BuildingStorefrontIcon"
              size={18}
              className="text-primary"
              variant="solid"
            />
            <span className="text-sm fw-semibold text-primary">B2B Solutions</span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-3">
            Bulk Order Packages
          </h2>
          <p className="text-lg m-0">
            Special pricing and dedicated support for restaurants, retailers, and
            wholesalers. Partner with us for consistent quality and reliable supply.
          </p>
        </div>

        {/* Packages */}
        <div className="d-grid md-grid-cols-3 gap-5 mb-12">
          {bulkPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-card rounded-2xl p-8 shadow-organic shadow-card-lg-hover price-card"
            >
              {/* Header */}
              <div className="text-center mb-4">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-success-10 text-success border border-success rounded-full text-sm fw-semibold mb-3">
                  {pkg.savings}
                </div>
                <h3 className="fw-bold text-2xl text-primary mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm m-0">{pkg.idealFor}</p>
              </div>

              {/* Pricing */}
              <div className="text-center py-6 border-top border-bottom mb-4">
                <p className="text-sm mb-2">Starting from</p>
                <p className="fw-bold text-4xl text-primary mb-1">
                  {pkg.price}
                </p>
                <p className="text-sm m-0">{pkg.quantity}</p>
              </div>

              {/* Features */}
              <div className="d-flex flex-column gap-3 mb-5">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-success flex-shrink-0 mt-1"
                      variant="solid"
                    />
                    <span className="text-sm text-heading">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={onContactClick}
                className="w-full d-flex align-items-center justify-content-center gap-2 px-6 py-3 btn btn-primary text-white rounded-lg fw-semibold"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-48 text-center">
          <div className="d-inline-flex flex-column align-items-center gap-3 bg-card svg-bg-success rounded-2xl p-8 shadow-organic border">
            <Icon
              name="ChatBubbleLeftRightIcon"
              size={48}
              className="text-success"
              variant="solid"
            />
            <div>
              <h4 className="fw-bold text-xl text-primary mb-2">
                Need a Custom Package?
              </h4>
              <p className="mb-3">
                Contact us for personalized bulk order solutions tailored to your
                business needs.
              </p>
            </div>
            <button
              onClick={onContactClick}
              className="d-flex align-items-center gap-2 px-8 py-3 btn btn-success text-white rounded-lg fw-semibold"
            >
              <Icon name="PhoneIcon" size={20} variant="solid" />
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
