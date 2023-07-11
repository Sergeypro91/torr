import { useCallback, useEffect } from 'react';
import { useRouteStore, useVariableNavStore } from '@/stores';
import { NavProps } from '@/types';
import { VariableNavProps } from './types';

export const useVariableNav = ({ setFocus }: VariableNavProps) => {
    const route = useRouteStore((state) => state.route);
    const variableNav = useVariableNavStore((state) => state.variableNav);
    const setVariableNav = useVariableNavStore((state) => state.setVariableNav);

    const navigateTo = useCallback(
        (props: NavProps) => {
            setFocus(props.pathName);
        },
        [setFocus],
    );

    useEffect(() => {
        return () => {
            setVariableNav([]);
        };
    }, [route.pathName, setVariableNav]);

    return { variableNav, navigateTo };
};
