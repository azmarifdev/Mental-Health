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
        <div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1 gap-10 text-gray-200 mt-5">
                {journals?.length ? (
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
                                    </p>{" "}
                                    {showModal && (
                                        <JournalModel
                                            showModal={showModal}
                                            setShowModal={setShowModal}
                                            currentJournal={currentJournal}
                                        />
                                    )}
                                    <h3 className="text-lg font-bold text-dark">
                                        {jn.title}
                                    </h3>
                                    {jn.desc.length > 80
                                        ? jn?.desc
                                              ?.slice(0, 95)
                                              ?.split("\n")
                                              .map((line, index) => (
                                                  <p
                                                      className="text-gray-200 text-base capitalize"
                                                      key={index}>
                                                      {line}
                                                  </p>
                                              ))
                                        : jn?.desc
                                              ?.split("\n")
                                              .map((line, index) => (
                                                  <p
                                                      className="text-gray-200 text-base capitalize"
                                                      key={index}>
                                                      {line}
                                                  </p>
                                              ))}
                                    <div className="mt-2  flex justify-between text-base font-semibold rounded-lg ">
                                        <button
                                            type="submit"
                                            onClick={() => {
                                                setShowModal(true);
                                                setCurrentJournal(jn);
                                            }}
                                            className="inline-flex items-center gap-x-1">
                                            <span> Read more</span>
                                            <IoIosArrowForward size={16} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowDeleteModal(true);
                                                setCurrentJournal(jn);
                                            }}>
                                            <IoMdTrash
                                                size={22}
                                                className="text-pink-500"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </>
                ) : (
                    <>
                        <div className="h-[50vh] flex flex-col justify-center items-center text-center lg:col-span-4 md:col-span-3 text-3xl">
                            <p> No journal available.</p>
                            <Link
                                className="text-lg underline"
                                to={"/dashboard/add-journal"}>
                                Add journal
                            </Link>
                        </div>
                    </>
                )}
            </div>
            <>
                {" "}
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
            </>
        </div>
    );
};

export default MyJournals;
