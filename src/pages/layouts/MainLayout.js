import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function MainLayout() {
    return(
        <div className="MainLayout bg-dark">
            <Navbar />
            <div className="min-vh-100 py-4" style={{margin: "0 20%"}}>
                <Outlet />
            </div>
            <Footer />    
        </div>
    );
}