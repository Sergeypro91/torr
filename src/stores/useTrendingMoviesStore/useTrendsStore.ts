import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Pagination } from '@/types';

export type UseTrendsStore<S> = {
    dataState: null | Pagination<S>;

    setDataState: (trendMovies: Pagination<S>) => void;
};

export const useTrendingMoviesStore = create<UseTrendsStore<any>>()(
    devtools((set) => ({
        dataState: null,

        setDataState: (response) =>
            set((state) => {
                if (state.dataState) {
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
    })),
);
