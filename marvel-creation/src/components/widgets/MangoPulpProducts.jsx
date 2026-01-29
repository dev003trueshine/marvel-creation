import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

const MangoPulpProducts = ({ onOrderClick }) => {
  const pulpProducts = [
    {
      id: 1,
      name: "Premium Alphonso Pulp",
      variety: "Alphonso",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
      alt: "Glass jar of golden Alphonso mango pulp with fresh mango slices on white background",
      size: "850g",
      price: "₹450",
      features: ["100% Natural", "No Preservatives", "No Added Sugar", "Farm Fresh"],
      shelfLife: "12 months",
      packaging: "Food-grade Glass Jar",
      inStock: true
    },
    {
      id: 2,
      name: "Kesar Mango Pulp",
      variety: "Kesar",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15256be73-1765888820992.png",
      alt: "Sealed container of orange Kesar mango pulp with product label and fresh mangoes",
      size: "1kg",
      price: "₹380",
      features: ["Rich Flavor", "No Additives", "Authentic Taste", "Premium Quality"],
      shelfLife: "12 months",
      packaging: "BPA-free Plastic Container",
      inStock: true
    },
    {
      id: 3,
      name: "Mixed Variety Pulp",
      variety: "Alphonso + Kesar",
      image: "https://images.unsplash.com/photo-1600790047735-c37e9f187f71",
      alt: "Two jars of mixed mango pulp varieties with golden and orange colors side by side",
      size: "500g x 2",
      price: "₹420",
      features: ["Best of Both", "Balanced Flavor", "Natural Blend", "Gift Pack"],
      shelfLife: "12 months",
      packaging: "Dual Glass Jar Set",
      inStock: true
    },
    {
      id: 4,
      name: "Bulk Alphonso Pulp",
      variety: "Alphonso",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_16ecae517-1765888823198.png",
      alt: "Large commercial container of Alphonso mango pulp for bulk orders with measuring cup",
      size: "5kg",
      price: "₹2,200",
      features: ["Restaurant Grade", "Cost Effective", "Consistent Quality", "Bulk Discount"],
      shelfLife: "12 months",
      packaging: "Food-grade Bucket",
      inStock: true
    }
  ];

  const benefits = [
    {
      icon: "CheckBadgeIcon",
      title: "100% Natural",
      description: "No artificial colors, flavors, or preservatives added"
    },
    {
      icon: "BeakerIcon",
      title: "Lab Tested",
      description: "Quality certified and hygienically processed"
    },
    {
      icon: "ShieldCheckIcon",
      title: "Sealed Fresh",
      description: "Vacuum-sealed packaging maintains freshness"
    },
    {
      icon: "TruckIcon",
      title: "Fast Delivery",
      description: "Temperature-controlled shipping nationwide"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-10 rounded-full mb-3">
            <Icon name="BeakerIcon" size={18} className="text-accent" variant="solid" />
            <span className="text-sm fw-semibold text-warning">Pure & Natural</span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-4">
            Premium Mango Pulp Collection
          </h2>
          <p className="text-lg m-0">
            Enjoy the authentic taste of farm-fresh mangoes year-round with our preservative-free pulp products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-4 gap-4 mb-12">
          {pulpProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden shadow-organic shadow-card-lg-hover border"
            >
              {/* Image */}
              <div className="position-relative h-64 overflow-hidden product-image">
                <AppImage
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />

                {product.inStock && (
                  <div className="position-absolute star-badge px-3 z-5 py-1 bg-success rounded-pill fw-semibold text-xs text-white border shadow-organic">
                    In Stock
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 d-flex flex-column gap-3">
                <div>
                  <h3 className="fw-bold text-xl text-primary mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm m-0">{product.variety} Variety</p>
                </div>

                {/* Features */}
                <div className="d-flex flex-wrap gap-1">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-05 text-primary text-xs fw-medium rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="d-flex flex-column gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="CubeIcon" size={16} className="text-body" />
                    <span>
                      Size: <span className="fw-semibold text-heading">{product.size}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="ClockIcon" size={16} className="text-body" />
                    <span>
                      Shelf Life:{" "}
                      <span className="fw-semibold text-heading">{product.shelfLife}</span>
                    </span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="d-flex align-items-center justify-content-between pt-4 border-top">
                  <div>
                    <p className="text-xs m-0">Price</p>
                    <h6 className="fw-bold text-lg text-primary m-0">
                      {product.price}
                    </h6>
                  </div>
                  <button
                    onClick={() => onOrderClick(product)}
                    className="d-flex align-items-center gap-2 px-4 py-2 btn btn-success text-white rounded-lg font-semibold text-sm"
                  >
                    <Icon name="ShoppingBagIcon" size={18} variant="solid" />
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-card rounded-2xl p-12 shadow-organic border">
          <h3 className="fw-bold text-2xl text-primary mb-5 text-center">
            Why Choose Our Mango Pulp?
          </h3>
          <div className="d-grid md-grid-cols-2 lg-grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-10 rounded-full d-flex align-items-center justify-content-center mx-auto">
                  <Icon name={benefit.icon} size={32} className="text-primary" variant="solid" />
                </div>
                <h4 className="fw-bold text-lg mt-12">
                  {benefit.title}
                </h4>
                <p className="text-sm text-heading mt-12">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangoPulpProducts;
