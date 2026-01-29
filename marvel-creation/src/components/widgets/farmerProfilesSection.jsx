import React from "react";
import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

export default function FarmerProfilesSection({ className = "" }) {
  const farmers = [
    {
      id: 1,
      name: "Ramesh Patel",
      role: "Founder & Chief Farmer",
      experience: "40 Years",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1aac56550-1763295507132.png",
      alt: "Senior Indian farmer with white beard wearing traditional kurta standing in mango orchard with farming tools",
      expertise: ["Organic Farming", "Mango Cultivation", "Soil Management"],
      quote: "Every fruit we grow carries our family's pride and commitment to quality",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Quality Manager",
      experience: "15 Years",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1f6d6649d-1764637483344.png",
      alt: "Young Indian woman in green saree inspecting mangoes with clipboard in modern packing facility",
      expertise: ["Quality Control", "Organic Certification", "Post-Harvest Care"],
      quote: "We ensure every fruit meets our strict quality standards before reaching you",
    },
    {
      id: 3,
      name: "Rishit Patel",
      role: "Operations Head",
      experience: "10 Years",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_194ad82d6-1764650746007.png",
      alt: "Young Indian man in casual shirt using tablet while standing among fruit trees in modern orchard",
      expertise: ["Farm Technology", "Customer Relations", "Logistics"],
      quote: "Combining traditional wisdom with modern technology to serve you better",
    },
  ];

  return (
    <section className={`py-24 bg-body ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fw-bold text-4xl mb-3">Meet Our Farm Family</h2>
          <p className="max-w-2xl mx-auto my-0">The passionate people behind every fruit that reaches your home</p>
        </div>

        {/* Cards */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-5">
          {farmers.map((farmer) => (
            <div
              key={farmer.id}
              className="bg-card rounded-lg overflow-hidden shadow-organic shadow-card-lg-hover"
            >
              {/* Image */}
              <div className="position-relative h-80 overflow-hidden">
                <AppImage
                  src={farmer.image}
                  alt={farmer.alt}
                  className="w-100 rounded-xl shadow-organic shadow-lg object-cover"
                />

                <div className="position-absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="fw-bold text-xl text-white mb-1">
                    {farmer.name}
                  </h3>
                  <p className="text-sm text-white m-0">
                    {farmer.role}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Icon name="ClockIcon" size={16} className="text-primary" />
                  <span className="text-sm fw-medium">
                    {farmer.experience} Experience
                  </span>
                </div>

                <div className="mb-3 pb-3 border-bottom">
                  <h4 className="fw-semibold text-sm text-foreground mb-2">
                    Expertise:
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    {farmer.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-10 text-primary text-xs fw-medium rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm fst-italic mb-0">
                    "{farmer.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
