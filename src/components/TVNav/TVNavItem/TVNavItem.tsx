import React, { JSX, useCallback } from 'react';
import {
    FocusableComponentLayout,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';

export type TVNavItemProps = {
    id: string;
    children: JSX.Element;
    onPress?: (id: string) => void;
    onFocus?: (
        layout: FocusableComponentLayout,
        props: string,
        details: FocusDetails,
    ) => void;
};

export const TVNavItem = ({
    children,
    id,
    onPress,
    onFocus,
}: TVNavItemProps) => {
    const { ref, focused } = useFocusable({
        focusKey: id,
        onEnterPress: onPress,
        onFocus,
        extraProps: id,
    });

    const handleAssetClick = useCallback(() => {
        if (onPress) {
            onPress(id);
        }
    }, [id, onPress]);

    return (
        <div ref={ref} onClick={handleAssetClick}>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    focused,
                });
            })}
        </div>
    );
};
