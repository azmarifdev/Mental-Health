/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Container from "../../utils/Container";
import support from "../../assets/support.json";
import Heading from "../../utils/Heading";
import {MdEmail} from "react-icons/md";
import {IoCall} from "react-icons/io5";
import {motion} from "framer-motion";

const Support = () => {
    return (
        <div className="py-10">
            <div className=" grid md:grid-cols-2   container">
                <div className=" md:grid place-content-center">
                    <div className="flex flex-col md:mr-4 desc text-lg">
                        <div>
                            <Heading title={"Get community support"} />
                        </div>

                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 0.5}}>
                            <p className="mb-3 text-gray-200">
                                "Find solace and strength in our Mental Health
                                Community. Here, support is a heartbeat away.
                                Share, listen, and thrive together on the
                                journey to wellbeing. Your voice matters, and so
                                does your mental health. Join us today."
                            </p>
                            <div>
                                <div>
                                    <p className="inline-flex items-center">
                                        <IoCall size={20} />
                                        <span className="ml-2">
                                            +880 17448******
                                        </span>
                                    </p>
                                </div>
                                <p className="inline-flex items-center">
                                    <MdEmail size={20} />
                                    <span className="ml-2">
                                        example@gmail.com
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.7, delay: 0.5}}
                    className="flex -z-40 items-center rounded-xl justify-center md:p-6 md:mt-8 md:mr-8 ">
                    <Lottie
                        className="object-contain rounded-xl  md:w-[440px]  w-full"
                        animationData={support}
                        loop={true}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Support;
