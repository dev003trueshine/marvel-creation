import React from "react";
import ContactHero from "../components/widgets/ContactHero.jsx";
import ContactMethods from "../components/widgets/ContactMethods.jsx";
import BusinessHours from "../components/widgets/BusinessHours.jsx";
import LocationInfo from "../components/widgets/locationInfo.jsx";
import FAQSection from "../components/widgets/faq.jsx";
import ContactForm from "../components/widgets/ContactForm.jsx";
const Contact = () => {
	return (
		<>
			<ContactHero />
			<ContactMethods />
			<BusinessHours />
			<LocationInfo />
			<FAQSection />
			<ContactForm />
		</>
	);
};

export default Contact;
