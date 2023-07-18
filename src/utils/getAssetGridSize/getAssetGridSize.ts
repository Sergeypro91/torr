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
    const width = Math.ceil((rowWidth - totalMargins) / rowCount);
    const height = Math.ceil(width * ratio);

    return { width, height, gap };
};
