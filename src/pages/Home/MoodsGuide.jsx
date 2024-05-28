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
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Container>
            <div className="">
                <Heading clases={""} title={"heading coming"} />
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                {data?.map((dt, i) => (
                    <motion.div
                        key={i}
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.5, delay: dt.delay}}
                        className="flex flex-col justify-center items-center text-center bg-primary border border-gray-700 shadow-sm rounded-lg group">
                        <div className="p-4 md:p-5 ">
                            <div className="h-14  m-auto w-14">
                                <img
                                    className="group-hover:scale-125 h-full w-full rounded-full duration-300"
                                    src={dt.image}
                                    alt=""
                                />
                            </div>
                            <p className="text-gray-200 text-base mt-2">
                                If you're feeling{" "}
                                <b className="font-semibold">{dt.mood}?</b>
                            </p>
                            <Link
                                to={`/feeling/${dt.mood.toLowerCase()}`}
                                className="mt-2 inline-flex items-center text-gray-200 gap-x-1 text-base font-semibold rounded-lg ">
                                <span> Read more</span>
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default MoodsGuide;
