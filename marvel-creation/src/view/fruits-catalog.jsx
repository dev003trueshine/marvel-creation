import React from "react";
import { useState } from "react";
import {Container, Row , Col} from 'react-bootstrap';

import CatalogHeader from "../components/widgets/CatalogHeader";
import FilterBar from "../components/widgets/FilterBar";
import ProductGrid from "../components/widgets/ProductGrid.jsx";

const FruitsCatalog = () => {
	const [category, setCategory] = useState("all");
	const [priceRange, setPriceRange] = useState([100, 800]);
	const [organic, setOrganic] = useState(false);
	const [available, setAvailable] = useState(false);

	  const mockProducts: Product[] = [
			{
				id: 1,
				name: "Alphonso Mango",
				category: "mangoes",
				price: 100,
				unit: "kg",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
				alt: "Fresh ripe Alphonso mangoes with golden yellow skin on wooden surface",
				description: "Premium Alphonso mangoes from Ratnagiri, naturally ripened with rich, sweet flavor and smooth texture.",
				inStock: true,
				organic: true,
				seasonal: true,
				bulkPrice: 90,
				rating: 4.9,
				reviews: 156,
				minQuantity: 10,
				quantityStep: 10
			},
			{
				id: 2,
				name: "Kesar Mango",
				category: "mangoes",
				price: 100,
				unit: "kg",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_193d9ad6b-1765888820981.png",
				alt: "Bright orange Kesar mangoes arranged in basket with green leaves",
				description: "Sweet and aromatic Kesar mangoes from Gujarat, perfect for eating fresh or making desserts.",
				inStock: true,
				organic: false,
				seasonal: true,
				bulkPrice: 90,
				rating: 4.7,
				reviews: 98,
				minQuantity: 10,
				quantityStep: 10
			},
			{
				id: 3,
				name: "Fresh Chikoo",
				category: "chikoo",
				price: 50,
				unit: "kg",
				image: "https://images.unsplash.com/photo-1529172602727-6e983cbf0962",
				alt: "Brown chikoo fruits with rough skin displayed on white background",
				description: "Sweet and grainy chikoo, rich in vitamins and minerals, perfect for healthy snacking.",
				inStock: true,
				organic: true,
				seasonal: false,
				bulkPrice: 45,
				rating: 4.5,
				reviews: 67,
				minQuantity: 5,
				quantityStep: 5
			},
			{
				id: 4,
				name: "Alphonso Mango Pulp",
				category: "pulp",
				price: 280,
				unit: "500g pack",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
				alt: "Glass jar filled with golden Alphonso mango pulp on kitchen counter",
				description: "Pure Alphonso mango pulp, no preservatives, perfect for smoothies, desserts, and traditional recipes.",
				inStock: true,
				organic: true,
				seasonal: false,
				rating: 4.8,
				reviews: 234
			},
			{
				id: 5,
				name: "Totapuri Mango",
				category: "mangoes",
				price: 100,
				unit: "kg",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eaa4ac3e-1765377558677.png",
				alt: "Green and yellow Totapuri mangoes with distinctive pointed shape",
				description: "Tangy Totapuri mangoes, ideal for pickles, chutneys, and raw mango dishes.",
				inStock: false,
				organic: false,
				seasonal: true,
				rating: 4.3,
				reviews: 45,
				minQuantity: 10,
				quantityStep: 10
			},
			{
				id: 6,
				name: "Premium Chikoo Box",
				category: "chikoo",
				price: 50,
				unit: "kg",
				image: "https://images.unsplash.com/photo-1649928275282-66a310586aa8",
				alt: "Wooden gift box filled with fresh chikoo fruits wrapped in tissue paper",
				description: "Premium selection of perfectly ripe chikoo, hand-picked and packed in gift box.",
				inStock: true,
				organic: true,
				seasonal: false,
				bulkPrice: 45,
				rating: 4.6,
				reviews: 89,
				minQuantity: 5,
				quantityStep: 5
			},
			{
				id: 7,
				name: "Dasheri Mango",
				category: "mangoes",
				price: 100,
				unit: "kg",
				image: "https://images.unsplash.com/photo-1582655299221-2b6bff351df0",
				alt: "Yellow Dasheri mangoes with smooth skin arranged on banana leaf",
				description: "Aromatic Dasheri mangoes from North India, known for their sweet taste and fiber-free pulp.",
				inStock: true,
				organic: false,
				seasonal: true,
				bulkPrice: 90,
				rating: 4.4,
				reviews: 72,
				minQuantity: 10,
				quantityStep: 10
			},
			{
				id: 8,
				name: "Mixed Fruit Pulp Pack",
				category: "pulp",
				price: 420,
				unit: "1kg pack",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_17399fd9b-1764914345408.png",
				alt: "Three glass containers with different colored fruit pulps on marble surface",
				description: "Combo pack of mango, chikoo, and seasonal fruit pulps, perfect for variety in your recipes.",
				inStock: true,
				organic: true,
				seasonal: false,
				rating: 4.7,
				reviews: 156
			},
			{
				id: 9,
				name: "Langra Mango",
				category: "mangoes",
				price: 100,
				unit: "kg",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_1953a6102-1764831688571.png",
				alt: "Green Langra mangoes with slight yellow tint in wicker basket",
				description: "Traditional Langra mangoes with unique sweet-tangy flavor, perfect for mango lovers.",
				inStock: true,
				organic: false,
				seasonal: true,
				bulkPrice: 90,
				rating: 4.5,
				reviews: 63,
				minQuantity: 10,
				quantityStep: 10
			},
			{
				id: 10,
				name: "Organic Chikoo Premium",
				category: "chikoo",
				price: 50,
				unit: "kg",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_1018d7b62-1765470582916.png",
				alt: "Organic chikoo fruits with certification label on rustic wooden table",
				description: "Certified organic chikoo, grown without pesticides, naturally sweet and nutritious.",
				inStock: true,
				organic: true,
				seasonal: false,
				bulkPrice: 45,
				rating: 4.8,
				reviews: 124,
				minQuantity: 5,
				quantityStep: 5
			},
			{
				id: 11,
				name: "Mango Pulp Economy Pack",
				category: "pulp",
				price: 650,
				unit: "2kg pack",
				image: "https://images.unsplash.com/photo-1523517529657-ef2057101935",
				alt: "Large container of mango pulp with measuring cup beside it",
				description: "Value pack of premium mango pulp, ideal for restaurants and bulk users.",
				inStock: true,
				organic: false,
				seasonal: false,
				rating: 4.6,
				reviews: 98
			},
			{
				id: 12,
				name: "Badami Mango",
				category: "mangoes",
				price: 100,
				unit: "kg",
				image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
				alt: "Golden yellow Badami mangoes with red blush on top arranged artistically",
				description: "Karnataka's famous Badami mangoes, known for their unique flavor and aroma.",
				inStock: true,
				organic: true,
				seasonal: true,
				bulkPrice: 90,
				rating: 4.7,
				reviews: 87,
				minQuantity: 10,
				quantityStep: 10
			}
			];

	return (
		<>
			<div className="py-16 mb-5">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl">
					
					<div className="d-flex align-items-center gap-12 mb-3">
						<div className="w-12 h-12 bg-primary-10 rounded-full d-flex align-items-center justify-contnt-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="24"
							height="24"
							className="text-primary"
						>
							<path
							fillRule="evenodd"
							d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
							clipRule="evenodd"
							/>
						</svg>
						</div>
						<h1 className="fw-bold md-text-4xl text-4xl">Fresh Fruits Catalog</h1>
					</div>

					<p className="text-lg text-body mb-4">
						Explore our complete collection of farm-fresh fruits, naturally ripened and delivered with care. Filter by category, price, and preferences to find your perfect selection.
					</p>

					<div className="d-flex flex-wrap gap-3">
						
						<div className="d-flex align-items-center gap-2 px-4 py-2 bg-success-10 rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="20"
							height="20"
							className="text-success"
						>
							<path
							fillRule="evenodd"
							d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
							clipRule="evenodd"
							/>
						</svg>
						<span className="font-body text-sm font-medium text-success">
							Farm Fresh Quality
						</span>
						</div>

						<div className="d-flex align-items-center gap-2 px-4 py-2 bg-primary-10 rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="20"
							height="20"
							className="text-primary"
						>
							<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
							<path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
							<path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
						</svg>
						<span className="font-body text-sm font-medium text-primary">
							Fast Delivery
						</span>
						</div>

						<div className="d-flex align-items-center gap-2 px-4 py-2 bg-warning-10 rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="20"
							height="20"
							className="text-warning"
						>
							<path
							fillRule="evenodd"
							d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
							clipRule="evenodd"
							/>
						</svg>
						<span className="font-body text-sm font-medium text-warning">
							Seasonal Specials
						</span>
						</div>

					</div>
					</div>
				</div>
			</div>
			<div className="pb-16">
				<Container className="mx-auto px-4">
					<div className="pb-16">
						<Row className="gy-4">
							<Col lg={4} md={6} sm={12}>
								<FilterBar
								activeCategory={category}
								onCategoryChange={setCategory}
								priceRange={priceRange}
								onPriceRangeChange={setPriceRange}
								showOrganic={organic}
								onOrganicToggle={() => setOrganic(!organic)}
								showAvailable={available}
								onAvailableToggle={() => setAvailable(!available)}
								/>;
							</Col>
							<Col lg={8} md={6} sm={12}>
								<CatalogHeader totalProducts={100} filteredProducts={50} sortBy="featured" onSortChange={() => {}} />
								<div className="d-grid grid-cols-1 md-grid-cols-2 gap-4">
									<ProductGrid
										products={mockProducts}
										onWhatsAppOrder={(product, qty) =>
										console.log(product.name, qty)
										}
									/>
								</div>

							</Col>
						</Row>
					</div>
					<div className="">
						<div className="mt-12 bg-card rounded-lg p-8">
							<div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-4">
							
							<div className="flex-fill">
								<h3 className="fw-bold text-xl mb-2">Need Help Choosing?</h3>
								<p className="mb-3">
								Our team is here to help you select the perfect fruits for your needs.
								Contact us on WhatsApp for personalized recommendations and bulk order assistance.
								</p>

								<div className="d-flex flex-wrap gap-12">
								<button className="btn btn-success text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-6 py-3">
									<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									width="20"
									height="20"
									>
									<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
									<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
									</svg>
									Chat With Us
								</button>

								<button className="btn btn-primary text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-6 py-3">
									<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									width="20"
									height="20"
									>
									<path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
									</svg>
									Bulk Order
								</button>
								</div>
							</div>

							<div className="flex-shrink-0">
								<div className="bg-card border rounded-lg p-6 text-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									width="32"
									height="32"
									className="text-primary mx-auto mb-3"
								>
									<path
									fillRule="evenodd"
									d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
									clipRule="evenodd"
									/>
								</svg>
								<p className="text-sm mb-1">Call us directly</p>
								<p className="h6 text-lg mb-0 fw-bold">+91 98765 43210</p>
								</div>
							</div>

							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default FruitsCatalog;