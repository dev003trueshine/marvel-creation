import React from "react";
import mango from "../assets/images/mango.png";
import Icon from "components/ui/AppIcon";

import Timeline from "../components/widgets/timeline.jsx";
import FarmerProfilesSection from "../components/widgets/farmerProfilesSection";      
import FarmingPracticesSection from "../components/widgets/farmingPracticesSection.jsx";
import CertificationsSection from "../components/widgets/certificationsSection.jsx";
import CTASection from "../components/widgets/CTASection";
import TestimonialsSlider from "../components/widgets/TestimonialsSlider.jsx";

const About = () => {
	return (
		<>
            {/* hero section */}
            <section className="position-relative">
                    <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_117f77560-1765968270309.png"
                    alt="Aerial view of lush green mango orchard with rows of healthy fruit trees under clear blue sky"
                    className="w-100 h-600px object-cover"
                    loading="eager"
                    />

                    <div className="position-absolute top-0 left-0 w-100 h-100 bg-black bg-opacity-50 d-flex align-items-center justify-content-center">
                        <div className="position-relative container mx-auto px-4 h-full d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className="fw-bold text-6xl text-white mb-4">Our Farm Story</h1>
                            <p className="text-xl text-white max-w-2xl">Three generations of farming excellence, bringing you naturally ripened fruits straight from our orchards to your home.</p>
                        </div>
                    </div>

            </section>
            {/* about content section */}
            <section className="py-24 bg-gray-900 ">
                <div className="container mx-auto px-4">
                    <div className="d-grid lg-grid-cols-2 gap-12 align-items-center md-gap-16 gap-3 mb-16">
                        <div>
                            <h2 className="fw-bold text-4xl mb-4">From Our Roots to Your Table</h2>

                            <div className="d-flex flex-column gap-3">
                                <p className="text-lg leading-relaxed m-0">
                                Rishit Fruits began as a small family farm in 1985, when our
                                grandfather planted the first mango saplings on 5 acres of land.
                                What started as a passion for growing the finest fruits has grown
                                into a legacy of quality, trust, and sustainable farming practices.
                                </p>

                                <p className="text-lg leading-relaxed m-0">
                                Today, we manage over 50 acres of certified organic orchards,
                                growing premium mangoes, chikoos, and seasonal fruits. Every fruit
                                that reaches your home carries three generations of farming wisdom
                                and our unwavering commitment to natural ripening and farm-fresh
                                quality.
                                </p>

                                <p className="text-lg leading-relaxed m-0">
                                We believe in transparency, sustainability, and building lasting
                                relationships with our customers. When you order from Rishit
                                Fruits, you're not just buying produce—you're becoming part of our
                                farm family.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <img src={mango} alt="About Us Image" className="w-100 rounded-xl shadow-organic shadow-lg object-cover h-96"></img>
                        </div>
                    </div>
                    {/* timeline Section */}
                    <Timeline />
                </div>
            </section>
            <FarmerProfilesSection />
            <FarmingPracticesSection />
            {/* Commitment Statement */}
            <div className="">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-lg p-12 text-center">
                    <Icon
                        name="GlobeAltIcon"
                        size={48}
                        className="text-white mx-auto mb-4"
                        variant="solid"
                    />
                    <h3 className="fw-bold text-3xl text-white mb-3">
                        Our Environmental Commitment
                    </h3>
                    <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed my-0">
                        We believe that sustainable farming is not just good for the environment—it produces better, healthier fruits. Every decision we make considers the long-term health of our soil, water, and ecosystem. Our goal is to leave the land better than we found it for the next generation.
                    </p>
                    </div>
                </div>
            </div>
            <CertificationsSection />
            <CTASection />
			<TestimonialsSlider />

		</>
	);
};

export default About;
