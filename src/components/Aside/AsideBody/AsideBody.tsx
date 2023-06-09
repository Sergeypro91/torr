import React, { useEffect } from 'react';
import { AsideBodyContainer } from './styled';
import { ConstantNav } from './ConstantNav';
import { VariableNav } from './VariableNav';
import { useAppStore } from '@/stores';
import {
    useFocusable,
    FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';

export const AsideBody = () => {
    const isNavActive = useAppStore((state) => state.isNavActive);
    const { ref, focusKey, setFocus, focusSelf } = useFocusable({
        trackChildren: true,
    });

    useEffect(() => {
        if (isNavActive) {
            focusSelf();
        }
    }, [focusSelf, isNavActive]);

    return (
        <FocusContext.Provider value={focusKey}>
            <AsideBodyContainer ref={ref}>
                <ConstantNav />

                <VariableNav setFocus={setFocus} />
            </AsideBodyContainer>
        </FocusContext.Provider>
    );
};
