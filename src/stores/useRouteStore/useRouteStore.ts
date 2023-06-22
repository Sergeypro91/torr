import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shouldNavigate } from './utils';

export type Route = {
    pathName: string;
    params?: URLSearchParams;
};

export type RouteStore = {
    route: Route;
    history: Route[];

    navigate: (route: Route) => void;
    setParams: (paramsObject: Record<string, string>) => void;
    getParams: () => Record<string, string>;
    goBack: () => void;
    goToStart: () => void;
};

export const useRouteStore = create<RouteStore>()(
    devtools((set) => ({
        route: { pathName: '' },
        history: [{ pathName: '' }],

        navigate: (route: Route) =>
            set((state) => {
                if (!route.pathName) {
                    return {
                        route: { ...route, params: state.history[0]['params'] },
                        history: [state.history[0]],
                    };
                } else if (
                    shouldNavigate({ prevRoute: state.route, newRoute: route })
                ) {
                    const newHistory = [...state.history, route];

                    return { route: route, history: newHistory };
                }

                return state;
            }),
        setParams: (paramsObject) =>
            set((state) => {
                const newURLParams =
                    state.route.params ?? new URLSearchParams();
                const paramsEntries = Object.entries(paramsObject);

                for (const [key, value] of paramsEntries) {
                    newURLParams.set(key, value);
                }

                const updatedRoute = { ...state.route, params: newURLParams };
                const updatedHistory = [...state.history];
                updatedHistory[updatedHistory.length - 1] = updatedRoute;

                return { route: updatedRoute, history: updatedHistory };
            }),
        getParams: () => {
            const params: Record<string, string> = {};

            set((state) => {
                const urlParamsEntries = (
                    state.route.params ?? new URLSearchParams()
                ).entries();

                for (const [key, value] of urlParamsEntries) {
                    params[key] = value;
                }

                return state;
            });

            return params;
        },
        goBack: () =>
            set((state) => {
                const newHistory = [...state.history];
                newHistory.splice(newHistory.length - 1, 1);

                return {
                    route: newHistory[newHistory.length - 1] ?? {
                        pathName: '',
                    },
                    history: newHistory,
                };
            }),
        goToStart: () =>
            set(() => {
                return {
                    route: { pathName: '' },
                    history: [],
                };
            }),
    })),
);
