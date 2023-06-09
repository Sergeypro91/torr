import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type useSearchStore = {
    searchFilter?: string;

    setSearchFilter: (option?: string) => void;
};

export const useSearchStore = create<useSearchStore>()(
    devtools((set) => ({
        searchFilter: undefined,

        setSearchFilter: (option) => set(() => ({ searchFilter: option })),
    })),
);
