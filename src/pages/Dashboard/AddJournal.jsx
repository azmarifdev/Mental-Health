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
        <div>
            <form
                onSubmit={handleSubmit}
                className=" md:p-10 w-full bg-primary rounded-md text-gray-200 shadow-lg mt-7 p-4">
                <div>
                    <div>
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="heading"
                                className="block mb-2 text-xl">
                                Journal heading
                            </label>
                        </div>
                        <div className="relative text-lg">
                            <select
                                id="heading"
                                name="heading"
                                className="py-2 px-4 block border bg-secondary dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md focus:outline-none"
                                value={heading}
                                onChange={(event) =>
                                    setHeading(event.target.value)
                                }>
                                <option value="" selected disabled>
                                    Select a journal heading...
                                </option>
                                {headings?.map((heading, index) => (
                                    <option key={index} value={heading}>
                                        {heading}
                                    </option>
                                ))}
                            </select>
                            <div className="pt-4">
                                {heading == "Gratitude Journaling" && (
                                    <li className="mt-2 ">
                                        Write down three things you are grateful
                                        for each day. Focusing on positive
                                        aspects of your life can shift your
                                        mindset and enhance feelings of
                                        well-being.
                                    </li>
                                )}
                                {heading == "Emotional Expression" && (
                                    <li className="mt-2 ">
                                        Use your journal to express your
                                        emotions freely. Write about how you're
                                        feeling, and don't hold back. This can
                                        be a cathartic release and help you gain
                                        clarity on your emotions.
                                    </li>
                                )}
                                {heading === "Daily Reflection" && (
                                    <li>
                                        Reflect on your day, noting significant
                                        events, accomplishments, or challenges.
                                        Consider how you responded to different
                                        situations and what you learned.
                                    </li>
                                )}
                                {heading === "Goal Setting" && (
                                    <li>
                                        Set short-term and long-term goals for
                                        yourself. Write down the steps you can
                                        take to achieve these goals. Tracking
                                        progress can provide a sense of
                                        accomplishment.
                                    </li>
                                )}
                                {heading === "Mindfulness Journaling" && (
                                    <li>
                                        Practice mindfulness by describing your
                                        sensory experiences in detail. Write
                                        about what you see, hear, smell, taste,
                                        and touch in the present moment.
                                    </li>
                                )}
                                {heading === "Problem-Solving Journal" && (
                                    <li>
                                        If you're facing challenges, use your
                                        journal to brainstorm solutions. Write
                                        down possible strategies, evaluate their
                                        pros and cons, and plan your next steps.
                                    </li>
                                )}
                                {heading === "Self-Compassion Writing" && (
                                    <li>
                                        Practice self-compassion by writing
                                        comforting and supportive messages to
                                        yourself. Treat yourself with the same
                                        kindness you would offer a friend facing
                                        difficulties.
                                    </li>
                                )}
                                {heading ===
                                    "Letters to Your Future/Younger Self" && (
                                    <li>
                                        Write letters to your future self or to
                                        a younger version of yourself. Share
                                        advice, encouragement, and reflections
                                        on your journey.
                                    </li>
                                )}
                                {heading ===
                                    "Stream of Consciousness Writing" && (
                                    <li>
                                        Set a timer and write without stopping
                                        or censoring yourself. Let your thoughts
                                        flow freely onto the paper. This can
                                        help release pent-up emotions and
                                        thoughts.
                                    </li>
                                )}
                                {heading === "Art Journaling" && (
                                    <li>
                                        Combine words with visual elements. Use
                                        drawings, doodles, or collage along with
                                        your written thoughts to express
                                        yourself creatively.
                                    </li>
                                )}
                                {heading === "Quotes and Affirmations" && (
                                    <li>
                                        Collect quotes and affirmations that
                                        resonate with you. Reflect on their
                                        meanings and how they apply to your
                                        life.
                                    </li>
                                )}
                                {heading === "Positive Memories Journal" && (
                                    <li>
                                        Record positive memories or moments that
                                        brought you joy. When you're feeling
                                        down, revisit these entries to boost
                                        your mood.
                                    </li>
                                )}
                                {heading === "Tracking Mood and Triggers" && (
                                    <li>
                                        Keep track of your mood throughout the
                                        day and identify any patterns or
                                        triggers. Understanding your emotional
                                        landscape can be helpful for
                                        self-awareness.
                                    </li>
                                )}
                                {heading === "Daily Affirmations" && (
                                    <li>
                                        Write positive affirmations that reflect
                                        your strengths, values, and goals.
                                        Repeat them regularly to reinforce a
                                        positive mindset.
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label
                                htmlFor="desc"
                                className="block  mb-2 text-lg mt-4">
                                Desceiption
                            </label>
                        </div>
                        <div className="relative">
                            <textarea
                                type="text"
                                id="desc"
                                name="desc"
                                rows={5}
                                className="py-2 px-4 block border bg-secondary  border-gray-700 w-full rounded-md focus:outline-none "
                                placeholder="Descriptions..."
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-end mt-5">
                    <button type="submit" className="btn-primary ">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJournal;
