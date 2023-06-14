import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MovieSlim, Pagination } from '@/types';

export type UseTrendingMoviesStore = {
    trendMovies: null | Pagination<MovieSlim>;

    setTrendMovies: (trendMovies: Pagination<MovieSlim>) => void;
};

export const useTrendingMoviesStore = create<UseTrendingMoviesStore>()(
    devtools((set) => ({
        trendMovies: null,

        setTrendMovies: (trendMovies) =>
            set((state) => {
                if (state.trendMovies) {
                    const currentPage = state.trendMovies.page;
                    const shouldUpdate = currentPage < trendMovies.page;

                    return shouldUpdate
                        ? {
                              trendMovies: {
                                  ...trendMovies,
                                  results: [
                                      ...state.trendMovies.results,
                                      ...trendMovies.results,
                                  ],
                              },
                          }
                        : { trendMovies };
                }

                return { trendMovies };
            }),
    })),
);
