import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type UseSearchStore = {
    searchFilter?: string;

    setSearchFilter: (option?: string) => void;
};

export const useSearchStore = create<UseSearchStore>()(
    devtools((set) => ({
        searchFilter: undefined,

        setSearchFilter: (option) => set(() => ({ searchFilter: option })),
    })),
);
