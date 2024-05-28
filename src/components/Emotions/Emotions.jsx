import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
const Emotions = ({anxious, stressed, happy, angry, sad}) => {
    const path = useLocation().pathname;
    return (
        <motion.div
            whileInView={{opacity: [0, 1], y: [0, -20]}}
            transition={{duration: 0.5, delay: 0.4}}
            initial={{opacity: 0}}
            className={`relative rounded-lg text-gray-200 flex justify-center items-center mt-10  py-10 px-4 ${
                path == "/" ? "bg-secondary" : "bg-primary"
            }`}>
            <div>
                <h2 className="text-2xl mb-3">Your Emotions</h2>
                <div className="flex  md:space-x-2">
                    <div className="">
                        <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                            <img
                                src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f61f.png"
                                alt=""
                                className="md:h-[62px] md:w-[62px] h-10 w-10 rounded-full "
                            />
                            <h3 className="">Anxious</h3>
                            <p>
                                <b>{anxious?.length ? anxious?.length : 0}</b>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                            <img
                                src="https://i.pinimg.com/originals/0e/f3/54/0ef3543f7eb319f6203a13e85e69d0a6.png"
                                alt=""
                                className="md:h-[57px] md:w-[57px] h-9 w-9 rounded-full "
                            />
                            <h3 className="">Stressed</h3>
                            <p>
                                <b>{stressed?.length ? stressed?.length : 0}</b>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_1280.png"
                                alt=""
                                className="md:h-[68px] md:w-[68px] h-11 w-11 rounded-full "
                            />
                            <h3 className="">Happy</h3>
                            <p>
                                <b>{happy?.length ? happy?.length : 0}</b>
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                            <img
                                src="https://static-00.iconduck.com/assets.00/angry-face-emoji-2048x1974-nj42m72j.png"
                                alt=""
                                className="md:h-[55px] md:w-[55px] h-9 w-9 rounded-full "
                            />
                            <h3 className="">Angry</h3>
                            <p>
                                <b>{angry?.length ? angry?.length : 0}</b>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                            <img
                                src="https://i.pinimg.com/564x/cd/18/02/cd1802ee8d12a4396ad4a1bd85a5ebbd.jpg"
                                alt=""
                                className="md:h-16 md:w-16 h-10 w-10 rounded-full "
                            />
                            <h3 className="">Sad</h3>
                            <p>
                                <b>{sad?.length ? sad?.length : 0}</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Emotions;
