import React from "react";
import Container from "../../utils/Container";
import {useNavigate, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

const multiStepSections = [
    {
        id: 1,
        title: "I am feeling {mood} because:",
        desc: "List specific reasons, situations, or thoughts contributing to this mood.",
    },
    {
        id: 2,
        title: "How these stressors are affecting me:",
        desc: "Describe the impact on your emotions, body, and overall well-being.",
    },
    {
        id: 3,
        title: "My emotions right now:",
        desc: "Use clear emotion words (anxious, overwhelmed, frustrated, calm, etc).",
    },
    {
        id: 4,
        title: "Positive aspects and coping opportunities:",
        desc: "Identify strengths, support systems, or coping strategies you can use.",
    },
    {
        id: 5,
        title: "Actions I can take to improve:",
        desc: "Write practical and specific steps you can take after this reflection.",
    },
    {
        id: 6,
        title: "Affirmations for self-compassion:",
        desc: "Write kind and supportive statements for yourself.",
    },
];

const singleStepSections = [
    {
        id: 7,
        title: "Gratitude:",
        desc: "Write one thing you are grateful for, even in a difficult moment.",
    },
    {
        id: 8,
        title: "Closing thoughts:",
        desc: "Summarize how you feel now and what intention you want to carry forward.",
    },
];

const MoodReason = () => {
    const {mood} = useParams();
    const navigate = useNavigate();
    const {user} = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const values = {};

        for (let i = 1; i <= 6; i++) {
            values[`step${i}`] = [];
            for (let j = 1; j <= 3; j++) {
                values[`step${i}`].push({title: form[`step${i}${j}`].value});
            }
        }

        const data = {
            mood,
            userId: user?._id,
            stepFirst: [
                {title: values.step1[0].title},
                {title: values.step1[1].title},
                {title: values.step1[2].title},
            ],
            stepSecond: [
                {title: values.step2[0].title},
                {title: values.step2[1].title},
                {title: values.step2[2].title},
            ],
            stepThird: [
                {title: values.step3[0].title},
                {title: values.step3[1].title},
                {title: values.step3[2].title},
            ],
            stepFourth: [
                {title: values.step4[0].title},
                {title: values.step4[1].title},
                {title: values.step4[2].title},
            ],
            stepFifth: [
                {title: values.step5[0].title},
                {title: values.step5[1].title},
                {title: values.step5[2].title},
            ],
            stepSixth: [
                {title: values.step6[0].title},
                {title: values.step6[1].title},
                {title: values.step6[2].title},
            ],
            stepSeventh: [{title: form.step71.value}],
            stepEighth: [{title: form.step81.value}],
        };

        fetch(`${config.base_url}/mood/write`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((resData) => {
                if (resData.success) {
                    toast.success("Successfully submitted your mood reflection.");
                    form.reset();
                    navigate("/dashboard/my-write-mood");
                } else {
                    toast.error("Something went wrong");
                }
            });
    };

    return (
        <Container className="py-4">
            <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Guided Reflection
                </p>
                <h1 className="mt-2 text-2xl font-bold text-white capitalize md:text-4xl">
                    Why are you feeling {mood}?
                </h1>
                <p className="mt-2 text-sm text-slate-300 md:text-base">
                    Complete this structured prompt to process your emotional state.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {multiStepSections.map((section, index) => (
                    <motion.section
                        key={section.id}
                        whileInView={{opacity: [0, 1], y: [0, -10]}}
                        transition={{duration: 0.4, delay: index * 0.05}}
                        className="glass-card p-5 md:p-6">
                        <h2 className="text-lg font-semibold text-white capitalize">
                            {section.id}. {section.title.replace("{mood}", mood.toLowerCase())}
                        </h2>
                        <p className="mt-1 text-sm text-slate-300">{section.desc}</p>

                        <div className="mt-4 grid gap-3 md:grid-cols-3">
                            {[1, 2, 3].map((itemNo) => (
                                <div key={itemNo}>
                                    <label
                                        htmlFor={`step${section.id}${itemNo}`}
                                        className="mb-1 block text-xs text-slate-300">
                                        Point {itemNo}
                                    </label>
                                    <input
                                        id={`step${section.id}${itemNo}`}
                                        name={`step${section.id}${itemNo}`}
                                        type="text"
                                        className="w-full rounded-xl px-4 py-2.5"
                                        placeholder="Write here..."
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.section>
                ))}

                {singleStepSections.map((section, index) => (
                    <motion.section
                        key={section.id}
                        whileInView={{opacity: [0, 1], y: [0, -10]}}
                        transition={{duration: 0.4, delay: 0.3 + index * 0.06}}
                        className="glass-card p-5 md:p-6">
                        <h2 className="text-lg font-semibold text-white">
                            {section.id}. {section.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-300">{section.desc}</p>
                        <div className="mt-3">
                            <label
                                htmlFor={`step${section.id}1`}
                                className="mb-1 block text-xs text-slate-300">
                                Your response
                            </label>
                            <input
                                id={`step${section.id}1`}
                                name={`step${section.id}1`}
                                type="text"
                                className="w-full rounded-xl px-4 py-2.5"
                                placeholder="Write here..."
                                required
                            />
                        </div>
                    </motion.section>
                ))}

                <div className="flex justify-end">
                    <button type="submit" className="btn-primary px-8 py-2.5">
                        Submit Reflection
                    </button>
                </div>
            </form>
        </Container>
    );
};

export default MoodReason;
