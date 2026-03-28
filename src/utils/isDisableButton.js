import {remainingTimeUntilEnable} from "./remainingTimeUntilEnable";

export const isDisableButton = (createdAt) => {
    const remaining = remainingTimeUntilEnable(createdAt);
    return remaining.seconds > 0 || remaining.minutes !== "00" || remaining.hours !== "00";
};
