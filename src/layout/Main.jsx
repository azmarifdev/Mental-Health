import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-[8%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute top-[28%] right-[10%] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <Navbar />
            <main className="relative z-10 min-h-[72vh] pt-24 md:pt-28">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
