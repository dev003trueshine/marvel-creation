import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "components/ui/AppIcon";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I would like to know more about your fresh fruits."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Fruits Catalog", href: "/fruits-catalog" },
    { label: "Mango Products", href: "/mango-products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const productCategories = [
    { label: "Kesar Mangoes", href: "/product-detail" },
    { label: "Premium Chikoo", href: "/product-detail" },
    { label: "Mango Pulp", href: "/mango-products" },
    { label: "Bulk Orders", href: "/contact" },
    { label: "Pricing Plan", href: "/pricing" },
  ];

  return (
    <footer className="bg-primary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="d-grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-48">
          {/* Brand Section */}
          <div>
            <div className="mb-3">
              {/* <div className="position-relative w-10 h-10">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="22" fill="white" />
                  <path
                    d="M24 8C18 8 14 12 14 18C14 24 18 28 24 34C30 28 34 24 34 18C34 12 30 8 24 8Z"
                    fill="var(--color-accent)"
                  />
                  <ellipse
                    cx="24"
                    cy="18"
                    rx="6"
                    ry="8"
                    fill="var(--color-secondary)"
                  />
                  <path
                    d="M24 8C24 8 26 6 28 8"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}
              <span className="fw-bold text-white text-xl mb-0">
                Rishit Fruits
              </span>
            </div>

            <p className="text-sm text-white mt-0 mb-4">
              Farm Fresh, Naturally Ripened fruits delivered directly to your
              doorstep. Experience authentic flavors from our farms.
            </p>

            <div className="d-flex align-items-center gap-2">
              <Icon
                name="CheckBadgeIcon"
                size={20}
                className="text-warning"
                variant="solid"
              />
              <span className="text-white text-sm">
                Trusted by 500+ Families
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="fw-bold text-lg mb-3 text-white">
              Quick Links
            </h3>
            <ul className="list-inline d-flex flex-column gap-12 m-0 p-0 footer-links">
              {quickLinks.map((link) => (
                <li key={link.href} className="footer-links-item">
                  <Link
                    to={link.href}
                    className="d-flex align-items-center gap-2 text-sm text-decoration-none"
                  >
                    <Icon
                      name="ChevronRightIcon"
                      size={16}
                      className="move-on-hover"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="fw-bold text-lg mb-3 text-white">
              Our Products
            </h3>
            <ul className="list-inline d-flex flex-column gap-12 m-0 p-0 footer-links">
              {productCategories.map((product) => (
                <li key={product.label} className="footer-links-item">
                  <Link
                    to={product.href}
                    className="d-flex align-items-center gap-2 text-sm text-decoration-none"
                  >
                    <Icon
                      name="ChevronRightIcon"
                      size={16}
                      className="move-on-hover"
                    />
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="fw-bold text-lg mb-3 text-white">
              Get In Touch
            </h3>
            <div className="list-inline m-0 p-0 d-flex flex-column gap-3 footer-contact">
              <div className="d-flex gap-12 ">
                <Icon
                  name="MapPinIcon"
                  size={20}
                  className="text-warning flex-shrink-0 mt-1"
                />
                <span className="text-white text-sm">
                  Farm Address: Village Ratnagiri,
                  {"\n"}Maharashtra, India - 415612
                </span>
              </div>

              <div className="d-flex gap-12">
                <Icon
                  name="PhoneIcon"
                  size={20}
                  className="text-warning flex-shrink-0"
                />
                <a
                  href="tel:+919876543210"
                  className="text-white text-sm"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="d-flex gap-12">
                <Icon
                  name="EnvelopeIcon"
                  size={20}
                  className="text-warning flex-shrink-0"
                />
                <a
                  href="mailto:orders@rishitfruits.com"
                  className="text-white text-sm"
                >
                  orders@rishitfruits.com
                </a>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="btn btn-success text-white d-flex align-items-center justify-content-center w-100 rounded-lg gap-2 px-6 py-3"
              >
                <Icon
                  name="ChatBubbleLeftRightIcon"
                  size={20}
                  variant="solid"
                />
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <span className="text-sm text-white text-center">
              © {currentYear} Rishit Fruits. All rights reserved. Farm Fresh
              Quality Guaranteed.
            </span>

            <div className="d-flex align-items-center gap-lg-4 gap-2">
              <Link
                to="#"
                className="text-sm footer-links"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-sm footer-links"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-sm footer-links"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
