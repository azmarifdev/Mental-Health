import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useUserContext} from "../../context/AuthProvider";
import {FaArrowRightLong, FaRegHeart} from "react-icons/fa6";
import {MdOutlineSelfImprovement} from "react-icons/md";
import {IoBookOutline} from "react-icons/io5";
import {RiMentalHealthLine} from "react-icons/ri";

const featureCards = [
    {
        title: "Mood Tracking",
        desc: "Track emotional patterns, identify triggers, and build healthier daily responses.",
        to: "/dashboard/profile",
        icon: RiMentalHealthLine,
    },
    {
        title: "Reflective Journaling",
        desc: "Capture your thoughts with guided prompts and turn stress into clarity.",
        to: "/journals",
        icon: IoBookOutline,
    },
    {
        title: "Breathing & Calm",
        desc: "Practice quick science-backed breathing routines to reset your nervous system.",
        to: "/breathing-exercises",
        icon: MdOutlineSelfImprovement,
    },
    {
        title: "Supportive Companion",
        desc: "Talk to a gentle AI companion whenever you need a private, judgment-free check-in.",
        to: "/chat-with-bot",
        icon: FaRegHeart,
    },
];

const processSteps = [
    {
        title: "Check In",
        desc: "Start with your current emotional state and acknowledge how you feel.",
    },
    {
        title: "Process",
        desc: "Use prompts, exercises, and meditations to reduce overwhelm.",
    },
    {
        title: "Grow",
        desc: "Build long-term habits with data-driven self-awareness and consistency.",
    },
];

const Home = () => {
    const {user} = useUserContext();

    return (
        <div className="container py-10 md:py-14">
            <motion.section
                whileInView={{opacity: [0, 1], y: [24, 0]}}
                transition={{duration: 0.55}}
                className="section-block relative overflow-hidden p-6 md:p-10">
                <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="absolute -bottom-24 left-16 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />

                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-200">
                    Your Daily Mental Wellness Hub
                </p>
                <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-6xl">
                    Build a calmer mind, one <span>intentional day</span> at a
                    time.
                </h1>
                <p className="desc mt-5 max-w-3xl text-base md:text-lg">
                    Welcome back, {user?.name || "friend"}. This space helps
                    you track emotions, reflect through journaling, and practice
                    mindful routines that actually stick.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        to="/dashboard/profile"
                        className="btn-primary inline-flex items-center gap-2">
                        Open Dashboard <FaArrowRightLong />
                    </Link>
                    <Link
                        to="/chat-with-bot"
                        className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10">
                        Talk To Companion
                    </Link>
                </div>
            </motion.section>

            <section className="mt-12">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                            Everything You Need In One Flow
                        </h2>
                        <p className="mt-2 text-sm text-slate-300 md:text-base">
                            Consistent design, focused actions, and emotionally
                            supportive tools.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {featureCards.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                whileInView={{opacity: [0, 1], y: [22, 0]}}
                                transition={{duration: 0.45, delay: index * 0.08}}
                                className="glass-card flex flex-col p-5">
                                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl text-sky-200">
                                    <Icon />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                    {item.desc}
                                </p>
                                <Link
                                    to={item.to}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 hover:text-white">
                                    Explore <FaArrowRightLong size={13} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-3">
                {processSteps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.45, delay: index * 0.1}}
                        className="glass-card p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                            Step {index + 1}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                            {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </section>

            <motion.section
                whileInView={{opacity: [0, 1], y: [16, 0]}}
                transition={{duration: 0.5}}
                className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-sky-500/20 via-blue-500/10 to-emerald-400/20 p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                            Ready for your next mindful action?
                        </h2>
                        <p className="mt-2 text-sm text-slate-200 md:text-base">
                            Continue your progress with one focused session right now.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/meditations" className="btn-primary">
                            Start Meditation
                        </Link>
                        <Link
                            to="/dashboard/add-journal"
                            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
                            Write Journal
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
