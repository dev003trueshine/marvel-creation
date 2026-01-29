import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

const MangoVarieties = ({ onOrderClick }) => {
  const varieties = [
    {
      id: 1,
      name: "Alphonso",
      scientificName: "Mangifera indica 'Alphonso'",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
      alt: "Golden yellow Alphonso mangoes with smooth skin arranged on white marble surface",
      season: "April - June",
      taste: "Sweet, Rich, Aromatic",
      texture: "Smooth, Non-fibrous",
      bestFor: ["Fresh Eating", "Desserts", "Smoothies"],
      priceRange: "₹800 - ₹1,200/kg",
      availability: "In Season",
      rating: 4.9,
      description:
        "The undisputed king of mangoes, known for its saffron-colored flesh and unmatched sweetness."
    },
    {
      id: 2,
      name: "Kesar",
      scientificName: "Mangifera indica 'Kesar'",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d78c381-1765888823209.png",
      alt: "Bright orange Kesar mangoes with distinctive saffron hue displayed in traditional basket",
      season: "May - July",
      taste: "Sweet, Saffron Notes",
      texture: "Firm, Juicy",
      bestFor: ["Fresh Eating", "Pulp", "Juice"],
      priceRange: "₹600 - ₹900/kg",
      availability: "In Season",
      rating: 4.8,
      description:
        "Named after saffron for its distinctive color, this Gujarat specialty offers intense sweetness."
    },
    {
      id: 3,
      name: "Dasheri",
      scientificName: "Mangifera indica 'Dasheri'",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15256be73-1765888820992.png",
      alt: "Elongated green-yellow Dasheri mangoes with characteristic oblong shape on wooden cutting board",
      season: "June - July",
      taste: "Sweet, Aromatic",
      texture: "Soft, Melting",
      bestFor: ["Fresh Eating", "Traditional Recipes"],
      priceRange: "₹400 - ₹600/kg",
      availability: "In Season",
      rating: 4.7,
      description:
        "North Indian favorite with elongated shape and exceptionally aromatic flesh."
    },
    {
      id: 4,
      name: "Langra",
      scientificName: "Mangifera indica 'Langra'",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1953a6102-1764831688571.png",
      alt: "Green-skinned Langra mangoes with unique appearance arranged in rustic clay bowl",
      season: "July - August",
      taste: "Sweet-Tangy Balance",
      texture: "Firm, Fibrous",
      bestFor: ["Pickles", "Chutneys", "Fresh Eating"],
      priceRange: "₹300 - ₹500/kg",
      availability: "Pre-Order",
      rating: 4.6,
      description:
        "Late-season variety with distinctive green skin even when ripe, beloved in Uttar Pradesh."
    },
    {
      id: 5,
      name: "Totapuri",
      scientificName: "Mangifera indica 'Totapuri'",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eaa4ac3e-1765377558677.png",
      alt: "Pointed beak-shaped Totapuri mangoes with yellow-green skin on banana leaf",
      season: "May - July",
      taste: "Tangy, Mildly Sweet",
      texture: "Firm, Crunchy",
      bestFor: ["Cooking", "Pickles", "Salads"],
      priceRange: "₹250 - ₹400/kg",
      availability: "In Season",
      rating: 4.5,
      description:
        "Distinctive parrot-beak shape makes it perfect for culinary applications and traditional dishes."
    },
    {
      id: 6,
      name: "Banganapalli",
      scientificName: "Mangifera indica 'Banganapalli'",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_18dc256bf-1765377558919.png",
      alt: "Large golden Banganapalli mangoes with smooth texture displayed in woven bamboo basket",
      season: "May - June",
      taste: "Mildly Sweet, Delicate",
      texture: "Smooth, Less Fibrous",
      bestFor: ["Fresh Eating", "Juice", "Pulp"],
      priceRange: "₹350 - ₹550/kg",
      availability: "In Season",
      rating: 4.7,
      description:
        "Andhra Pradesh's pride, known for its large size and subtle sweetness."
    }
  ];

  const getAvailabilityColor = (status) => {
    switch (status) {
      case "In Season":
        return "bg-success/10 text-success border-success/20";
      case "Pre-Order":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-10 rounded-full mb-4">
            <Icon name="SparklesIcon" size={18} className="text-primary" variant="solid" />
            <span className="text-sm fw-semibold text-primary">Premium Varieties</span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-3">
            Explore Our Mango Collection
          </h2>
          <p className="text-lg m-0">
            Each variety offers unique flavors and characteristics, carefully selected from the finest farms across India.
          </p>
        </div>

        {/* Grid */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-5">
          {varieties.map((variety) => (
            <div
              key={variety.id}
              className="bg-card rounded-2xl overflow-hidden shadow-organic shadow-card-lg-hover border"
            >
              {/* Image */}
              <div className="position-relative h-64 overflow-hidden product-image">
                <AppImage
                  src={variety.image}
                  alt={variety.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-organic-slow"
                />

                {/* Availability */}
                <div
                  className={`position-absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs fw-semibold border ${getAvailabilityColor(
                    variety.availability
                  )}`}
                >
                  {variety.availability}
                </div>

                {/* Rating */}
                <div className="position-absolute d-flex gap-1 star-badge px-3 z-5 py-1 bg-transparent rounded-pill fw-semibold text-xs text-success border shadow-organic">
                  <Icon name="StarIcon" size={16} className="text-warning" variant="solid" />
                  <span className="fw-bold text-sm text-heading">{variety.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 d-flex flex-column gap-3">
                <div>
                  <h3 className="fq-bold text-xl text-primary mb-1">
                    {variety.name}
                  </h3>
                  <p className="text-xs fst-italic m-0">
                    {variety.scientificName}
                  </p>
                </div>

                <p className="m-0 text-sm line-clamp-2">
                  {variety.description}
                </p>

                {/* Details */}
                <div className="d-grid grid-cols-2 gap-12 py-3 border-top border-bottom">
                  <div>
                    <p className="text-xs mb-1">Season</p>
                    <p className="text-sm fw-semibold text-heading m-0">{variety.season}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-1">Taste</p>
                    <p className="text-sm fw-semibold text-heading m-0">{variety.taste}</p>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-xs mb-2">Best For:</p>
                  <div className="d-flex flex-wrap gap-2">
                    {variety.bestFor.map((use, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-warning-10 text-warning text-xs fw-medium rounded-md"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="d-flex align-items-center justify-content-between pt-4">
                  <div>
                    <p className="text-xs m-0">Price Range</p>
                    <p className="fw-bold text-lg text-primary">
                      {variety.priceRange}
                    </p>
                  </div>
                  <button
                    onClick={() => onOrderClick(variety)}
                    disabled={variety.availability === "Out of Season"}
                    className="d-flex align-items-center gap-2 px-4 py-2 btn btn-success text-white rounded-lg font-semibold text-sm"
                  >
                    <Icon name="ShoppingCartIcon" size={18} variant="solid" />
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangoVarieties;
