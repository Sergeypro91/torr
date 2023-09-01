import { Video } from '@/types';

export const filterVideos = (videos?: Video[] | null) => {
    return videos
        ? videos.filter((video) => video.site.toLowerCase() === 'youtube')
        : [];
};
