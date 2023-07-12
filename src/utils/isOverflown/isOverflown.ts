export const isOverflown = ({
    clientWidth,
    clientHeight,
    scrollWidth,
    scrollHeight,
}: HTMLElement) => {
    return scrollWidth > clientWidth || scrollHeight > clientHeight;
};
