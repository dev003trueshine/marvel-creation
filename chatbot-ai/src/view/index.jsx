import React from "react";
import SliderPage from "../components/widgets/homeSlider.jsx";
import TrustBadges from "../components/widgets/TrustBadges";
import FeaturedProducts from "../components/widgets/featuredProducts";
import SeasonalCalendar from "../components/widgets/seasonalCalendar.jsx";
import TestimonialsSlider from "../components/widgets/TestimonialsSlider.jsx";
const Home = () => {
	return (
		<>
			<SliderPage />
            <TrustBadges />
            <FeaturedProducts />
            <SeasonalCalendar />
			<TestimonialsSlider />
		</>
	);
};

export default Home;
