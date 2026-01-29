import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/rishit-fruits.scss'
import './assets/scss/custom.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/main.jsx';
import Home from './view/index.jsx';
import About from './view/about.jsx';
import Contact from './view/contact.jsx';
import MangoProducts from './view/mango-products.jsx';
import FruitsCatalog from './view/fruits-catalog.jsx';
import ProductDetail from './view/product-detail.jsx';
import Pricing from './view/pricing.jsx';
import AllReview from './view/allReview.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mango-products" element={<MangoProducts />} />
          <Route path="fruits-catalog" element={<FruitsCatalog />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="all-review" element={<AllReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();