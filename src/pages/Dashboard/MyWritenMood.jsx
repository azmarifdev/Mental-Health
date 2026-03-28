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
        <div className="py-2">
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
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Mood Reflection
                    </p>
                    <h1 className="mt-2 text-2xl font-bold text-white md:text-4xl">
                        My Written Moods
                    </h1>
                    <p className="mt-2 text-sm text-slate-300">
                        Review your submitted mood reflections and details.
                    </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Total: <b>{data?.length || 0}</b>
                </div>
            </div>

            <div className="grid gap-6 text-gray-200 md:grid-cols-2 lg:grid-cols-3">
                {data?.length ? (
                    data?.map((dt, i) => (
                        <motion.article
                            whileInView={{opacity: [0, 1], y: [0, -12]}}
                            transition={{duration: 0.45, delay: i * 0.05}}
                            initial={{opacity: 0}}
                            key={i}
                            className="glass-card relative flex flex-col p-5">
                            <p className="text-xs text-slate-300">
                                <TimeAgo datetime={formattedDate(dt?.createdAt)} />
                            </p>
                            <h2 className="mt-3 text-lg font-bold text-white capitalize">
                                You were feeling {dt.mood}
                            </h2>
                            <button
                                type="button"
                                onClick={() => {
                                    setCurrentData(dt);
                                    setShowModal(true);
                                }}
                                className="mt-3 inline-flex w-fit text-sm font-semibold text-sky-200 hover:text-white">
                                See details
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowDeleteModal(true);
                                    setCurrentData(dt);
                                }}
                                className="absolute bottom-3 right-3 rounded-lg border border-rose-300/20 bg-rose-400/10 p-2 text-rose-300 hover:bg-rose-400/20">
                                <IoMdTrash size={18} />
                            </button>
                        </motion.article>
                    ))
                ) : (
                    <div className="glass-card col-span-full flex min-h-[260px] flex-col items-center justify-center text-center">
                        <p className="text-2xl text-slate-200">
                            No moods submitted yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWritenMood;
