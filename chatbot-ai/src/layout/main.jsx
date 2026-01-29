// src/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Placeholder for child pages
import Header from '../components/partial/header.jsx';
import Footer from '../components/partial/footer.jsx';
const MainLayout = () => {
    return (
        <div className="wrapper">
             {/* 1. Header is called here */}
            <Header />
            {/* 2. Main content area */}
            <main className="content-page">
                {/* Outlet renders the specific page user is visiting (e.g., Dashboard, Login) */}
                <Outlet />
            </main>
            {/* 3. Footer is called here */}
            <Footer />
        </div>
    );
};
export default MainLayout;