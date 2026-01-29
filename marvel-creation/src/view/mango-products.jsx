import React from "react";

import MangoHero from "../components/widgets/MangoHero";
import MangoVarieties from "../components/widgets/MangoVarieties";
import MangoPulpProducts from "../components/widgets/MangoPulpProducts";
import SeasonalAvailability from "../components/widgets/SeasonalAvailability";
import RipenessGuide from "../components/widgets/RipenessGuide";
import BulkOrderSection from "../components/widgets/BulkOrderSection";
import CustomerTestimonials from "../components/widgets/CustomerTestimonials";
const MangoProducts = () => {
	return (
		<>
			<MangoHero />
			<MangoVarieties />
			<MangoPulpProducts />
			<SeasonalAvailability />
			<RipenessGuide />
			<BulkOrderSection />
			<CustomerTestimonials />
		</>
	);
};

export default MangoProducts;
