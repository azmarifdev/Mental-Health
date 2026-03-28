import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {HiBars3} from "react-icons/hi2";
import {MdOutlineCancel} from "react-icons/md";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

const navItems = [
    {to: "/", label: "Home"},
    {to: "/journals", label: "Journals"},
    {to: "/breathing-exercises", label: "Exercises"},
    {to: "/meditations", label: "Meditations"},
    {to: "/chat-with-bot", label: "Chat Bot"},
    {to: "/dashboard/profile", label: "Dashboard"},
];

const navClass = ({isActive}) =>
    `rounded-xl px-3 py-2 text-sm font-semibold transition ${
        isActive
            ? "bg-white/15 text-white"
            : "text-slate-200 hover:bg-white/10 hover:text-white"
    }`;

const Navbar = () => {
    const {setUser, setToken} = useUserContext();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        fetch(`${config.base_url}/auth/logout`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    localStorage.removeItem("accessToken");
                    setToken("");
                    setUser(null);
                    toast.success("Logout successfully.");
                }
            })
            .catch(() => {
                toast.error("Logout failed. Please try again.");
            });
    };

    return (
        <header className="fixed left-0 right-0 top-0 z-[99999999] px-3 pt-3 md:px-5">
            <nav className="container rounded-2xl bg-slate-950/70 p-0 shadow-[0_16px_40px_rgba(4,10,24,0.45)] backdrop-blur-2xl">
                <div className="flex min-h-[62px] items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-content-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-xl font-extrabold text-white shadow-xl shadow-sky-700/40">
                            M
                        </div>
                        <div>
                            <p className="text-lg font-bold tracking-tight text-white">
                                Mental Health
                            </p>
                            <p className="text-xs text-slate-300">
                                Wellbeing Platform
                            </p>
                        </div>
                    </Link>

                    <ul className="hidden items-center gap-1.5 lg:flex">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink className={navClass} to={item.to}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="py-1">
                            <button onClick={handleLogout} className="btn-primary px-5">
                                Logout
                            </button>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="rounded-xl bg-white/10 p-2 text-2xl text-white lg:hidden"
                        onClick={() => setOpen(!open)}>
                        {open ? <MdOutlineCancel /> : <HiBars3 />}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${
                        open ? "max-h-[480px] pt-3" : "max-h-0"
                    }`}>
                    <div className="rounded-2xl bg-slate-900/85 p-4 backdrop-blur-xl">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className={navClass}
                                        onClick={() => setOpen(false)}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleLogout}
                            className="btn-primary mb-1 mt-5 w-full">
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
