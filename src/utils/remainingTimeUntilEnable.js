const COOLDOWN_MS = 24 * 60 * 60 * 1000;

export const remainingTimeUntilEnable = (createdAt) => {
    if (!createdAt) {
        return {hours: "00", minutes: "00", seconds: 0};
    }

    const created = new Date(createdAt).getTime();
    if (Number.isNaN(created)) {
        return {hours: "00", minutes: "00", seconds: 0};
    }

    const diff = created + COOLDOWN_MS - Date.now();
    if (diff <= 0) {
        return {hours: "00", minutes: "00", seconds: 0};
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds,
    };
};
