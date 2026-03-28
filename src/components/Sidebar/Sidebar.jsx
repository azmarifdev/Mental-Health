import {ImProfile} from "react-icons/im";
import {IoAdd, IoJournal, IoSad} from "react-icons/io5";
import {NavLink, Outlet} from "react-router-dom";
import {useUserContext} from "../../context/AuthProvider";

const linkClass = ({isActive}) =>
    `group mt-2 inline-flex w-full items-center gap-2 rounded-xl px-3 py-2.5 font-semibold transition ${
        isActive
            ? "bg-white/15 text-white"
            : "text-slate-200 hover:bg-white/10 hover:text-white"
    }`;

const Sidebar = () => {
    const {user} = useUserContext();

    return (
        <div className="my-8 flex flex-col gap-6 md:flex-row">
            <aside className="glass-card h-fit w-full p-5 md:w-80">
                <div className="flex flex-col items-center border-b border-white/10 pb-6 text-center">
                    <img
                        className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/30"
                        src={user?.avatar}
                        alt={user?.name}
                    />
                    <h2 className="mt-3 text-lg font-bold text-white">
                        {user?.name}
                    </h2>
                    <p className="text-sm text-slate-300">{user?.email}</p>
                </div>

                <div className="pt-4">
                    <NavLink to="profile" className={linkClass}>
                        <ImProfile size={18} /> Profile
                    </NavLink>
                    <NavLink to="journaling" className={linkClass}>
                        <IoJournal size={18} /> My Journals
                    </NavLink>
                    <NavLink to="add-journal" className={linkClass}>
                        <IoAdd size={18} /> Add Journal
                    </NavLink>
                    <NavLink to="my-write-mood" className={linkClass}>
                        <IoSad size={18} /> My Submitted Moods
                    </NavLink>
                </div>
            </aside>

            <section className="glass-card min-h-[75vh] flex-1 p-3 md:p-6">
                <Outlet />
            </section>
        </div>
    );
};

export default Sidebar;
