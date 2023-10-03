import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function MainLayout() {
    return(
        <div className="MainLayout">
            <Navbar />
            <div className="d-flex flex-column min-vh-100 py-4 bg-dark">
                <Outlet />
            </div>
            <Footer />    
        </div>
    );
}