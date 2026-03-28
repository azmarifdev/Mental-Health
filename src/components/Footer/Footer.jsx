import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            whileInView={{opacity: [0, 1], y: [20, 0]}}
            transition={{duration: 0.6, delay: 0.1}}
            className="relative mt-16 border-t border-white/10 bg-slate-950/45 backdrop-blur-lg">
            <div className="container py-12">
                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Mental Health <span>Companion</span>
                        </h2>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                            Build better emotional habits with journaling, mood
                            tracking, guided breathing, meditations, and a
                            compassionate AI companion.
                        </p>
                        <div className="mt-5 flex items-center gap-3 text-xl">
                            <button className="rounded-xl border border-white/20 bg-white/10 p-2 text-sky-300 hover:bg-white/20">
                                <MdFacebook />
                            </button>
                            <button className="rounded-xl border border-white/20 bg-white/10 p-2 text-rose-300 hover:bg-white/20">
                                <FaInstagram />
                            </button>
                            <button className="rounded-xl border border-white/20 bg-white/10 p-2 text-cyan-300 hover:bg-white/20">
                                <FaTwitter />
                            </button>
                            <button className="rounded-xl border border-white/20 bg-white/10 p-2 text-emerald-300 hover:bg-white/20">
                                <FaLinkedin />
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
                                Explore
                            </p>
                            <ul className="space-y-2 text-slate-200">
                                <li>
                                    <Link to="/" className="hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/breathing-exercises"
                                        className="hover:text-white">
                                        Breathing Exercises
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/journals"
                                        className="hover:text-white">
                                        Journaling
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/chat-with-bot"
                                        className="hover:text-white">
                                        Chat With Bot
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
                                Legal
                            </p>
                            <ul className="space-y-2 text-slate-200">
                                <li>
                                    <Link to="/" className="hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-white">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/profile"
                                        className="hover:text-white">
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                    Copyright {new Date().getFullYear()} Mental Health and Wellbeing.
                    All rights reserved.
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
