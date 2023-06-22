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

        setTrends: (trendMovies) =>
            set((state) => {
                if (state.trends) {
                    const currentPage = state.trends.page;
                    const shouldUpdate = currentPage < trendMovies.page;

                    return shouldUpdate
                        ? {
                              trends: {
                                  ...trendMovies,
                                  results: [
                                      ...state.trends.results,
                                      ...trendMovies.results,
                                  ],
                              },
                          }
                        : { trends: trendMovies };
                }

                return { trends: trendMovies };
            }),
    })),
);
