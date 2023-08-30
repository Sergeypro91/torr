import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type BackgroundStore = {
    isPlaying: boolean;
    videoUrl: null | string;

    setPlaying: (state?: boolean) => void;
    setVideoUrl: (url: null | string) => void;
};

export const useBackgroundStore = create<BackgroundStore>()(
    devtools((set) => ({
        isPlaying: false,
        videoUrl: '',

        setPlaying: (isPlaying) =>
            set((state) => ({ isPlaying: isPlaying ?? !state.isPlaying })),
        setVideoUrl: (url) => set(() => ({ videoUrl: url })),
    })),
);
