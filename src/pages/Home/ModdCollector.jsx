import React, {useEffect, useState} from "react";
import {
    BsCalendar3,
    BsEmojiAngry,
    BsEmojiLaughing,
    BsEmojiNeutral,
    BsEmojiSunglasses,
} from "react-icons/bs";
import {HiOutlineEmojiSad} from "react-icons/hi";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";
import {remainingTimeUntilEnable} from "../../utils/remainingTimeUntilEnable";
import {isDisableButton} from "../../utils/isDisableButton";
import {findMood} from "../../utils/findMood";
import Emotions from "../../components/Emotions/Emotions";
import {motion} from "framer-motion";

const today = new Date();
const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const year = today.getFullYear();
const month = monthNames[today.getMonth()];
const day = today.getDate();
const formattedDate = `${month} ${day}, ${year}`;

const MoodCollector = () => {
    const {user} = useUserContext();
    const [allMoods, setAllMoods] = useState("");
    const [mood, setMood] = useState("");

    const [anxious, setAnxious] = useState([]);
    const [stressed, setStressed] = useState([]);
    const [happy, setHappy] = useState([]);
    const [angry, setAngry] = useState([]);
    const [sad, setSad] = useState([]);

    const [lastOne, setLastOne] = useState({});
    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const remaining = remainingTimeUntilEnable(lastOne?.createdAt);
            setRemainingTime(remaining);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [lastOne]);

    useEffect(() => {
        if (user) {
            fetch(`${config.base_url}/mood/${user._id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setAllMoods(data?.data));
        }
    }, []);

    useEffect(() => {
        if (user) {
            fetch(`${config.base_url}/mood/get-last/${user._id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setLastOne(data?.data));
        }
    }, []);

    useEffect(() => {
        setAnxious(findMood(allMoods, "Anxious"));
        setStressed(findMood(allMoods, "Stressed"));
        setHappy(findMood(allMoods, "Happy"));
        setAngry(findMood(allMoods, "Angry"));
        setAnxious(findMood(allMoods, "Anxious"));
        setSad(findMood(allMoods, "Sad"));
    }, [allMoods]);

    const handleSubmit = () => {
        if (!mood) {
            return toast.error("Please select a mood.");
        }

        const moodInfo = {
            userId: user?._id,
            mood,
        };

        fetch(`${config.base_url}/mood`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(moodInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMood("");
                    setAllMoods([...allMoods, data?.data]);
                    setLastOne(data?.data);
                    toast.success(data.message);
                }
            });

        setMood("");
    };

    return (
        <section className="container py-16">
            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [18, 0]}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="section-block relative p-6 md:p-8 text-center md:text-left">
                    <p className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                        <BsCalendar3 size={14} /> {formattedDate}
                    </p>

                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        How are you feeling today?
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                        Pick your current mood once every 24 hours.
                    </p>

                    <div className="mt-5 flex justify-center md:justify-start">
                        <div className="flex items-center">
                            <BsEmojiLaughing
                                size={30}
                                className="-mr-1 rounded-full bg-yellow-300 p-1 text-slate-700"
                            />
                            <BsEmojiAngry
                                size={30}
                                className="-mr-1 rounded-full bg-rose-300 p-1 text-slate-700"
                            />
                            <HiOutlineEmojiSad
                                size={37}
                                className="-mr-1 rounded-full bg-white/20 p-1"
                            />
                            <BsEmojiNeutral
                                size={30}
                                className="-mr-1 rounded-full bg-sky-300 p-1 text-slate-700"
                            />
                            <BsEmojiSunglasses
                                size={30}
                                className="rounded-full bg-emerald-300 p-1 text-slate-700"
                            />
                        </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <select
                            id="level"
                            onChange={(e) => setMood(e.target.value)}
                            value={mood}
                            name="level"
                            className="w-full rounded-xl px-4 py-2">
                            <option value="" disabled>
                                How's your vibe today?
                            </option>
                            <option value="Anxious">Anxious</option>
                            <option value="Stressed">Stressed</option>
                            <option value="Happy">Happy</option>
                            <option value="Angry">Angry</option>
                            <option value="Sad">Sad</option>
                        </select>

                        <button
                            type="button"
                            disabled={isDisableButton(lastOne?.createdAt)}
                            onClick={handleSubmit}
                            className="btn-primary min-w-[140px]">
                            Submit Mood
                        </button>
                    </div>

                    {remainingTime?.seconds > 0 && (
                        <p className="mt-3 text-xs text-amber-200">
                            Already submitted. Please wait {remainingTime?.hours}:
                            {remainingTime?.minutes}:{String(
                                remainingTime?.seconds
                            ).padStart(2, "0")}
                        </p>
                    )}
                </motion.div>

                <Emotions
                    stressed={stressed}
                    anxious={anxious}
                    happy={happy}
                    angry={angry}
                    sad={sad}
                />
            </div>
        </section>
    );
};

export default MoodCollector;
