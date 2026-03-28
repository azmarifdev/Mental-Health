import React from "react";
import {motion} from "framer-motion";
import {FaCircleCheck} from "react-icons/fa6";

const foundations = [
    {
        title: "What is Meditation?",
        desc: "Meditation is focused awareness training that helps you observe thoughts without being controlled by them.",
    },
    {
        title: "Why It Helps",
        desc: "Regular practice supports emotional balance, reduces stress reactivity, and improves concentration.",
    },
    {
        title: "Best Time To Practice",
        desc: "Morning is ideal, but the best time is any time you can be consistent for at least 5–10 minutes.",
    },
];

const steps = [
    "Find a quiet space and set a short timer.",
    "Sit comfortably with relaxed posture.",
    "Focus on your breath in and out.",
    "When distracted, gently come back to breathing.",
    "Close by noticing how your body and mind feel.",
];

const styles = [
    {
        title: "Breath Awareness",
        desc: "Observe each inhale and exhale to anchor the mind.",
        link: "https://www.youtube.com/embed/YFSc7Ck0Ao0?si=bwNT1rdbd5cbzEpA",
    },
    {
        title: "Body Scan",
        desc: "Move attention across body areas and release tension.",
        link: "https://www.youtube.com/embed/0zrOqOKUbx0?si=rRaAKX2OAUGR3HRw",
    },
    {
        title: "Loving-Kindness",
        desc: "Generate compassion for yourself and others.",
        link: "https://www.youtube.com/embed/TdSgBB1dqNk?si=LwRukSY9hTnm75Mr",
    },
    {
        title: "Walking Meditation",
        desc: "Practice mindfulness through gentle, intentional movement.",
        link: "https://www.youtube.com/embed/aCwEwz1xU2M?si=iMYzKqQ39-Q9KyAo",
    },
];

const Meditations = () => {
    return (
        <div className="container py-10 md:py-14 text-slate-100">
            <motion.section
                whileInView={{opacity: [0, 1], y: [18, 0]}}
                transition={{duration: 0.5}}
                className="section-block p-6 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Meditation Guide
                </p>
                <h1 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
                    Build calm attention and deeper <span>inner stability</span>
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                    Meditation is not about forcing your mind to be blank. It's
                    a repeatable skill: notice, return, and respond with
                    awareness. Use this page as your practical guide.
                </p>
            </motion.section>

            <section className="mt-10 grid gap-6 md:grid-cols-3">
                {foundations.map((item, index) => (
                    <motion.article
                        key={item.title}
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.45, delay: index * 0.08}}
                        className="glass-card p-5">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {item.desc}
                        </p>
                    </motion.article>
                ))}
            </section>

            <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <div className="glass-card p-6">
                    <h2 className="text-2xl font-bold text-white">How to start in 5 steps</h2>
                    <ul className="mt-4 space-y-3">
                        {steps.map((step, i) => (
                            <li
                                key={step}
                                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                                <span className="mt-0.5 text-emerald-300">
                                    <FaCircleCheck />
                                </span>
                                <span>
                                    <b className="mr-1 text-white">Step {i + 1}:</b>
                                    {step}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass-card p-6">
                    <h2 className="text-2xl font-bold text-white">Daily consistency tip</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        Start with just 5 minutes at the same time daily. Pair it
                        with an existing habit (after waking up, after tea, or
                        before bed). Consistency matters more than duration.
                    </p>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Guided video practices
                </h2>
                <p className="mt-2 text-sm text-slate-300 md:text-base">
                    Pick one style and practice for a week before switching.
                </p>

                <div className="mt-6 space-y-6">
                    {styles.map((item, index) => (
                        <motion.article
                            key={item.title}
                            whileInView={{opacity: [0, 1], y: [16, 0]}}
                            transition={{duration: 0.45, delay: index * 0.06}}
                            className="glass-card overflow-hidden p-4 md:p-6">
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                                <iframe
                                    className="h-[220px] w-full md:h-[420px]"
                                    src={item.link}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Meditations;
