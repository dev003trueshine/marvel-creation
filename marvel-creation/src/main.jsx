// src/router/index.jsx (Example Route Config)
import MainLayout from '../layout/index.jsx';
import About from './view/about.jsx';   
import Contact from './view/contact.jsx'; 
import MangoProducts from './view/mango-products.jsx';
import FruitsCatalog from './view/fruits-catalog.jsx';
import ProductDetail from './view/product-detail.jsx';
export const IndexRouter = [
    {
        path: '/',
        element: <MainLayout />, // Use the wrapper we made
         children : [
            {
                path: '',
                element: <About />
            },
            {
                path: '',
                element: <Contact />
            },
            {
                path: 'mango-products',
                element: <MangoProducts />
            },
            {
                path: 'fruits-catalog',
                element: <FruitsCatalog />
            },
            {
                path: 'product-detail',
                element: <ProductDetail />
            },
        ]

    }
];