import React from "react";
import Container from "../../utils/Container";
import {useNavigate, useParams} from "react-router-dom";
import Heading from "../../utils/Heading";
import {motion} from "framer-motion";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

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
        const step7 = [{title: form.step71.value}];
        const step8 = [{title: form.step81.value}];

        const data = {
            mood: mood,
            userId: user?._id,
            stepFirst: [
                {title: values["step1"][0].title},
                {title: values["step1"][1].title},
                {title: values["step1"][2].title},
            ],
            stepSecond: [
                {title: values["step2"][0].title},
                {title: values["step2"][1].title},
                {title: values["step2"][2].title},
            ],
            stepThird: [
                {title: values["step3"][0].title},
                {title: values["step3"][1].title},
                {title: values["step3"][2].title},
            ],
            stepFourth: [
                {title: values["step4"][0].title},
                {title: values["step4"][1].title},
                {title: values["step4"][2].title},
            ],
            stepFifth: [
                {title: values["step5"][0].title},
                {title: values["step5"][1].title},
                {title: values["step5"][2].title},
            ],
            stepSixth: [
                {title: values["step6"][0].title},
                {title: values["step6"][1].title},
                {title: values["step6"][2].title},
            ],
            stepSeventh: step7,
            stepEighth: step8,
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
            .then((data) => {
                if (data.success) {
                    toast.success("Successfully submitted your mood!");
                    form.reset();
                    navigate("/dashboard/my-write-mood");
                } else {
                    console.log(data);
                    return toast.error("Something went wrong");
                }
            });
    };

    return (
        <Container>
            <div className="text-gray-300 ">
                <div>
                    <Heading
                        title={`Write down it why you are felling ${mood}?`}
                        clases={"capitalize"}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.1}}
                        className=" text-lg mb-4 pt-6">
                        <h3 className="font-semibold text-gray-200">
                            1. I am feeling {mood.toLocaleLowerCase()} because.
                        </h3>
                        <p>
                            List specific reasons, situations, or thoughts that
                            are contributing to your stress. Be honest and
                            detailed about what's on your mind.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step11"
                                    name="step11"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step11"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step12"
                                    name="step12"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step12"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    2.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step13"
                                    name="step13"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step13"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    3.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.2}}>
                        <h3 className="font-semibold text-gray-200">
                            2. How these stressors are affecting me:
                        </h3>
                        <p>
                            Describe the impact of each stressor on your
                            emotions, physical sensations, and overall
                            well-being.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step21"
                                    name="step21"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step21"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step22"
                                    name="step22"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step22"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    2.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step23"
                                    name="step23"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step23"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    3.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.3}}>
                        <h3 className="font-semibold text-gray-200">
                            3. My emotions right now:
                        </h3>
                        <p>
                            Use words to express your emotions. Are you feeling
                            anxious, overwhelmed, frustrated, or a mix of
                            emotions?
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step31"
                                    name="step31"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step31"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step32"
                                    name="step32"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step32"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    2.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step33"
                                    name="step33"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step33"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    3.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.3}}>
                        <h3 className="font-semibold text-gray-200">
                            4. How these stressors are affecting me:
                        </h3>
                        <p>
                            Identify any positive aspects of your situation or
                            potential coping strategies that may help you
                            navigate these stressors.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step41"
                                    name="step41"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step41"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step42"
                                    name="step42"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step42"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    2.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step43"
                                    name="step43"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step43"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    3.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.4}}>
                        <h3 className="font-semibold text-gray-200">
                            5. Actions I can take to alleviate stress:
                        </h3>
                        <p>
                            List practical steps or actions you can take to
                            address each stressor and improve your overall
                            well-being.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step51"
                                    name="step51"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step51"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step52"
                                    name="step52"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step52"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    2.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step53"
                                    name="step53"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step53"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    3.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.5}}>
                        <h3 className="font-semibold text-gray-200">
                            6. Affirmations for self-compassion:
                        </h3>
                        <p>
                            Write down positive affirmations to encourage
                            self-compassion and self-kindness.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step61"
                                    name="step61"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step61"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step62"
                                    name="step62"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step62"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    2.
                                </label>
                            </div>
                            <div className="relative mt-3">
                                <input
                                    id="step63"
                                    name="step63"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step63"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    3.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.6}}>
                        <h3 className="font-semibold text-gray-200">
                            7. Gratitude:
                        </h3>
                        <p>
                            Reflect on at least one thing you are grateful for,
                            even in the midst of stress.
                        </p>
                        <div className="grid gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step71"
                                    name="step71"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step71"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className=" text-lg mb-4"
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.7}}>
                        <h3 className="font-semibold text-gray-200">
                            8. Closing Thoughts::
                        </h3>
                        <p>
                            Summarize your feelings, express any hopes or
                            intentions for the future, and acknowledge that it's
                            okay to experience stress.
                        </p>
                        <div className="grid gap-10">
                            <div className="relative mt-3">
                                <input
                                    id="step81"
                                    name="step81"
                                    type="text"
                                    className="peer placeholder-transparent bg-secondary h-10 w-full border-b-2  border-gray-600 text-gray-200 focus:outline-none placeholder:text-gray-400 pl-4 "
                                    placeholder="Write here..."
                                    required
                                />
                                <label
                                    htmlFor="step81"
                                    className="absolute left-0 -top-3.5  text-gray-200 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200  peer-focus:text-lg">
                                    1.
                                </label>
                            </div>
                        </div>
                    </motion.div>
                    <div>
                        <button
                            type="submit"
                            className="btn-primary px-8 py-2 text-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default MoodReason;
