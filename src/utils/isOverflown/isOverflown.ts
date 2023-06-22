type IsOverflownOptions = {
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
};

export const isOverflown = ({
    clientWidth,
    clientHeight,
    scrollWidth,
    scrollHeight,
}: IsOverflownOptions) =>
    scrollWidth > clientWidth || scrollHeight > clientHeight;
