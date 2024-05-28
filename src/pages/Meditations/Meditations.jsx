import React from "react";
import Heading from "../../utils/Heading";
import {motion} from "framer-motion";

const Meditations = () => {
    return (
        <div className="container text-gray-200 ">
            <div className="my-14 md:w-[80%]  mx-auto">
                <div className="text-center mt-20 ">
                    <Heading title={"How to meditate"} />
                </div>
                <div>
                    <motion.p
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.5, delay: 0.4}}
                        initial={{opacity: 0}}
                        className="text-lg font-semibold text-center">
                        <big className="text-3xl text-pink-500"> W</big>hen we
                        meditate, we inject far-reaching and long-lasting
                        benefits into our lives: We lower our stress levels, we
                        get to know our pain, we connect better, we improve our
                        focus, and we're kinder to ourselves. Let us walk you
                        through the basics in our new mindful guide on how to
                        meditate.
                    </motion.p>
                    <motion.nav
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.5, delay: 0.4}}
                        initial={{opacity: 0}}
                        className="md:w-[60%] mx-auto my-10 ">
                        <div className="md:text-xl text-lg md:flex md:space-y-0 space-y-3 text-center">
                            <a
                                href="#sec1"
                                scroll-behavior="smooth"
                                className=" border-t-[7px] px-2 pt-1 hover:text-blue-500 duration-300 border-blue-500">
                                What is Meditation?
                            </a>
                            <a
                                href="#sec2"
                                className=" border-t-[7px] px-2 pt-1 hover:text-pink-500 duration-300 border-pink-500">
                                How to Meditate?
                            </a>
                            <a
                                href="#sec3"
                                className=" border-t-[7px] px-2 pt-1 hover:text-cyan-500 duration-300 ">
                                Inner peace advice and hacks
                            </a>
                            <a
                                href="#sec4"
                                className=" border-t-[7px] px-2 pt-1 hover:text-green-500 duration-300 border-green-500">
                                Forming a Habitual of Mindfulness
                            </a>
                            <a
                                href="#sec5"
                                className=" border-t-[7px] px-2 pt-1 hover:text-red-500 duration-300 border-red-600">
                                Core Meditation Approaches
                            </a>
                        </div>
                    </motion.nav>
                    <section className="text-lg" id="sec1">
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}>
                            <h3 className="font-semibold md:text-3xl text-xl mb-4">
                                <span>What is Meditation?</span>
                            </h3>
                            <motion.p
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}>
                                <big className="text-3xl text-pink-500"> M</big>
                                editation is a practice of mindfulness, or
                                focusing the mind on a particular object,
                                thought, or activity to train attention and
                                awareness, and achieve a mentally clear and
                                emotionally calm and stable state.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}>
                            <h3 className="font-semibold mt-2 text-blue-500">
                                Why do we need to do Meditation?
                            </h3>
                            <li>
                                Meditation can give you a sense of calm, peace
                                and balance that can benefit your emotional
                                well-being and your overall health. You also can
                                use it to relax and cope with stress by focusing
                                on something that calms you. Meditation can help
                                you learn to stay centred and keep inner peace.
                            </li>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}>
                            <h3 className="font-semibold mt-2 text-blue-500">
                                When should we do Meditation?
                            </h3>
                            <li>
                                Although meditation can be beneficial at any
                                hour of the day, many people find morning to be
                                the best time to meditate because it's typically
                                the part of the day with the least distractions
                            </li>
                        </motion.div>
                    </section>
                    <section className="text-lg" id="sec2">
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}
                            className="mt-8">
                            <h3 className="font-semibold md:text-3xl text-xl mb-4">
                                <span>How to Meditate ?</span>
                            </h3>
                        </motion.div>
                        <div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b>Prepare Your Space :</b> Find a quiet and
                                peaceful place where you can sit comfortably.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Set a Time Limit : </b> Start with a short
                                duration, like five or ten minutes, especially
                                if you're new to meditation.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Get Comfortable : </b> Sit in a chair with
                                your feet grounded, or adopt a relaxed
                                cross-legged position. Ensure you're stable and
                                at ease.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Focus on Your Breath : </b> Pay attention to
                                the sensation of your breath as it enters and
                                exits your body.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Acknowledge Distractions : </b> It's natural
                                for your mind to wander. When you notice it
                                straying from your breath, gently guide your
                                focus back.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Practice Compassion : </b> Avoid
                                self-judgment or fixation on your thoughts.
                                Instead, be gentle with yourself and simply
                                return your attention to the breath.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Close with Awareness : </b> When your
                                session is over, slowly lift your gaze or open
                                your eyes. Take a moment to notice your
                                surroundings, your bodily sensations, thoughts,
                                and emotions.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pt-2">
                                That's it! The essence of meditation lies in
                                this simple practice of attention, gentle
                                redirection, and self-compassion.
                            </motion.li>
                        </div>
                    </section>
                    <section className="text-lg" id="sec3">
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}
                            className="mt-8">
                            <h3 className="font-semibold md:text-3xl text-xl mb-4">
                                <span>Inner peace advice and hacks</span>
                            </h3>
                        </motion.div>
                        <div>
                            <motion.p
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="mt-2">
                                <big className="text-3xl text-pink-500"> W</big>
                                hile we've covered the fundamental breath
                                meditation, there exist various mindfulness
                                techniques employing different focal points to
                                anchor our attention. These can include external
                                objects like sounds in the environment or
                                broader practices such as observing spontaneous
                                thoughts during aimless wandering. Despite their
                                differences, all these practices share a common
                                goal to bring awareness to the fact that our
                                minds often dominate our experiences. Indeed,
                                our thoughts tend to lead to actions. Here are
                                some useful strategies to shift this dynamic:
                            </motion.p>
                            <div className="mt-2">
                                <motion.li
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    className="pb-1">
                                    <b> Mindful Observation : </b>
                                    Practice observing external stimuli, like
                                    sounds or sights, without attaching
                                    judgments or narratives to them. This helps
                                    cultivate a sense of presence in the moment.
                                </motion.li>
                                <motion.li
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    className="pb-1">
                                    <b> Expanded Awareness : </b>
                                    Engage in practices that broaden your
                                    awareness beyond a single focal point. Allow
                                    yourself to notice and acknowledge whatever
                                    arises in your consciousness without
                                    clinging to it.
                                </motion.li>
                                <motion.li
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    className="pb-1">
                                    <b> Non-judgmental Awareness : </b>
                                    Develop a non-judgmental attitude towards
                                    your thoughts and experiences. Instead of
                                    labeling thoughts as "good" or "bad," simply
                                    observe them with curiosity and acceptance.
                                </motion.li>
                                <motion.li
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    className="pb-1">
                                    <b> Intentional Action : </b>
                                    Before acting on a thought, take a moment to
                                    pause and reflect. Ask yourself whether the
                                    action aligns with your intentions and
                                    values, or if it's merely a product of
                                    automatic thinking.
                                </motion.li>
                                <motion.li
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    className="pb-1">
                                    <b>Cultivate Curiosity : </b>
                                    Approach each meditation session with a
                                    sense of curiosity and openness. Explore
                                    different techniques and observe how they
                                    influence your mental state and awareness.
                                </motion.li>
                                <motion.li
                                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                    initial={{opacity: 0}}
                                    className="pt-1">
                                    By incorporating these strategies into your
                                    meditation practice, you can gradually shift
                                    the balance of power away from automatic
                                    thinking and towards intentional awareness,
                                    leading to greater clarity and presence in
                                    your daily life.
                                </motion.li>
                            </div>
                        </div>
                    </section>
                    <section className="text-lg" id="sec4">
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}
                            className="mt-8">
                            <h3 className="font-semibold md:text-3xl text-xl ">
                                <span>
                                    Forming a Habitual Practice of Mindfulness
                                </span>
                            </h3>
                        </motion.div>
                        <div className="mt-2">
                            <motion.p
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <big className="text-3xl text-pink-500"> C</big>
                                reating a habit of mindfulness involves
                                consistent practice and integrating mindfulness
                                into your daily routine. Here are some steps to
                                help you make mindfulness a habit :
                            </motion.p>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b>Set Clear Intentions : </b> Start by
                                clarifying why you want to incorporate
                                mindfulness into your life. Define your goals
                                and intentions, whether it's reducing stress,
                                improving focus, or enhancing overall
                                well-being. Start Small: Begin with short,
                                manageable sessions of mindfulness practice.
                                Start with just a few minutes each day and
                                gradually increase the duration as you become
                                more comfortable.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b> Choose Regular Times</b> : Select specific
                                times during the day to practice mindfulness
                                consistently. This could be in the morning upon
                                waking, during a lunch break, or before bed.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b>
                                    {" "}
                                    Integrate Mindfulness into Daily Activities
                                </b>{" "}
                                : Find opportunities to practice mindfulness
                                throughout your day. This could include mindful
                                eating, mindful walking, or even mindful
                                listening during conversations. Use Reminders:
                                Set reminders or cues to prompt mindfulness
                                practice. This could be alarms on your phone,
                                sticky notes in visible places, or associating
                                mindfulness with existing habits like brushing
                                your teeth. Experiment with Different
                                Techniques: Explore various mindfulness
                                techniques such as breath awareness, body scans,
                                loving-kindness meditation, or mindful movement.
                                Find what resonates with you and incorporate it
                                into your practice.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b>Be Patient and Persistent</b> : Developing a
                                habit takes time and effort. Be patient with
                                yourself and recognize that progress may be
                                gradual. If you miss a session or experience
                                setbacks, simply acknowledge it without judgment
                                and recommit to your practice. Practice
                                Non-Judgmental Awareness: Cultivate an attitude
                                of acceptance and non-judgment towards your
                                experiences during mindfulness practice. Allow
                                thoughts, emotions, and sensations to arise
                                without attaching labels or evaluating them.
                            </motion.li>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-1">
                                <b>Celebrate Progress</b> : Acknowledge and
                                celebrate your achievements along the way.
                                Whether it's completing a certain number of
                                consecutive days of practice or noticing
                                improvements in your well-being, take time to
                                recognize and appreciate your efforts. Reflect
                                on Benefits: Regularly reflect on the benefits
                                of mindfulness in your life. Notice how it
                                affects your mood, stress levels, relationships,
                                and overall sense of well-being. This can serve
                                as motivation to continue your practice.
                            </motion.li>
                            <motion.p
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}>
                                By incorporating these strategies into your
                                daily life, you can gradually cultivate a habit
                                of mindfulness that enriches your present moment
                                awareness and enhances your overall quality of
                                life.
                            </motion.p>
                        </div>
                    </section>
                    <section className="text-lg" id="sec5">
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [0, -20]}}
                            transition={{duration: 0.5, delay: 0.4}}
                            initial={{opacity: 0}}
                            className="mt-8">
                            <h3 className="font-semibold md:text-3xl text-xl mb-4">
                                <span>Core Meditation Approaches</span>
                            </h3>
                        </motion.div>
                        <div className="pb-2">
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/YFSc7Ck0Ao0?si=bwNT1rdbd5cbzEpA"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Breath Awareness Meditation</b>: This is one
                                of the most common forms of meditation. Sit
                                quietly and focus your attention on your breath.
                                Notice the sensations of each inhale and exhale,
                                without trying to control your breathing. When
                                your mind wanders, gently bring your focus back
                                to the breath.
                            </motion.li>
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/0zrOqOKUbx0?si=rRaAKX2OAUGR3HRw"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Body Scan Meditation</b>: In this practice,
                                you systematically bring awareness to different
                                parts of your body, starting from the top of
                                your head and moving down to your toes. Notice
                                any sensations, tensions, or areas of relaxation
                                as you scan through each body part.
                            </motion.li>
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/TdSgBB1dqNk?si=LwRukSY9hTnm75Mr"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Loving-Kindness Meditation (Metta)</b>: This
                                meditation involves cultivating feelings of
                                love, compassion, and goodwill towards yourself
                                and others. Begin by focusing on yourself and
                                silently repeating phrases such as "May I be
                                happy, may I be healthy, may I be safe, may I
                                live with ease." Then extend these wishes to
                                others, such as loved ones, acquaintances, and
                                even those you have difficulty with.
                            </motion.li>
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/aCwEwz1xU2M?si=iMYzKqQ39-Q9KyAo"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Walking Meditation</b>: Instead of sitting,
                                practice mindfulness while walking slowly and
                                deliberately. Pay attention to each step, the
                                sensations in your feet, and the movement of
                                your body. You can walk indoors or outdoors, in
                                a straight line or in a circle.
                            </motion.li>
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/unCya_-8ECs?si=xkHRtm4vKFfgl4es"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Sound Meditation</b>: Find a quiet space and
                                focus your attention on the sounds around you.
                                Notice both external sounds, such as birds
                                chirping or traffic passing by, as well as
                                internal sounds, like your breathing or
                                heartbeat. Simply observe the sounds without
                                judgment or attachment.
                            </motion.li>
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/hlwhmltvG1Y?si=2meddn5HImhQNqeI"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Visualization Meditation</b>: Close your eyes
                                and imagine a peaceful scene or scenario. It
                                could be a serene beach, a lush forest, or a
                                tranquil garden. Engage your senses by
                                visualizing the sights, sounds, smells, and
                                sensations of this imagined place.
                            </motion.li>
                            <div className="mb-10 flex justify-center items-center">
                                <iframe
                                    className="w-full md:w-[800px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/invL2KEt15Q?si=KWXKf6sJxaFtw-zy"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <motion.li
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.5, delay: 0.4}}
                                initial={{opacity: 0}}
                                className="pb-2">
                                <b>Counting Meditation</b>: Sit quietly and
                                count your breaths. Inhale, then silently count
                                "one" as you exhale. Inhale again and count
                                "two" on the next exhale, and continue counting
                                up to a predetermined number, such as ten. If
                                you lose count or your mind wanders, simply
                                start again from one.
                            </motion.li>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Meditations;
