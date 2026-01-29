import { useState } from "react";
import Icon from "components/ui/AppIcon";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState("faq1");

  const faqs = [
    {
      id: "faq1",
      question: "How do I place an order via WhatsApp?",
      answer:
        'Simply click the "Chat on WhatsApp" button, and you\'ll be directed to our WhatsApp with a pre-filled message. Tell us what fruits you need, the quantity, and your delivery address. We\'ll confirm availability, pricing, and delivery time within minutes!',
      category: "Ordering",
    },
    {
      id: "faq2",
      question: "What are your delivery charges and areas?",
      answer:
        "We deliver within 200km of our farm in Pune. Delivery charges vary by distance: Free for orders above ₹1000 within Pune city, ₹50-150 for nearby areas, and ₹200-300 for distant locations. We'll confirm exact charges when you order.",
      category: "Delivery",
    },
    {
      id: "faq3",
      question: "How fresh are your fruits?",
      answer:
        "All our fruits are farm-fresh and naturally ripened. We harvest based on orders, so what you receive is typically picked within 24-48 hours of delivery. We never use artificial ripening agents or chemicals.",
      category: "Quality",
    },
    {
      id: "faq4",
      question: "Do you offer bulk discounts for restaurants?",
      answer:
        "Yes! We have special pricing for restaurants, hotels, and retailers. Contact us via WhatsApp or phone with your requirements, and we'll provide a customized quote. We also offer regular supply contracts with consistent pricing.",
      category: "Bulk Orders",
    },
    {
      id: "faq5",
      question: "What if I receive damaged or unsatisfactory fruits?",
      answer:
        "Your satisfaction is our priority! If you receive any damaged or unsatisfactory fruits, take a photo and send it to us on WhatsApp immediately. We'll either replace the items or provide a full refund within 24 hours.",
      category: "Returns",
    },
    {
      id: "faq6",
      question: "Can I visit your farm before ordering?",
      answer:
        "Absolutely! We welcome farm visits by appointment. You can see our farming practices, meet our team, and even pick your own fruits during harvest season. Call us to schedule a visit.",
      category: "Farm Visits",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="fw-bold text-4xl mb-3">Frequently Asked Questions</h2>
            <p className="text-lg mb-0">Quick answers to common questions. Can't find what you're looking for? Contact us directly!</p>
          </div>

          {/* FAQ List */}
          <div className="accordion accordion-style-light" id="main-faq">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="accordion-item custom-accordion"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="accordion-button faq-btn p-0 text-capitalize gap-3"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-headline font-semibold text-lg text-foreground">
                      {faq.question}
                    </h3>
                  </div>

                  {/* <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    <Icon
                      name="ChevronDownIcon"
                      size={24}
                      className="text-muted-foreground"
                    />
                  </div> */}
                </button>

                {openFAQ === faq.id && (
                  <div className="accordion-body p-0 animate-fade-in">
                      <p className="mb-0 pt-3 mt-3 border-top font-size-14">
                        {faq.answer}
                      </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-card border rounded-lg p-8 text-center">
            <Icon
              name="QuestionMarkCircleIcon"
              size={48}
              className="text-primary mx-auto mb-4"
              variant="solid"
            />
            <h3 className="fw-bold text-2xl mb-75">Still Have Questions?</h3>
            <p className="mb-4 max-w-xl mx-auto">Our team is ready to help! Reach out via WhatsApp for instant answers or call us during business hours.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="d-inline-flex align-items-center justify-content-center gap-2 px-6 py-3 btn btn-success text-white rounded-lg fw-semibold">
                <Icon
                  name="ChatBubbleLeftRightIcon"
                  size={20}
                  variant="solid"
                />
                <span>Ask on WhatsApp</span>
              </button>
              <button className="d-inline-flex align-items-center justify-content-center gap-2 px-6 py-3 btn btn-primary text-white rounded-lg fw-semibold">
                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
