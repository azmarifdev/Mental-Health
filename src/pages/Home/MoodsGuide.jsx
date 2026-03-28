/* eslint-disable react/no-unescaped-entities */
import {useEffect, useState} from "react";
import Container from "../../utils/Container";
import Heading from "../../utils/Heading";
import {motion} from "framer-motion";
import Loading from "../../utils/Loading";
import {Link} from "react-router-dom";

const MoodsGuide = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("mood.json")
            .then((res) => res.json())
            .then((items) => {
                setData(items);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Container className="py-16">
            <Heading title="Mood Insight Guide" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {data?.map((dt, i) => (
                    <motion.div
                        key={i}
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.45, delay: dt.delay}}
                        className="glass-card group overflow-hidden p-5 text-center">
                        <div className="mx-auto h-16 w-16 overflow-hidden rounded-2xl bg-white/10 p-1">
                            <img
                                className="h-full w-full rounded-xl object-cover transition duration-300 group-hover:scale-110"
                                src={dt.image}
                                alt={dt.mood}
                            />
                        </div>
                        <p className="mt-4 text-sm text-slate-200">
                            Feeling <b className="text-white">{dt.mood}</b>?
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                            Read tailored advice and quick actions.
                        </p>
                        <Link
                            to={`/feeling/${dt.mood.toLowerCase()}`}
                            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-200 hover:text-white">
                            Explore guide
                            <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default MoodsGuide;
