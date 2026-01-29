import React from "react";
import Icon from "components/ui/AppIcon"; // adjust path if needed

export default function ContactMethods({
  onWhatsAppClick,
  onPhoneClick,
  onEmailClick,
}) {
  const contactMethods = [
    {
      id: "whatsapp",
      icon: "ChatBubbleLeftRightIcon",
      title: "WhatsApp Chat",
      description:
        "Instant messaging for quick orders and queries. Our most popular contact method!",
      value: "+91 98765 43210",
      action: "whatsapp",
      actionLabel: "Start Chat",
      bgColor: "bg-success-10",
      iconColor: "text-success",
    },
    {
      id: "phone",
      icon: "PhoneIcon",
      title: "Phone Call",
      description:
        "Speak directly with our team for detailed discussions and bulk orders.",
      value: "+91 98765 43210",
      action: "phone",
      actionLabel: "Call Now",
      bgColor: "bg-primary-10",
      iconColor: "text-primary",
    },
    {
      id: "email",
      icon: "EnvelopeIcon",
      title: "Email Support",
      description:
        "Send detailed inquiries and receive comprehensive responses within 24 hours.",
      value: "orders@rishitfruits.com",
      action: "email",
      actionLabel: "Send Email",
      bgColor: "bg-secondary-10",
      iconColor: "text-secondary",
    },
  ];

  const handleAction = (action) => {
    if (action === "whatsapp") onWhatsAppClick();
    else if (action === "phone") onPhoneClick();
    else if (action === "email") onEmailClick();
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fw-bold text-4xl mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg my-0 max-w-2xl mx-auto">
            We offer multiple ways to reach us. Select the method that works best
            for you!
          </p>
        </div>

        <div className="d-grid md-grid-cols-3 gap-4 gap-lg-5 max-w-6xl mx-auto">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-card border rounded-lg p-8 shadow-card-lg-hover"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${method.bgColor} rounded-full d-flex align-items-center justify-content-center mb-4 hover-scale-105`}
              >
                <Icon
                  name={method.icon}
                  size={32}
                  className={method.iconColor}
                  variant="solid"
                />
              </div>

              {/* Content */}
              <h3 className="fw-bold text-xl mb-75">{method.title}</h3>
              <p className="text-sm mb-3">
                {method.description}
              </p>

              {/* Contact Value */}
              <div className="d-flex align-items-center gap-2 mb-4 p-3 bg-body rounded-lg">
                <Icon
                  name="CheckCircleIcon"
                  size={16}
                  className="text-success"
                  variant="solid"
                />
                <span className="fw-medium text-sm">{method.value}</span>
              </div>

              {/* Button */}
              <button
                onClick={() => handleAction(method.action)}
                className={`w-full btn d-flex align-items-center justify-content-center gap-2 px-6 py-3 ${
                  method.id === "whatsapp"
                    ? "btn-success text-white"
                    : "btn-primary text-white"
                } rounded-lg fw-semibold`}
              >
                <span>{method.actionLabel}</span>
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
