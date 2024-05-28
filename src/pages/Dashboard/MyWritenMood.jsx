import React, {useEffect, useState} from "react";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import Loading from "../../utils/Loading";
import {motion} from "framer-motion";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import WritenModal from "../../components/WritenModal/WritenModal";
import {IoMdTrash} from "react-icons/io";
import DeleteWritenModal from "../../components/DeleteWritenMood/DeleteWritenMood";

const MyWritenMood = () => {
    const {user} = useUserContext();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentData, setCurrentData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${config.base_url}/mood/write/user/${user?._id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setLoading(false);
            });
    }, [user, refetch]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            {showModal && (
                <WritenModal
                    setShowModal={setShowModal}
                    showModal={showModal}
                    data={currentData}
                />
            )}
            {showDeleteModal && (
                <DeleteWritenModal
                    showModal={showDeleteModal}
                    setShowModal={setShowDeleteModal}
                    data={currentData}
                    refetch={refetch}
                    setRefetch={setRefetch}
                />
            )}
            <div className="grid md:grid-cols-3 gap-10 text-gray-200 mt-5">
                {data?.length ? (
                    <>
                        {data?.map((dt, i) => (
                            <motion.div
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.7}}
                                initial={{opacity: 0}}
                                key={i}
                                className="">
                                <div
                                    className="flex justify-center flex-col items-center relative bg-primary rounded-md
                            p-8">
                                    <h2 className="text-xl ">
                                        {" "}
                                        You are felling {dt.mood}
                                    </h2>
                                    <p className="absolute text-sm top-0 left-0 p-2">
                                        <TimeAgo
                                            datetime={formattedDate(
                                                dt?.createdAt
                                            )}
                                        />{" "}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setCurrentData(dt);
                                            setShowModal(true);
                                        }}
                                        className="text-lg font-semibold hover:underline ">
                                        <span>See details</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowDeleteModal(true);
                                            setCurrentData(dt);
                                        }}
                                        className="absolute bottom-0 right-0 p-2">
                                        {" "}
                                        <IoMdTrash
                                            size={22}
                                            className="text-pink-500"
                                        />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </>
                ) : (
                    <>
                        <>
                            <div className="h-[50vh] flex flex-col justify-center items-center text-center lg:col-span-4 md:col-span-3 text-3xl">
                                <p>
                                    {" "}
                                    No moods available.You dont submitted
                                    anything.
                                </p>
                            </div>
                        </>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyWritenMood;
