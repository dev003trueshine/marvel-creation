import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Home Chef",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
      alt: "Professional headshot of Indian woman with long black hair in traditional attire smiling",
      rating: 5,
      review:
        "The Alphonso mangoes were absolutely divine! Perfectly ripe, incredibly sweet, and the aroma filled my entire kitchen. My family loved the mango lassi I made. Will definitely order again next season!",
      orderType: "Alphonso - 5kg",
      date: "May 2025",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Restaurant Owner",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1ffb8dc87-1763296355766.png",
      alt: "Professional headshot of Indian man in formal blue shirt with confident smile",
      rating: 5,
      review:
        "As a restaurant owner, consistency is crucial. Rishit Fruits delivers premium quality mangoes every single time. Their bulk ordering process is seamless, and the dedicated support is exceptional.",
      orderType: "Bulk Order - 25kg",
      date: "June 2025",
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Health Enthusiast",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1c9af19c6-1763297142251.png",
      alt: "Professional headshot of young Indian woman with short hair in casual attire",
      rating: 5,
      review:
        "I appreciate that these mangoes are naturally ripened without any chemicals. The taste is authentic and reminds me of mangoes from my childhood. The mango pulp is also excellent for smoothies!",
      orderType: "Kesar - 3kg + Pulp",
      date: "May 2025",
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Fruit Retailer",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_132d5b5bc-1763292263088.png",
      alt: "Professional headshot of Indian man with beard in business casual attire",
      rating: 5,
      review:
        "Partnership with Rishit Fruits has been game-changing for my business. Their quality control is impeccable, and my customers specifically ask for their mangoes. Highly recommend for B2B!",
      orderType: "Wholesale - 50kg",
      date: "June 2025",
    },
    {
      id: 5,
      name: "Meera Krishnan",
      role: "Food Blogger",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_149818faa-1763295188290.png",
      alt: "Professional headshot of Indian woman with curly hair in colorful traditional dress",
      rating: 5,
      review:
        "I have featured Rishit Fruits mangoes in multiple recipes on my blog. The quality is consistently outstanding, and my followers love the authentic taste. The WhatsApp ordering is super convenient!",
      orderType: "Mixed Varieties - 4kg",
      date: "May 2025",
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "Corporate Gifting",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_159581a9d-1763295527421.png",
      alt: "Professional headshot of Indian man in formal suit with professional demeanor",
      rating: 5,
      review:
        "Ordered premium mango gift boxes for our corporate clients during the festival season. The packaging was elegant, and the mangoes were exceptional. Received wonderful feedback from all recipients!",
      orderType: "Gift Boxes - 20 units",
      date: "June 2025",
    },
  ];

  const stats = [
    { icon: "UserGroupIcon", value: "2,500+", label: "Happy Customers" },
    { icon: "StarIcon", value: "4.9/5", label: "Average Rating" },
    { icon: "TruckIcon", value: "5,000+", label: "Orders Delivered" },
    { icon: "ArrowPathIcon", value: "85%", label: "Repeat Customers" },
  ];

  return (
    <section className="py-24 bg-body">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-10 rounded-full mb-3">
            <Icon
              name="ChatBubbleLeftEllipsisIcon"
              size={18}
              className="text-accent"
              variant="solid"
            />
            <span className="text-sm fw-semibold text-warning">
              Customer Stories
            </span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-3">
            What Our Customers Say
          </h2>
          <p className="text-lg m-0">
            Real experiences from families, restaurants, and businesses who trust
            Rishit Fruits for their mango needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="d-grid md-grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border rounded-xl p-6 shadow-organic shadow-card-md-hover"
            >
              {/* Header */}
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="position-relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow-1">
                  <h4 className="fw-bold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm">
                    {testimonial.role}
                  </p>
                  {/* Rating */}
                  <div className="d-flex align-items-center gap-1 mt-1 svg-bg-warning">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="StarIcon"
                        size={14}
                        className="text-warning"
                        variant="solid"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-sm text-heading leading-relaxed mb-0">
                "{testimonial.review}"
              </p>

              {/* Footer */}
              <div className="d-flex align-items-center justify-content-between pt-3 mt-3 border-top">
                <div className="d-flex align-items-center gap-2">
                  <Icon
                    name="ShoppingBagIcon"
                    size={16}
                    className="text-body"
                  />
                  <span className="text-xs">
                    {testimonial.orderType}
                  </span>
                </div>
                <span className="text-xs">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 d-grid grid-cols-1 md-grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-10 rounded-full d-flex align-items-center justify-content-center mx-auto mb-3">
                <Icon
                  name={stat.icon}
                  size={32}
                  className="text-primary"
                  variant="solid"
                />
              </div>
              <p className="fw-bold text-3xl text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm m-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
