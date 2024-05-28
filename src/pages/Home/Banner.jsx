/* eslint-disable react/no-unescaped-entities */
import animation from "../../assets/Animation.json";
import Lottie from "lottie-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className="">
            <div className="container grid md:grid-cols-2 md:gap-x-10 sm:py-12 ">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.7, delay: 0.3}}
                    initial={{opacity: 0}}
                    className="flex -z-40 items-center md:-ml-10 justify-center md:p-6 md:mt-8 md:mr-8 ">
                    <Lottie
                        className="object-contain rounded-lg  md:w-[480px]  w-full"
                        animationData={animation}
                        loop={true}
                    />
                </motion.div>
                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.7, delay: 0.3}}
                    initial={{opacity: 0}}
                    className=" md:mt-16 mt-14 md:grid place-content-center">
                    <div className="flex flex-col md:mr-4">
                        <h2 className="font-bold text-gray-200  leading-none md:text-5xl text-3xl">
                            Embrace <span>Wellness</span>, <br />{" "}
                            <span>Nurture</span> Your Mind
                        </h2>

                        <p className="my-3 mb-6 desc text-lg ">
                            {" "}
                            In our website, we're dedicated to uplifting your
                            mental well-being. Explore a space that encourages
                            self-discovery, resilience, and growth. Unleash the
                            potential within you, foster a positive mindset, and
                            find solace in a community that understands.
                        </p>
                        <div>
                            <Link to={"/chat-with-bot"}>
                                <button className="btn-primary text-lg">
                                    Chat with bot
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
