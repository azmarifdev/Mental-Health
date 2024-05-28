import {ImCancelCircle} from "react-icons/im";
import {motion} from "framer-motion";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {useUserContext} from "../../context/AuthProvider";

const WritenModal = ({showModal, setShowModal, data}) => {
    const {user} = useUserContext();
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex mb-20 text-lg">
                    <div className="fixed inset-[20px] bottom-0 md:top-[120px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative text-gray-200 flex flex-col w-full bg-primary outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between md:px-10 p-5 border-b border-gray-700 rounded-t">
                                    <div>
                                        <div className="flex items-center space-x-3 mt-2">
                                            {user?.avatar ? (
                                                <img
                                                    className="w-11 h-11 object-cover  rounded-full"
                                                    src={user?.avatar}
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
                                                    {user?.name}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="p-1 ml-auto  float-right text-2xl  leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <ImCancelCircle className="text-gray-400" />
                                    </button>
                                </div>
                                {/*body*/}
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [20, 0]}}
                                    transition={{duration: 0.5}}
                                    initial={{opacity: 0}}
                                    className="md:px-10 px-5 ">
                                    <h3 className="text-2xl  mt-3">
                                        You were feeling{" "}
                                        <span> {data.mood}</span>{" "}
                                        <small className="text-sm">
                                            at{" "}
                                            <TimeAgo
                                                datetime={formattedDate(
                                                    data?.createdAt
                                                )}
                                            />{" "}
                                        </small>
                                    </h3>
                                </motion.div>
                                <div className="md:px-10 p-5 ">
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                1. You awere feeling {data.mood}{" "}
                                                because.
                                            </h3>
                                            {data?.stepFirst?.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    <b>{s.title}:</b> {s.desc}
                                                </li>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        transition={{duration: 0.5}}
                                        initial={{opacity: 0}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                2. How these stressors were
                                                affecting me.
                                            </h3>
                                            {data?.stepSecond?.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    <b>{s.title}:</b> {s.desc}
                                                </li>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                3. My emotions at the moment:
                                            </h3>
                                            {data?.stepThird?.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    <b>{s.title}:</b> {s.desc}
                                                </li>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                4. Positive aspects and coping
                                                strategies:
                                            </h3>
                                            {data?.stepFourth?.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    <b>{s.title}:</b> {s.desc}
                                                </li>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                5. Actions I could take to
                                                alleviate stress:
                                            </h3>
                                            {data?.stepFifth?.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    <b>{s.title}:</b> {s.desc}
                                                </li>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                6. Affirmations for
                                                self-compassion:
                                            </h3>
                                            {data?.stepSixth?.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    <b>{s.title}:</b> {s.desc}
                                                </li>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                7. Gratitude:{" "}
                                            </h3>
                                            {
                                                <li className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    {data?.stepSeventh[0].title}
                                                </li>
                                            }
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileInView={{
                                            opacity: [0, 1],
                                            y: [20, 0],
                                        }}
                                        initial={{opacity: 0}}
                                        transition={{duration: 0.5}}>
                                        <div className="mb-2">
                                            <h3 className="font-semibold">
                                                8. Closing Thoughts::{" "}
                                            </h3>
                                            {
                                                <li className="ml-8 list-decimal leading-relaxed font-normal text-gray-300 ">
                                                    {data?.stepEighth[0].title}
                                                </li>
                                            }
                                        </div>
                                    </motion.div>
                                </div>

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

export default WritenModal;
