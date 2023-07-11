import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type VariableNavLink = {
    title: string;
    link: string;
};

type UseVariableNavStore = {
    variableNav: VariableNavLink[];

    setVariableNav: (value: UseVariableNavStore['variableNav']) => void;
    addToVariableNav: (value: VariableNavLink) => void;
};

export const useVariableNavStore = create<UseVariableNavStore>()(
    devtools((set) => ({
        variableNav: [],

        setVariableNav: (value) =>
            set(() => {
                return { variableNav: value };
            }),
        addToVariableNav: (value) =>
            set((state) => {
                return { variableNav: [...state.variableNav, value] };
            }),
    })),
);
