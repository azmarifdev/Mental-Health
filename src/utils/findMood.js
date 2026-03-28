export const findMood = (moods, moodName) => {
    if (!Array.isArray(moods)) return [];
    return moods.filter((item) => item?.mood === moodName);
};
