import React, {useEffect, useState} from "react";
import {IoIosArrowForward, IoMdTrash} from "react-icons/io";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {motion} from "framer-motion";
import JournalModel from "../../components/JournalModel/JournalModel";
import DeleteModal from "../../components/Deletemodal/Deletemodal";
import {Link} from "react-router-dom";
import Loading from "../../utils/Loading";

const MyJournals = () => {
    const [journals, setJournals] = useState([]);
    const {user} = useUserContext();
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentJournal, setCurrentJournal] = useState({});
    const [refetch, setRefetch] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${config.base_url}/journal/user/${user._id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setJournals(data.data);
                setLoading(false);
            });
    }, [refetch]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="py-2">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Dashboard Library
                    </p>
                    <h1 className="mt-2 text-2xl font-bold text-white md:text-4xl">
                        My Journals
                    </h1>
                    <p className="mt-2 text-sm text-slate-300">
                        Your personal reflections and writing history.
                    </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Total: <b>{journals?.length || 0}</b>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {journals?.length ? (
                    journals?.map((jn, i) => (
                        <motion.article
                            whileInView={{opacity: [0, 1], y: [0, -12]}}
                            transition={{duration: 0.45, delay: i * 0.04}}
                            initial={{opacity: 0}}
                            key={i}
                            className="glass-card flex flex-col p-5">
                            <p className="text-xs text-slate-300">
                                <TimeAgo datetime={formattedDate(jn?.createdAt)} />
                            </p>
                            <h3 className="mt-2 text-lg font-bold text-white">
                                {jn.title}
                            </h3>
                            <div className="mt-2 space-y-1 text-sm leading-relaxed text-slate-300">
                                {(jn.desc.length > 110
                                    ? `${jn?.desc?.slice(0, 110)}...`
                                    : jn?.desc
                                )
                                    ?.split("\n")
                                    .map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(true);
                                        setCurrentJournal(jn);
                                    }}
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-sky-200 hover:text-white">
                                    Read more <IoIosArrowForward size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDeleteModal(true);
                                        setCurrentJournal(jn);
                                    }}
                                    className="rounded-lg border border-rose-300/20 bg-rose-400/10 p-2 text-rose-300 hover:bg-rose-400/20">
                                    <IoMdTrash size={18} />
                                </button>
                            </div>
                        </motion.article>
                    ))
                ) : (
                    <div className="glass-card col-span-full flex min-h-[260px] flex-col items-center justify-center text-center">
                        <p className="text-2xl text-slate-200">No journal available.</p>
                        <Link className="mt-2 text-sky-200 underline" to={"/dashboard/add-journal"}>
                            Add journal
                        </Link>
                    </div>
                )}
            </div>

            {showModal && (
                <JournalModel
                    showModal={showModal}
                    setShowModal={setShowModal}
                    currentJournal={currentJournal}
                />
            )}
            {showDeleteModal && (
                <DeleteModal
                    showModal={showDeleteModal}
                    setShowModal={setShowDeleteModal}
                    data={currentJournal}
                    refetch={refetch}
                    setRefetch={setRefetch}
                />
            )}
        </div>
    );
};

export default MyJournals;
