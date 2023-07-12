export const calculateTickerTime = (ref: HTMLElement) => {
    const { offsetWidth, scrollWidth } = ref;
    const sizeDifference = scrollWidth - offsetWidth;

    if (sizeDifference < 10) {
        return 0;
    }

    if (sizeDifference < 50) {
        return sizeDifference * 100;
    }

    return sizeDifference * 30;
};
