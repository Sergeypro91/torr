import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PictureLineStore } from '@/components';

export const useNetflixMoviesStore = create<PictureLineStore<any>>()(
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
        nulledDataState: () =>
            set(() => ({
                dataState: null,
            })),
    })),
);
