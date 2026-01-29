import React from "react";
import Icon from "components/ui/AppIcon";
import AppImage from "components/ui/AppImage";

export default function CertificationsSection({ className = "" }) {
  const certifications = [
    {
      id: 1,
      name: "Organic India Certification",
      issuer: "APEDA",
      year: "2005",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_12775c1fa-1764663269496.png",
      alt: "Official organic certification seal with green leaf symbol and APEDA logo on white background",
      description: "Certified organic farming practices with zero synthetic chemicals",
    },
    {
      id: 2,
      name: "FSSAI License",
      issuer: "Food Safety Standards Authority",
      year: "2010",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_197f976d5-1765041173879.png",
      alt: "FSSAI food safety license certificate with official seal and registration number",
      description:
        "Meets all food safety and hygiene standards for processing and packaging",
    },
    {
      id: 3,
      name: "ISO 22000:2018",
      issuer: "International Organization",
      year: "2019",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_11984b82e-1764887937596.png",
      alt: "ISO 22000 food safety management certificate with blue border and official stamps",
      description: "International food safety management system certification",
    },
    {
      id: 4,
      name: "Fair Trade Certified",
      issuer: "Fair Trade India",
      year: "2020",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_13299abee-1764654405584.png",
      alt: "Fair trade certification badge with handshake symbol and ethical farming commitment text",
      description: "Ethical farming practices and fair wages for all farm workers",
    },
  ];

  const qualityPromises = [
    {
      icon: "CheckBadgeIcon",
      title: "Freshness Guarantee",
      description: "All fruits delivered within 24-48 hours of harvest",
    },
    {
      icon: "ShieldCheckIcon",
      title: "Quality Assurance",
      description: "Multi-stage quality checks before packaging",
    },
    {
      icon: "ArrowPathIcon",
      title: "Easy Returns",
      description: "Full refund if you're not satisfied with quality",
    },
    {
      icon: "TruckIcon",
      title: "Safe Delivery",
      description: "Temperature-controlled transport for optimal freshness",
    },
  ];

  return (
    <section className={`py-24 bg-body ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fw-bold text-4xl mb-3">
            Certifications & Quality Promise
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Recognized excellence in organic farming and food safety standards
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-4 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card rounded-lg overflow-hidden shadow-organic shadow-card-lg-hover p-6"
            >
              <div className="position-relative h-48 bg-gray-200 d-flex align-items-center justify-content-center">
                <AppImage
                  src={cert.image}
                  alt={cert.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="pt-6">
                <h3 className="fw-semibold text-lg mb-2">
                  {cert.name}
                </h3>

                <div className="d-flex align-items-center gap-2 mb-75">
                  <Icon
                    name="BuildingOfficeIcon"
                    size={14}
                    className="text-body"
                  />
                  <span className="text-sm">
                    {cert.issuer}
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2 mb-75">
                  <Icon
                    name="CalendarIcon"
                    size={14}
                    className="text-body"
                  />
                  <span className="text-sm">
                    Since {cert.year}
                  </span>
                </div>

                <p className="text-sm leading-relaxed m-0">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promises */}
        <div className="bg-primary-05 rounded-lg p-12">
          <h3 className="fw-bold text-3xl mb-5 text-center">
            Our Quality Promise to You
          </h3>

          <div className="d-grid md-grid-cols-2 lg-grid-cols-4 gap-4">
            {qualityPromises.map((promise, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full d-flex align-items-center justify-content-center mx-auto mb-3 shadow-organic">
                  <Icon
                    name={promise.icon}
                    size={28}
                    className="text-white"
                    variant="solid"
                  />
                </div>
                <h4 className="fw-semibold text-lg mb-2">
                  {promise.title}
                </h4>
                <p className="text-sm text-muted-foreground m-0">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="max-w-3xl mx-auto my-0">
              Every fruit that leaves our farm carries our family's reputation.
              We stand behind our quality with a 100% satisfaction guarantee. If
              you're not completely happy with your order, we'll make it right—
              no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
