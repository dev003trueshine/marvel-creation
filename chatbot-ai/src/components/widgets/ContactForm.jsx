import React, { useState } from "react";
import Icon from "components/ui/AppIcon";

export default function ContactForm() {
const inquiryTypes = [ { value: 'general', label: 'General Inquiry' }, { value: 'order', label: 'Order Related' }, { value: 'bulk', label: 'Bulk Order Request' }, { value: 'quality', label: 'Quality Concern' }, { value: 'delivery', label: 'Delivery Question' }, { value: 'farm-visit', label: 'Farm Visit Request' } ];
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="fw-bold text-4xl mb-3">
              Send Us a Message
            </h2>
            <p className="text-lg m-0">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 shadow-organic">

            <form  className="d-flex flex-column gap-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="form-label fw-medium mb-2 text-heading"
                >
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="form-label fw-medium mb-2 text-heading"
                  >
                    Email Address <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="form-label fw-medium mb-2 text-heading"
                  >
                    Phone Number <span className="text-error">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="98765 43210"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="form-label fw-medium mb-2 text-heading"
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  className="form-select"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="form-label fw-medium mb-2 text-heading"
                >
                  Your Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="form-control"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-100 d-flex align-items-center justify-content-center gap-2 px-6 py-4 btn btn-primary text-white rounded-lg fw-semibold text-lg"
              >

                    <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                    <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
