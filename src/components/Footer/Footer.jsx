import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            whileInView={{opacity: [0, 1], y: [0, -1]}}
            transition={{duration: 1.1, delay: 0.1}}
            className="relative  pt-8 pb-6 bg-primary -mb-[20px]">
            <div className="container">
                <div className="flex flex-wrap text-left md:text-left">
                    <div className="w-full md:w-6/12 ">
                        <h1 className="text-3xl text-gray-200">
                            <big className="text-5xl text-pink-500"> M</big>
                            ental health
                        </h1>
                        <h5 className="text-lg mt-0 mb-2 text-gray-200">
                            Connect with us on these platforms, and expect a
                            response within 1-2 days.
                        </h5>
                        <div className="mt-4 md:mb-0 mb-6">
                            <button
                                className="bg-primary inline-flex text-blue-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <MdFacebook size={24} />
                            </button>

                            <button
                                className="bg-primary inline-flex text-rose-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <FaInstagram size={24} />
                            </button>

                            <button
                                className="bg-primary inline-flex text-purple-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <FaTwitter size={24} />
                            </button>

                            <button
                                className="bg-primary inline-flex text-green-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <FaLinkedin size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 ">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-4/12 md:px-4 ml-auto">
                                <p className="text-dark  font-semibold mb-2">
                                    Useful Links
                                </p>
                                <ul className="list-unstyled text-gray-200">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/breathing-exercises"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            Breathing exercise
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/journals"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            Journaling
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-4/12 md:px-4 md:mt-0 mt-4">
                                <p className="text-dark  font-semibold mb-2">
                                    Other Resources
                                </p>
                                <ul className="list-unstyled text-gray-200">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/chat-with-bot"}
                                            className=" hover:text-gray-400 duration-300 f pb-2 ">
                                            Chat with Bot
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mb-3 border-gray-700 md:mx-4"></div>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 mx-auto text-center">
                        <div className="text-sm  font-medium text-gray-300">
                            Copyright © 2024 by Mentel Health and Wellbeing.
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
