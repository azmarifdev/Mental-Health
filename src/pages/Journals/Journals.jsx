import React, {useEffect, useState} from "react";
import {useUserContext} from "../../context/AuthProvider";
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
        <div className="container min-h-[70vh]">
            <div className="grid lg:grid-cols-4  md:grid-cols-3  grid-cols-1 gap-10 py-20 text-gray-200">
                {journals?.length ? (
                    <>
                        <>
                            {journals?.map((jn, i) => (
                                <motion.div
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.7, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    key={i}
                                    className="flex flex-col  bg-primary border border-gray-700 shadow-sm rounded-lg md:p-0 p-5">
                                    <div className="p-4 md:p-5">
                                        <p className="text-xs text-right">
                                            <TimeAgo
                                                datetime={formattedDate(
                                                    jn?.createdAt
                                                )}
                                            />
                                        </p>
                                        <h3 className="text-lg font-bold text-gray-200">
                                            {jn.title}
                                        </h3>

                                        {jn.desc.length > 80
                                            ? jn?.desc
                                                  ?.slice(0, 95)
                                                  ?.split("\n")
                                                  .map((line, index) => (
                                                      <p
                                                          className=" text-base capitalize"
                                                          key={index}>
                                                          {line}
                                                      </p>
                                                  ))
                                            : jn?.desc
                                                  ?.split("\n")
                                                  .map((line, index) => (
                                                      <p
                                                          className=" text-base capitalize"
                                                          key={index}>
                                                          {line}
                                                      </p>
                                                  ))}

                                        <div className="mt-2  text-base font-semibold rounded-lg ">
                                            <button
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setCurrentJournal(jn);
                                                }}
                                                type="submit"
                                                className="inline-flex items-center gap-x-1">
                                                <span> Read more</span>
                                                <IoIosArrowForward size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    </>
                ) : (
                    <div className="h-[50vh] flex justify-center items-center text-center lg:col-span-4 md:col-span-3 text-3xl">
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
