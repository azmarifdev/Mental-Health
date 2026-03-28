import React, {useState} from "react";
import toast from "react-hot-toast";
import {config} from "../../utils/envCongif";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/AuthProvider";

const headings = [
    "Gratitude Journaling",
    "Emotional Expression",
    "Daily Reflection",
    "Goal Setting",
    "Mindfulness Journaling",
    "Problem-Solving Journal",
    "Self-Compassion Writing",
    "Letters to Your Future/Younger Self",
    "Stream of Consciousness Writing",
    "Art Journaling",
    "Quotes and Affirmations",
    "Positive Memories Journal",
    "Tracking Mood and Triggers",
    "Daily Affirmations",
];

const AddJournal = () => {
    const [heading, setHeading] = useState("");
    const {user} = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user: user?._id,
            title: heading,
            desc: e.target.desc.value,
        };
        if (!heading || !data.desc)
            return toast.error(
                "Please select a heading and write a description"
            );

        fetch(`${config.base_url}/journal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success(data.message);
                    navigate("/dashboard/journaling");
                } else {
                    toast.error(data.errorMessage[0].message);
                }
            });
    };

    return (
        <div className="py-2">
            <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Create Entry
                </p>
                <h1 className="mt-2 text-2xl font-bold text-white md:text-4xl">
                    Add A New Journal
                </h1>
                <p className="mt-2 text-sm text-slate-300">
                    Choose a guided theme and write your thoughts with clarity.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card w-full p-5 md:p-8">
                <div>
                    <label htmlFor="heading" className="mb-2 block text-sm text-slate-200">
                        Journal Heading
                    </label>
                    <select
                        id="heading"
                        name="heading"
                        className="w-full rounded-xl px-4 py-2.5"
                        value={heading}
                        onChange={(event) => setHeading(event.target.value)}>
                        <option value="" disabled>
                            Select a journal heading...
                        </option>
                        {headings?.map((headingItem, index) => (
                            <option key={index} value={headingItem}>
                                {headingItem}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                    {heading == "Gratitude Journaling" && (
                        <p>
                            Write down three things you are grateful for each day.
                            Focusing on positive aspects can shift your mindset.
                        </p>
                    )}
                    {heading == "Emotional Expression" && (
                        <p>
                            Express your emotions freely. Honest writing often
                            creates clarity and emotional release.
                        </p>
                    )}
                    {heading === "Daily Reflection" && (
                        <p>
                            Reflect on key moments of your day and what you learned
                            from each experience.
                        </p>
                    )}
                    {heading === "Goal Setting" && (
                        <p>
                            Define short and long-term goals and list practical
                            steps for progress.
                        </p>
                    )}
                    {heading === "Mindfulness Journaling" && (
                        <p>
                            Describe what you notice in the present moment through
                            your senses.
                        </p>
                    )}
                    {heading === "Problem-Solving Journal" && (
                        <p>
                            Break a challenge into options, weigh pros and cons,
                            and plan your next action.
                        </p>
                    )}
                    {heading === "Self-Compassion Writing" && (
                        <p>
                            Write to yourself with kindness and support, as you
                            would for a close friend.
                        </p>
                    )}
                    {heading === "Letters to Your Future/Younger Self" && (
                        <p>
                            Write a thoughtful letter sharing advice, reflections,
                            and encouragement.
                        </p>
                    )}
                    {heading === "Stream of Consciousness Writing" && (
                        <p>
                            Write continuously for a few minutes without editing
                            yourself.
                        </p>
                    )}
                    {heading === "Art Journaling" && (
                        <p>
                            Mix creative expression and writing to capture your
                            emotional state.
                        </p>
                    )}
                    {heading === "Quotes and Affirmations" && (
                        <p>
                            Collect uplifting quotes and affirmations and reflect
                            on their meaning.
                        </p>
                    )}
                    {heading === "Positive Memories Journal" && (
                        <p>
                            Record joyful moments you can revisit whenever your
                            mood feels low.
                        </p>
                    )}
                    {heading === "Tracking Mood and Triggers" && (
                        <p>
                            Track emotional shifts and identify patterns to improve
                            self-awareness.
                        </p>
                    )}
                    {heading === "Daily Affirmations" && (
                        <p>
                            Write affirmations aligned with your strengths and
                            growth goals.
                        </p>
                    )}
                    {!heading && (
                        <p>
                            Pick a heading to see a quick writing suggestion for
                            this entry.
                        </p>
                    )}
                </div>

                <div className="mt-5">
                    <label htmlFor="desc" className="mb-2 block text-sm text-slate-200">
                        Description
                    </label>
                    <textarea
                        id="desc"
                        name="desc"
                        rows={7}
                        className="w-full rounded-xl px-4 py-3"
                        placeholder="Write your journal entry..."
                    />
                </div>

                <div className="mt-6 flex justify-end">
                    <button type="submit" className="btn-primary">
                        Save Journal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJournal;
