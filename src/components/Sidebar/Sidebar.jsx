import React from "react";
import {ImProfile} from "react-icons/im";
import {IoAdd, IoJournal, IoSad} from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";
import {useUserContext} from "../../context/AuthProvider";

const Sidebar = () => {
    const {user} = useUserContext();
    return (
        <div className="md:flex space-x-4 my-9">
            <div className=" p-4 md:w-72 w-full md:mb-0 mb-8 bg-primary  text-dark  shadow-xl">
                <div className="flex flex-col">
                    <div className="space-y-4">
                        <div className="flex flex-col justify-center items-center mt-8">
                            <img
                                className="w-20 h-20 object-cover rounded-full"
                                src={user?.avatar}
                                alt=""
                            />
                            <h2 className="text-lg font-semibold">
                                {user?.name}
                            </h2>
                            <p>{user?.email}</p>
                        </div>

                        <div className="pt-3">
                            <Link
                                to={"profile"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <ImProfile size={20} className="mr-2" /> Profile
                            </Link>
                            <Link
                                to={"journaling"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <IoJournal size={20} className="mr-2" />
                                My Journals
                            </Link>
                            <Link
                                to={"add-journal"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <IoAdd size={20} className="mr-2" />
                                Add Journaling
                            </Link>
                            <Link
                                to={"my-write-mood"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <IoSad size={20} className="mr-2" />
                                My Submitted Moods
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" md:flex-1 md:h-[80vh] md:p-5 p-2 mr-3 md:mr-0 overflow-x-hidden overscroll-y-auto">
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
