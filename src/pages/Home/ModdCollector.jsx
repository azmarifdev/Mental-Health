import React, {useEffect, useState} from "react";
import Container from "../../utils/Container";
import {
    BsCalendar3,
    BsEmojiLaughing,
    BsEmojiAngry,
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
        <div className="bg-primary text-gray-200">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-10 py-16 text-center">
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="relative rounded-lg flex justify-center items-center bg-secondary py-10 px-4 mt-10">
                        <div>
                            <div className="flex  items-center absolute top-4 left-4 text-sm">
                                <BsCalendar3 size={16} className="mr-2" />{" "}
                                {formattedDate}
                            </div>
                            <h2 className="text-2xl">How are feeling today?</h2>
                            <div className="flex  justify-center items-center mt-2">
                                <BsEmojiLaughing
                                    size={30}
                                    className="-mr-1 bg-purple-400 text-gray-700 rounded-full"
                                />
                                <BsEmojiAngry
                                    size={30}
                                    className="-mr-1 bg-rose-400 text-gray-700 rounded-full"
                                />
                                <HiOutlineEmojiSad
                                    size={37}
                                    className="-mr-1  rounded-full"
                                />
                                <BsEmojiNeutral
                                    size={30}
                                    className="-mr-1 bg-blue-300 text-gray-700 rounded-full"
                                />
                                <BsEmojiSunglasses
                                    size={30}
                                    className="-mr-2 bg-yellow-400 text-gray-700 rounded-full "
                                />
                            </div>
                            <div className="flex mt-4">
                                <div className="relative">
                                    <select
                                        id="level"
                                        onChange={(e) =>
                                            setMood(e.target.value)
                                        }
                                        value={mood}
                                        name="level"
                                        className="py-2 px-4 block border bg-primary border-gray-400 w-full rounded-md  focus:outline-none">
                                        <option value="" selected disabled>
                                            How's your vibe today?
                                        </option>
                                        <option value="Anxious">Anxious</option>
                                        <option value="Stressed">
                                            Stressed
                                        </option>
                                        <option value="Happy">Happy</option>
                                        <option value="Angry">Angry</option>
                                        <option value="Sad">Sad</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isDisableButton(
                                        lastOne?.createdAt
                                    )}
                                    onClick={handleSubmit}
                                    className={`btn-primary  ml-3 py-1 ${
                                        isDisableButton(lastOne?.createdAt)
                                            ? "bg-gray-400 text-slate-800"
                                            : ""
                                    }`}>
                                    Submit
                                </button>
                            </div>
                            {remainingTime?.seconds > 0 && (
                                <p className={`mt-2 `}>
                                    <span>
                                        You already submitted your vibes. Please
                                        wait {remainingTime?.hours}.
                                        {remainingTime?.minutes}.
                                        {remainingTime?.seconds}
                                    </span>
                                </p>
                            )}
                        </div>
                    </motion.div>

                    <Emotions
                        stressed={stressed}
                        anxious={anxious}
                        happy={happy}
                        angry={angry}
                        sad={sad}
                    />
                </div>
            </div>
        </div>
    );
};

export default MoodCollector;
