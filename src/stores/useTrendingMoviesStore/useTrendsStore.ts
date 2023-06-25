import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Pagination } from '@/types';

export type UseTrendsStore<S> = {
    trends: null | Pagination<S>;

    setTrends: (trendMovies: Pagination<S>) => void;
};

export const useTrendingMoviesStore = create<UseTrendsStore<any>>()(
    devtools((set) => ({
        trends: null,

        setTrends: (response) =>
            set((state) => {
                if (state.trends) {
                    const currentPage = state.trends.page;
                    const shouldUpdate = currentPage < response.page;

                    if (shouldUpdate) {
                        return {
                            trends: {
                                ...response,
                                results: [
                                    ...state.trends.results,
                                    ...response.results,
                                ],
                            },
                        };
                    }

                    return { trends: state.trends };
                }

                return { trends: response };
            }),
    })),
);
