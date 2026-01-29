import React from "react";
import Icon from "components/ui/AppIcon"; // adjust path if needed

export default function ContactHero({ onWhatsAppClick }) {
  return (
    <section className="position-relative bg-card py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-success-10 text-success rounded-full mb-4 animate-pulse-soft">
            <Icon name="CheckBadgeIcon" size={20} variant="solid" />
            <span className="text-sm fw-medium">Available 24/7 for Your Orders</span>
          </div>

          {/* Heading */}
          <h1 className="fw-bold text-6xl mb-4">
            Get in Touch with <span className="text-primary">Rishit Fruits</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-5 max-w-2xl mx-auto">
            We're here to help you with fresh fruit orders, bulk inquiries, and
            any questions about our farm-direct produce. Reach out through your
            preferred channel!
          </p>

          {/* WhatsApp CTA */}
          <button
            onClick={onWhatsAppClick}
            className="d-inline-flex align-items-center gap-75 px-8 py-4 btn btn-success border-0 text-white rounded-lg fw-semibold text-lg transition-organic shadow-organic-lg shadow-card-md-hover hover-scale-105"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Chat on WhatsApp Now</span>
            <Icon name="ArrowRightIcon" size={20} />
          </button>

          {/* Stats */}
          <div className="d-grid grid-cols-3 gap-12 gap-lg-4 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl fw-bold text-primary mb-1">
                &lt;2hrs
              </div>
              <div className="text-sm">Response Time</div>
            </div>
            <div className="text-center border-start border-end border-2">
              <div className="text-4xl fw-bold text-primary mb-1">
                500+
              </div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl fw-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm">WhatsApp Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
