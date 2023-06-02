import React, { memo, useCallback } from 'react';
import { AssetContainer, AssetInner, AssetWrapper } from './styled';
import { FocusableElement } from '../../../types';
import {
    FocusableComponentLayout,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { routes, useRouteStore } from '@/store';

export type AssetProps = FocusableElement & {
    onFocus: (
        layout: FocusableComponentLayout,
        props: FocusableElement,
        details: FocusDetails,
    ) => void;
};

export const Asset = memo(({ title, color, onFocus }: AssetProps) => {
    const navigate = useRouteStore((store) => store.navigate);

    const onPress = useCallback(() => {
        const params = new URLSearchParams([['pictureId', title]]);

        navigate({ pathName: routes.picture, params });
    }, [navigate, title]);

    const { ref, focused } = useFocusable({
        focusKey: title,
        onEnterPress: onPress,
        onFocus,
        extraProps: {
            title,
            color,
        },
    });

    const handleAssetClick = useCallback(() => {
        onPress();
    }, [onPress]);

    return (
        <AssetWrapper ref={ref} onClick={handleAssetClick}>
            <AssetContainer color={color} focused={focused}>
                <AssetInner>{title}</AssetInner>
            </AssetContainer>
        </AssetWrapper>
    );
});

Asset.displayName = 'Asset';
