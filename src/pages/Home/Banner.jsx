/* eslint-disable react/no-unescaped-entities */
import animation from "../../assets/Animation.json";
import Lottie from "lottie-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <section className="container py-10 md:py-16">
            <div className="grid items-center gap-8 md:grid-cols-2">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [24, 0]}}
                    transition={{duration: 0.65, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="section-block relative overflow-hidden p-6 md:p-8">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/20 blur-2xl" />
                    <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-2xl" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                        Welcome to mindful growth
                    </p>
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                        Embrace <span>Wellness</span>,
                        <br /> Nurture <span>Your Mind</span>
                    </h2>
                    <p className="desc mt-5 text-base md:text-lg">
                        We built this space to help you slow down, reflect, and
                        heal with intention. Track your mood, write journals,
                        practice breathing, and reconnect with yourself.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link to="/chat-with-bot" className="btn-primary">
                            Talk to AI Companion
                        </Link>
                        <Link
                            to="/dashboard/profile"
                            className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10">
                            Open Dashboard
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [24, 0]}}
                    transition={{duration: 0.65, delay: 0.3}}
                    initial={{opacity: 0}}
                    className="glass-card mx-auto w-full max-w-xl p-4 md:p-6">
                    <Lottie
                        className="w-full rounded-2xl"
                        animationData={animation}
                        loop
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
