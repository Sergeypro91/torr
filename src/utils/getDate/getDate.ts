export const getDate = (date: string | Date | number) => {
    const objectDate = new Date(date);
    const day = objectDate.getDate().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    const month = (objectDate.getMonth() + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    const year = objectDate.getFullYear();

    return { day, month, year };
};
