import {ImCancelCircle} from "react-icons/im";
import {motion} from "framer-motion";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {useUserContext} from "../../context/AuthProvider";

const JournalModel = ({showModal, setShowModal, currentJournal}) => {
    const {user} = useUserContext();
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex mb-20 ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[120px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative text-gray-200 flex flex-col w-full bg-primary outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between md:px-10 p-5 border-b border-gray-700 rounded-t">
                                    <div>
                                        <h3 className="text-lg  ">
                                            {/* {currentJournal.title}
                                             */}
                                            The journal posted by{" "}
                                            {user?.email ==
                                                currentJournal.user.email &&
                                                "me"}
                                            .
                                        </h3>
                                        <div className="flex items-center space-x-3 mt-2">
                                            {currentJournal?.user?.avatar ? (
                                                <img
                                                    className="w-11 h-11 object-cover  rounded-full"
                                                    src={
                                                        currentJournal?.user
                                                            ?.avatar
                                                    }
                                                    alt="Sender"
                                                />
                                            ) : (
                                                <img
                                                    className="w-11 h-11  rounded-full"
                                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                                    alt="Sender"
                                                />
                                            )}
                                            <div>
                                                <h2 className="text-xl font-semibold ">
                                                    {currentJournal?.user?.name}
                                                </h2>
                                                <TimeAgo
                                                    className="text-sm"
                                                    datetime={formattedDate(
                                                        currentJournal?.createdAt
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="p-1 ml-auto  float-right text-2xl  leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <ImCancelCircle className="text-gray-300" />
                                    </button>
                                </div>
                                {/*body*/}
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [20, 0]}}
                                    transition={{duration: 0.5}}
                                    className="md:px-10 px-5 ">
                                    <h3 className="text-2xl  mt-3">
                                        <span> {currentJournal.title}</span>
                                    </h3>
                                </motion.div>
                                <motion.div
                                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                                    transition={{duration: 0.5}}
                                    initial={{opacity: 0}}
                                    className="relative md:px-10 p-5 flex-auto ">
                                    <div>
                                        {currentJournal?.desc
                                            ?.split("\n")
                                            ?.map((line, index) => (
                                                <>
                                                    {line && (
                                                        <>
                                                            {" "}
                                                            <li
                                                                className=" text-lg  leading-relaxed mb-2"
                                                                key={index}>
                                                                {line}
                                                                <br />
                                                            </li>
                                                        </>
                                                    )}
                                                </>
                                            ))}
                                    </div>
                                </motion.div>
                                {/*footer*/}
                                <div className="flex items-center justify-end  border-t border-solid border-gray-700 border-blueGray-200 rounded-b">
                                    <button
                                        className="font-bold  px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        <span>Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
                </div>
            )}
        </>
    );
};

export default JournalModel;
