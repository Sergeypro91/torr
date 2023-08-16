type GetAssetSizeOptions = {
    rowWidth: number;
    gap: number;
    visibleItemsCount: number;
    ratio: number;
};

export const getAssetSize = ({
    rowWidth,
    gap,
    visibleItemsCount,
    ratio,
}: GetAssetSizeOptions) => {
    const totalMargins = visibleItemsCount * gap;
    const width = Math.ceil((rowWidth - totalMargins) / visibleItemsCount);
    const height = Math.ceil(width * ratio);

    return { width, height };
};
