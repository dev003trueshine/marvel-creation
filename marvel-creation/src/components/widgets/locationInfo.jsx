import React from "react";
import Icon from "components/ui/AppIcon";

export default function LocationInfo() {
  const locationDetails = [
    {
      icon: "MapPinIcon",
      label: "Farm Address",
      value: "Village Khandala, Taluka Maval, Pune District, Maharashtra 410301",
    },
    {
      icon: "TruckIcon",
      label: "Delivery Areas",
      value: "Pune, Mumbai, Nashik & surrounding areas within 200km radius",
    },
    {
      icon: "BuildingStorefrontIcon",
      label: "Business Registration",
      value: "GSTIN: 27XXXXX1234X1ZX | FSSAI Lic: 12345678901234",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="fw-bold text-4xl mb-3">
              Visit Our Farm
            </h2>
            <p className="text-lg max-w-2xl mx-auto my-0">
              Experience the freshness firsthand! Our farm is open for visits by
              appointment. See where your fruits grow and meet our farming
              family.
            </p>
          </div>

          <div className="d-grid lg-grid-cols-2 gap-5">
            {/* Map */}
            <div className="bg-card border rounded-lg overflow-hidden shadow-organic h-600px">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Rishit Fruits Farm Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=18.7465,73.4093&z=14&output=embed"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="d-flex flex-column gap-4">
              {locationDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-lg p-6 shadow-card-md-hover transition-organic"
                >
                  <div className="d-flex gap-3">
                    <div className="w-12 h-12 bg-primary-10 rounded-full d-flex align-items-center justify-content-center flex-shrink-0">
                      <Icon
                        name={detail.icon}
                        size={24}
                        className="text-primary"
                        variant="solid"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="fw-semibold text-lg mb-2">
                        {detail.label}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="bg-card border rounded-lg p-6 shadow-card-md-hover transition-organic">
                <div className="d-flex gap-3">
                  <Icon
                    name="CalendarDaysIcon"
                    size={32}
                    className="text-primary flex-shrink-0"
                    variant="solid"
                  />
                  <div>
                    <h3 className="fw-semibold text-lg mb-2">
                      Schedule a Farm Visit
                    </h3>
                    <p className="text-sm mb-3">
                      Book a guided tour of our farm! Perfect for families,
                      schools, and anyone interested in organic farming
                      practices.
                    </p>
                    <button className="d-inline-flex align-items-center gap-2 px-4 py-2 btn btn-primary text-white rounded-lg fw-semibold text-sm">
                      <Icon name="PhoneIcon" size={16} />
                      <span>Call to Schedule</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
