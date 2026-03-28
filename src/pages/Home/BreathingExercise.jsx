import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {IoIosArrowForward} from "react-icons/io";
import Heading from "../../utils/Heading";
import BreathingDetails from "../../components/BreathingDetails/BreathingDetails";
import {Link, useLocation} from "react-router-dom";
import {FaArrowCircleRight} from "react-icons/fa";
import Loading from "../../utils/Loading";

const BreathingExercise = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const pathname = useLocation().pathname;

    useEffect(() => {
        setLoading(true);
        fetch("exercise.json")
            .then((res) => res.json())
            .then((items) => {
                setData(items);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    const list = pathname === "/breathing-exercises" ? data : data?.slice(0, 8);

    return (
        <section className="container py-16">
            <Heading title="Guided Breathing Exercises" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {list?.map((d, i) => (
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [16, 0]}}
                        transition={{duration: 0.5, delay: d.deley}}
                        initial={{opacity: 0}}
                        key={i}
                        className="glass-card flex flex-col p-5">
                        <h3 className="text-lg font-bold text-white">{d?.title}</h3>
                        <p className="mt-2 text-sm text-slate-300">
                            {d?.desc?.length > 110
                                ? `${d?.desc?.slice(0, 110)}...`
                                : d?.desc}
                        </p>
                        <button
                            onClick={() => {
                                setShowModal(true);
                                setCurrentData(d);
                            }}
                            type="button"
                            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-200 hover:text-white">
                            Read more <IoIosArrowForward size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>

            {pathname === "/" && (
                <div className="mt-8 flex justify-end">
                    <Link
                        to="/breathing-exercises"
                        className="btn-primary inline-flex items-center gap-2">
                        See all <FaArrowCircleRight size={15} />
                    </Link>
                </div>
            )}

            {showModal && (
                <BreathingDetails
                    currentData={currentData}
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            )}
        </section>
    );
};

export default BreathingExercise;
