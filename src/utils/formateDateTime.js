export const formattedDate = (dateInput) => {
    if (!dateInput) return new Date().toISOString();

    const date = new Date(dateInput);
    if (Number.isNaN(date.getTime())) {
        return new Date().toISOString();
    }

    return date.toISOString();
};
