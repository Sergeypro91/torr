import { MediaType } from '@/types';
export const createAssetId = (
    containerId: string,
    tmdbId: string,
    mediaType: MediaType,
) => {
    return `${containerId}|${tmdbId}|${mediaType}`;
};

export const decipherAssetId = (assetId: string) => {
    const [containerId, tmdbId, mediaType] = assetId.split('|');

    return { containerId, tmdbId, mediaType };
};
