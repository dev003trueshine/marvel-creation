import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

const RipenessGuide = () => {
  const ripenessStages = [
    {
      stage: "Unripe",
      color: "Dark Green",
      firmness: "Very Firm",
      aroma: "Minimal",
      bestFor: "Pickling, Cooking",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d2e46e6-1764831692142.png",
      alt: "Unripe green mangoes with firm texture on wooden surface",
      tips: [
        "Store at room temperature to ripen",
        "Perfect for traditional pickles",
        "Takes 5-7 days to ripen naturally",
      ],
    },
    {
      stage: "Ripening",
      color: "Yellow-Green",
      firmness: "Firm with Slight Give",
      aroma: "Light Fruity Scent",
      bestFor: "Salads, Chutneys",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_19520e2cd-1764831687012.png",
      alt: "Half-ripe mangoes showing yellow-green color transition in basket",
      tips: [
        "Keep in paper bag to speed ripening",
        "Check daily for ripeness",
        "Good for tangy preparations",
      ],
    },
    {
      stage: "Ripe",
      color: "Golden Yellow",
      firmness: "Yields to Gentle Pressure",
      aroma: "Strong Sweet Fragrance",
      bestFor: "Fresh Eating, Desserts",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1953a6102-1764831688571.png",
      alt: "Perfectly ripe golden yellow mangoes with sweet aroma on marble counter",
      tips: [
        "Consume within 2-3 days",
        "Store in refrigerator if needed",
        "Peak sweetness and flavor",
      ],
    },
    {
      stage: "Overripe",
      color: "Dark Yellow with Spots",
      firmness: "Very Soft",
      aroma: "Intense Sweet Smell",
      bestFor: "Smoothies, Pulp",
      image: "https://images.unsplash.com/photo-1664183238215-0848f923e3dc",
      alt: "Overripe mangoes with dark spots suitable for smoothies and pulp",
      tips: [
        "Use immediately for best results",
        "Perfect for blending",
        "Still nutritious and sweet",
      ],
    },
  ];

  const storageTips = [
    {
      icon: "HomeIcon",
      title: "Room Temperature",
      description:
        "Store unripe mangoes at room temperature (20-25°C) away from direct sunlight for natural ripening.",
    },
    {
      icon: "ArchiveBoxIcon",
      title: "Paper Bag Method",
      description:
        "Place mangoes in a paper bag with an apple or banana to speed up ripening naturally.",
    },
    {
      icon: "FireIcon",
      title: "Avoid Heat",
      description:
        "Never expose mangoes to direct heat or sunlight as it affects flavor and texture.",
    },
    {
      icon: "BeakerIcon",
      title: "Refrigeration",
      description:
        "Once ripe, store in refrigerator to extend freshness for 2-3 days.",
    },
    {
      icon: "HandThumbUpIcon",
      title: "Gentle Handling",
      description:
        "Handle mangoes carefully to avoid bruising which can lead to premature spoilage.",
    },
    {
      icon: "ClockIcon",
      title: "Check Daily",
      description:
        "Monitor ripening progress daily by gently pressing near the stem area.",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-10 svg-bg-warning rounded-full mb-3">
            <Icon name="AcademicCapIcon" size={18} className="text-warning" variant="solid" />
            <span className="text-sm font-semibold text-warning">Expert Guide</span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-3">
            Mango Ripeness Guide
          </h2>
          <p className="text-lg m-0">
            Learn to identify the perfect ripeness stage for your needs. Each stage offers unique culinary possibilities.
          </p>
        </div>

        {/* Cards */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-4 gap-4 mb-12">
          {ripenessStages.map((stage, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-organic shadow-card-lg-hover product-card border"
            >
              {/* Image */}
              <div className="position-relative h-64 overflow-hidden product-image">
                <AppImage
                  src={stage.image}
                  alt={stage.alt}
                  className="w-full h-full object-cover"
                />
                <div className="position-absolute premium-badge px-3 z-5 py-1 bg-primary text-white rounded-pill fw-semibold text-xs shadow-organic">
                  Stage {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 d-flex flex-column gap-3">
                <h3 className="fw-bold text-xl text-primary mb-2">
                  {stage.stage}
                </h3>

                {/* Characteristics */}
                <div className="d-flex flex-column gap-2 text-sm">
                  <div className="d-flex align-items-start gap-2">
                    <Icon name="SwatchIcon" size={16} className="mt-1" />
                    <div>
                      <span className="">Color: </span>
                      <span className="fw-semibold text-heading">{stage.color}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-2">
                    <Icon name="HandRaisedIcon" size={16} className="mt-1" />
                    <div>
                      <span className="">Firmness: </span>
                      <span className="fw-semibold text-heading">{stage.firmness}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-2">
                    <Icon name="SparklesIcon" size={16} className="mt-1" />
                    <div>
                      <span className="">Aroma: </span>
                      <span className="fw-semibold text-heading">{stage.aroma}</span>
                    </div>
                  </div>
                </div>

                {/* Best For */}
                <div className="pt-3 border-top">
                  <p className="text-xs mb-2">Best For:</p>
                  <p className="fw-semibold text-primary mb-0">{stage.bestFor}</p>
                </div>

                {/* Tips */}
                <div className="d-flex flex-column gap-2">
                  {stage.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="d-flex align-items-start gap-2 svg-bg-success">
                      <Icon
                        name="CheckCircleIcon"
                        size={14}
                        className="text-success mt-0.5"
                        variant="solid"
                      />
                      <p className="text-xs m-0">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Storage Tips */}
        <div className="bg-card rounded-2xl p-12 shadow-organic border">
          <h3 className="fw-bold text-2xl text-primary mb-5 text-center">
            Storage & Ripening Tips
          </h3>

          <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-5">
            {storageTips.map((tip, index) => (
              <div key={index} className="d-flex gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-10 rounded-lg d-flex align-items-center justify-content-center">
                  <Icon name={tip.icon} size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h4 className="fw-bold text-base mb-2">
                    {tip.title}
                  </h4>
                  <span className="text-sm">{tip.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RipenessGuide;
