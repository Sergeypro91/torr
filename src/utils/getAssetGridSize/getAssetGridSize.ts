type GetAssetSizeOptions = {
    rowWidth: number;
    gap: number;
    rowCount: number;
    ratio: number;
};

export const getAssetGridSize = ({
    rowWidth,
    gap,
    rowCount,
    ratio,
}: GetAssetSizeOptions) => {
    const totalMargins = (rowCount - 1) * gap;
    const width = Math.floor((rowWidth - totalMargins) / rowCount);
    const height = Math.floor(width * ratio);

    return { width, height, gap };
};
