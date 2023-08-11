import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PictureLineStore } from '@/components';
import { MediaType } from '@/types';

type UseSearchStore = {
    searchPage: number;
    searchQuery: string;
    searchFilter: MediaType;

    setSearchPage: (page: number) => void;
    setSearchQuery: (query: string) => void;
    setSearchFilter: (filter: MediaType) => void;
} & PictureLineStore<any>;

export const useSearchStore = create<UseSearchStore>()(
    devtools((set) => ({
        dataState: null,
        searchPage: 1,
        searchQuery: '',
        searchFilter: MediaType.ALL,

        setSearchPage: (page) => set(() => ({ searchPage: page })),
        setSearchQuery: (query) =>
            set((state) => {
                if (state.searchQuery !== query) {
                    console.log('ENTER');
                    return {
                        dataState: null,
                        searchQuery: query,
                        searchPage: 1,
                    };
                }

                return { searchQuery: query };
            }),
        setSearchFilter: (filter) =>
            set((state) => {
                if (state.searchFilter !== filter) {
                    return { searchFilter: filter, searchPage: 1 };
                }

                return { searchFilter: filter };
            }),
        setDataState: (response) =>
            set((state) => {
                if (state.dataState && response.page > 1) {
                    const currentPage = state.dataState.page;
                    const shouldUpdate = currentPage < response.page;

                    if (shouldUpdate) {
                        return {
                            dataState: {
                                ...response,
                                results: [
                                    ...state.dataState.results,
                                    ...response.results,
                                ],
                            },
                        };
                    }

                    return { dataState: state.dataState };
                }

                return { dataState: response };
            }),
        nulledDataState: () =>
            set(() => ({
                dataState: null,
            })),
    })),
);
