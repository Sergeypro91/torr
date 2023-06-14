import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { FocusableElement } from '@/types';

type AppStore = {
    data: string;
    exit: boolean;
    isBackPress: boolean;
    selectedAsset: null | FocusableElement;
    isNavActive: boolean;
    isWelcomeScreenShown: boolean;

    setData: (dataString: string) => void;
    toggleExit: (status?: boolean) => void;
    toggleBackPress: (status?: boolean) => void;
    selectAsset: (asset: FocusableElement) => void;
    toggleNavActive: (status?: boolean) => void;
    toggleWelcomeScreenShown: () => void;
};

export const useAppStore = create<AppStore>()(
    devtools((set) => ({
        data: '',
        exit: false,
        isBackPress: false,
        selectedAsset: null,
        isNavActive: false,
        isWelcomeScreenShown: false,

        setData: (dataString) => set(() => ({ data: dataString })),
        toggleExit: (status) =>
            set((state) => ({ exit: status ?? !state.exit })),
        toggleBackPress: (status) =>
            set((state) => ({
                isBackPress: status ?? !state.isBackPress,
            })),
        selectAsset: (asset) => set(() => ({ selectedAsset: asset })),
        toggleNavActive: (status) =>
            set((state) => ({
                isNavActive: status ?? !state.isNavActive,
            })),
        toggleWelcomeScreenShown: () =>
            set((state) => ({
                isWelcomeScreenShown: !state.isWelcomeScreenShown,
            })),
    })),
);
