import React from "react";
import Icon from "components/ui/AppIcon"; // adjust path if needed

export default function BusinessHours() {
  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 8:00 PM", isToday: false, isOpen: true },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM", isToday: true, isOpen: true },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM", isToday: false, isOpen: true },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM", isToday: false, isOpen: true },
    { day: "Friday", hours: "8:00 AM - 8:00 PM", isToday: false, isOpen: true },
    { day: "Saturday", hours: "8:00 AM - 9:00 PM", isToday: false, isOpen: true },
    { day: "Sunday", hours: "9:00 AM - 7:00 PM", isToday: false, isOpen: true },
  ];

  return (
    <section className="py-20 bg-body">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-success-10 text-success rounded-full mb-3">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm fw-medium">Currently Open</span>
            </div>
            <h2 className="fw-bold text-4xl mb-3">
              Business Hours
            </h2>
            <p className="text-lg m-0">
              WhatsApp support available 24/7 for your convenience
            </p>
          </div>

          <div className="bg-card border rounded-lg overflow-hidden shadow-organic">
            {/* Top Bar */}
            <div className="bg-primary text-white px-6 py-4">
              <div className="d-flex align-items-center justify-content-between gap-2 flex-md-nowrap flex-wrap">
                <div className="d-flex align-items-center gap-12">
                  <Icon name="ClockIcon" size={24} variant="solid" />
                  <span className="fw-semibold text-lg">Weekly Schedule</span>
                </div>
                <div className="d-flex align-items-center gap-2 rounded-full">
                  <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
                  <span className="text-sm fw-medium">24/7 WhatsApp</span>
                </div>
              </div>
            </div>

            {/* List */}
            <div className="divide-y divide-border">
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className={`px-6 py-4 d-flex align-items-center justify-content-between gap-1 flex-md-row flex-column border-bottom ${
                    item.isToday ? "bg-primary-05" : "bg-card"
                  } hover:bg-primary-05 transition`}
                >
                  <div className="d-flex align-items-center gap-3">
                    {item.isToday && (
                      <div className="w-px h-8 bg-primary rounded-full"></div>
                    )}
                    <span
                      className={`${
                        item.isToday
                          ? "fw-semibold text-heading"
                          : "fw-medium text-body"
                      }`}
                    >
                      {item.day}
                    </span>
                    {item.isToday && (
                      <span className="px-2 py-1 bg-primary-10 text-primary text-xs fw-medium rounded">
                        Today
                      </span>
                    )}
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <span
                      className={`${
                        item.isToday
                          ? "fw-semibold text-heading"
                          : "fw-medium text-body"
                      }`}
                    >
                      {item.hours}
                    </span>
                    {item.isOpen && (
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-success"
                        variant="solid"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-success-10 px-6 py-4">
              <div className="d-flex align-items-start gap-3">
                <Icon
                  name="InformationCircleIcon"
                  size={20}
                  className="text-success"
                  variant="solid"
                />
                <p className="text-sm m-0">
                  <span className="fw-semibold">
                    WhatsApp orders accepted 24/7!
                  </span>{" "}
                  While our phone lines follow the schedule above, you can place
                  orders anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
