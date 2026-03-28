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
            <div className="grid gap-8 md:grid-cols-2">
                {allMoods?.length ? (
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [0, -16]}}
                        transition={{duration: 0.45, delay: 0.2}}
                        initial={{opacity: 0}}
                        className="glass-card p-3 md:p-5">
                        <div className="flex items-center justify-center">
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
                                        fontSize: "14px",
                                        labels: {
                                            colors: "#E8EEFC",
                                            useSeriesColors: false,
                                        },
                                        horizontalAlign: "center",
                                        position: "bottom",
                                    },
                                    theme: {
                                        mode: "dark",
                                    },
                                    chart: {
                                        toolbar: { show: false },
                                        background: "transparent",
                                    },
                                    dataLabels: {
                                        enabled: true,
                                        style: {
                                            colors: ["#0B1426"],
                                        },
                                    },
                                    colors: [
                                        "#7DD3FC",
                                        "#93C5FD",
                                        "#86EFAC",
                                        "#FCA5A5",
                                        "#C4B5FD",
                                    ],
                                    responsive: [
                                        {
                                            breakpoint: 978,
                                            options: {
                                                chart: {
                                                    width: 360,
                                                },
                                            },
                                        },
                                        {
                                            breakpoint: 480,
                                            options: {
                                                chart: {
                                                    width: 280,
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
                ) : null}

                <Emotions
                    stressed={stressed}
                    anxious={anxious}
                    happy={happy}
                    angry={angry}
                    sad={sad}
                />

                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -16]}}
                    transition={{duration: 0.45, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="glass-card relative mt-1 flex items-center justify-center px-4 py-12 text-gray-200 md:col-span-2">
                    <div className="text-center">
                        <p className="text-4xl font-extrabold text-white">
                            {journals?.length ? journals.length : 0}
                        </p>
                        <h2 className="mb-4 mt-2 text-lg font-semibold text-slate-200">
                            Journals In Your Collection
                        </h2>
                        <Link
                            to={"/dashboard/add-journal"}
                            className="btn-primary py-2 text-base">
                            Add Journal
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
