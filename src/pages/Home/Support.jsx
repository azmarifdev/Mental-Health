/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import support from "../../assets/support.json";
import Heading from "../../utils/Heading";
import {MdEmail} from "react-icons/md";
import {IoCall} from "react-icons/io5";
import {motion} from "framer-motion";

const Support = () => {
    return (
        <section className="container py-16">
            <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="section-block p-6 md:p-8">
                    <Heading title="Get Community Support" />
                    <motion.div
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.6, delay: 0.2}}>
                        <p className="desc mb-5">
                            Find solace and strength in our mental wellness
                            community. Share, listen, and heal together. Your
                            voice matters, and support is always one step away.
                        </p>
                        <div className="space-y-2 text-slate-200">
                            <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                <IoCall size={18} /> +880 17448******
                            </p>
                            <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                <MdEmail size={18} /> example@gmail.com
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="glass-card flex items-center justify-center p-4 md:p-6">
                    <Lottie
                        className="w-full max-w-md rounded-xl"
                        animationData={support}
                        loop
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Support;
