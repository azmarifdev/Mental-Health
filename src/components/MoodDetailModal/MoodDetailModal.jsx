import {ImCancelCircle} from "react-icons/im";
import {motion} from "framer-motion";

export default function MoodDetailModals({
    currentGuide,
    showModal,
    setShowModal,
}) {
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex mb-20 ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[88px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-4xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between md:px-10 p-5 border-b border-solid  border-gray-700 rounded-t">
                                    <h3 className="text-2xl font-semibold text-gray-200">
                                        <span> {currentGuide.heading}</span>
                                    </h3>
                                    <button
                                        className="p-1 ml-auto  float-right text-2xl  leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <ImCancelCircle className="text-gray-300" />
                                    </button>
                                </div>
                                {/*body*/}
                                <motion.div
                                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                                    transition={{duration: 0.9}}
                                    initial={{opacity: 0}}
                                    className="relative md:px-10 p-5 flex-auto text-gray-200">
                                    <div>
                                        {currentGuide?.tips?.map((s, i) => (
                                            <li
                                                key={i}
                                                className=" text-lg  leading-relaxed mb-2">
                                                <b>{s.title}:</b> {s.desc}
                                            </li>
                                        ))}
                                    </div>
                                </motion.div>
                                {/*footer*/}
                                <div className="flex items-center justify-end  border-t border-solid border-gray-700 rounded-b">
                                    <button
                                        className="font-bold uppercase px-6 py-2 text-base outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
}
