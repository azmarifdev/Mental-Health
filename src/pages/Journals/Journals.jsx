import React, {useEffect, useState} from "react";
import {config} from "../../utils/envCongif";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {IoIosArrowForward} from "react-icons/io";
import {motion} from "framer-motion";
import JournalModel from "../../components/JournalModel/JournalModel";
import Loading from "../../utils/Loading";

const Journals = () => {
    const [journals, setJournals] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentJournal, setCurrentJournal] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${config.base_url}/journal`, {
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
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container min-h-[70vh] py-10 md:py-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Journal Archive
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
                        Community Journals
                    </h1>
                    <p className="mt-2 text-sm text-slate-300 md:text-base">
                        Read reflections, thoughts, and emotional insights shared by users.
                    </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Total: <b>{journals?.length || 0}</b>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {journals?.length ? (
                    journals?.map((jn, i) => (
                        <motion.article
                            whileInView={{opacity: [0, 1], y: [16, 0]}}
                            transition={{duration: 0.45, delay: i * 0.03}}
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
                                {(jn.desc.length > 120
                                    ? `${jn?.desc?.slice(0, 120)}...`
                                    : jn?.desc
                                )
                                    ?.split("\n")
                                    .map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                            </div>

                            <button
                                onClick={() => {
                                    setShowModal(true);
                                    setCurrentJournal(jn);
                                }}
                                type="button"
                                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-200 hover:text-white">
                                Read full journal <IoIosArrowForward size={15} />
                            </button>
                        </motion.article>
                    ))
                ) : (
                    <div className="glass-card col-span-full flex min-h-[260px] items-center justify-center text-center text-2xl text-slate-200">
                        No journal available.
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
        </div>
    );
};

export default Journals;
