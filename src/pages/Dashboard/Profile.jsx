import Emotions from "../../components/Emotions/Emotions";
import Chart from "react-apexcharts";
import {useUserContext} from "../../context/AuthProvider";
import {useEffect, useState} from "react";
import {findMood} from "../../utils/findMood";
import {config} from "../../utils/envCongif";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
const Profile = () => {
    const {user} = useUserContext();
    const [allMoods, setAllMoods] = useState([]);
    const [anxious, setAnxious] = useState([]);
    const [stressed, setStressed] = useState([]);
    const [happy, setHappy] = useState([]);
    const [angry, setAngry] = useState([]);
    const [sad, setSad] = useState([]);

    const [journals, setJournals] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/journal/user/${user._id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setJournals(data.data);
            });
    }, []);

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
    console.log(allMoods?.length);

    useEffect(() => {
        setAnxious(findMood(allMoods, "Anxious"));
        setStressed(findMood(allMoods, "Stressed"));
        setHappy(findMood(allMoods, "Happy"));
        setAngry(findMood(allMoods, "Angry"));
        setAnxious(findMood(allMoods, "Anxious"));
        setSad(findMood(allMoods, "Sad"));
    }, [allMoods]);
    return (
        <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-10">
                {allMoods?.length ? (
                    <>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}
                            className="">
                            <div className="flex justify-center items-center">
                                <Chart
                                    options={{
                                        labels: [
                                            "Anxious",
                                            "Stressed",
                                            "Happy",
                                            "Angry",
                                            "Sad",
                                        ],
                                        legend: {
                                            fontSize: "16px",
                                            labels: {
                                                colors: "#f1f1f1",
                                                useSeriesColors: false,
                                            },
                                            horizontalAlign: "center",

                                            position: "bottom",
                                        },
                                        theme: {
                                            mode: "light",
                                            palette: "palette",
                                            monochrome: {
                                                enabled: false,
                                                color: "#255aee",
                                                shadeTo: "light",
                                                shadeIntensity: 0.65,
                                            },
                                        },
                                        responsive: [
                                            {
                                                breakpoint: 978,
                                                options: {
                                                    chart: {
                                                        width: 380,
                                                    },
                                                    legend: {
                                                        position: "bottom",
                                                    },
                                                },
                                            },
                                            {
                                                breakpoint: 480,
                                                options: {
                                                    chart: {
                                                        width: 300,
                                                    },
                                                    legend: {
                                                        position: "bottom",
                                                    },
                                                },
                                            },
                                        ],
                                    }}
                                    series={[
                                        anxious?.length,
                                        stressed?.length,
                                        happy?.length,
                                        angry?.length,
                                        sad?.length,
                                    ]}
                                    type="pie"
                                    width={400}
                                    height={350}
                                />
                            </div>
                        </motion.div>
                    </>
                ) : (
                    <></>
                )}

                <div>
                    <Emotions
                        stressed={stressed}
                        anxious={anxious}
                        happy={happy}
                        angry={angry}
                        sad={sad}
                    />
                </div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.5, delay: 0.4}}
                    initial={{opacity: 0}}
                    className="rounded-lg text-gray-200 flex justify-center items-center bg-primary py-14 px-4 relative mt-10">
                    <div>
                        <p className="text-center font-semibold text-2xl">
                            {journals?.length ? journals.length : 0}
                        </p>
                        <h2 className="text-xl mb-3 font-semibold">
                            Your Journals
                        </h2>
                        <Link
                            to={"/dashboard/add-journal"}
                            className="btn-primary py-2 text-lg">
                            Add journal
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
