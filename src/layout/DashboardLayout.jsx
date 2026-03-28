import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const DashboardLayout = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-10 left-8 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute top-32 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
            <Navbar />
            <div className="container relative z-10">
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
