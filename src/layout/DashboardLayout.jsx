import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Sidebar />
            </div>
            <Footer />
        </>
    );
};

export default DashboardLayout;
