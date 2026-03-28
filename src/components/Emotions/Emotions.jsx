import {motion} from "framer-motion";

const emotionItems = [
    {
        key: "Anxious",
        image: "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f61f.png",
    },
    {
        key: "Stressed",
        image: "https://i.pinimg.com/originals/0e/f3/54/0ef3543f7eb319f6203a13e85e69d0a6.png",
    },
    {
        key: "Happy",
        image: "https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_1280.png",
    },
    {
        key: "Angry",
        image: "https://static-00.iconduck.com/assets.00/angry-face-emoji-2048x1974-nj42m72j.png",
    },
    {
        key: "Sad",
        image: "https://i.pinimg.com/564x/cd/18/02/cd1802ee8d12a4396ad4a1bd85a5ebbd.jpg",
    },
];

const Emotions = ({anxious, stressed, happy, angry, sad}) => {
    const values = {
        Anxious: anxious?.length || 0,
        Stressed: stressed?.length || 0,
        Happy: happy?.length || 0,
        Angry: angry?.length || 0,
        Sad: sad?.length || 0,
    };

    return (
        <motion.div
            whileInView={{opacity: [0, 1], y: [18, 0]}}
            transition={{duration: 0.5, delay: 0.2}}
            initial={{opacity: 0}}
            className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">Your Emotions</h2>
            <p className="mt-1 text-sm text-slate-300">
                A quick glance at your current emotional history.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-5">
                {emotionItems.map((item) => (
                    <div
                        key={item.key}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                        <img
                            src={item.image}
                            alt={item.key}
                            className="mx-auto h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
                        />
                        <h3 className="mt-2 text-xs font-semibold text-slate-200 md:text-sm">
                            {item.key}
                        </h3>
                        <p className="text-lg font-bold text-white">
                            {values[item.key]}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Emotions;
