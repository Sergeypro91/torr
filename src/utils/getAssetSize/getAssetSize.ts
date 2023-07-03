type GetAssetSizeOptions = {
    rowWidth: number;
    margin: number;
    counter: number;
};

export const getAssetSize = ({
    rowWidth,
    margin,
    counter,
}: GetAssetSizeOptions) => {
    const itemsCount = counter + 0.5;
    const totalMargins = counter * margin;
    const width = Math.ceil((rowWidth - totalMargins) / itemsCount);
    const height = Math.ceil(width * (9 / 16));

    return { width, height };
};
