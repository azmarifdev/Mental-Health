import Banner from "./Banner";
import BreathingExercise from "./BreathingExercise";
import MoodCollector from "./ModdCollector";
import MoodsGuide from "./MoodsGuide";
import Support from "./Support";

const Home = () => {
    return (
        <div>
            <Banner />
            <MoodCollector />
            <MoodsGuide />
            <BreathingExercise />
            <Support />
        </div>
    );
};

export default Home;
