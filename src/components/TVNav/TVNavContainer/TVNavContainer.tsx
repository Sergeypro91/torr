import React, { JSX, useEffect } from 'react';
import {
    FocusContext,
    useFocusable,
    UseFocusableConfig,
} from '@noriginmedia/norigin-spatial-navigation';
import { Wrapper } from './styled';

export type TVNavContainerProps = {
    children: JSX.Element;
    isFocusSelf?: boolean;
    options: UseFocusableConfig;
    focusTarget?: string;
};

export const TVNavContainer = ({
    children,
    options,
    isFocusSelf = false,
    focusTarget,
}: TVNavContainerProps) => {
    const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
        ...options,
    });

    useEffect(() => {
        if (isFocusSelf) {
            focusSelf();
        }
    }, [isFocusSelf, focusSelf]);

    return (
        <FocusContext.Provider value={focusKey}>
            <Wrapper ref={ref}>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        hasFocusedChild,
                    });
                })}
            </Wrapper>
        </FocusContext.Provider>
    );
};
