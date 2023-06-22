import React, { memo, useCallback } from 'react';
import { routes, useRouteStore } from '@/stores';
import {
    FocusableComponentLayout,
    FocusDetails,
    useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { SelectElement } from '@/types';
import { Poster } from '@/components';
import {
    AssetInner,
    AssetWrapper,
    AssetContainer,
    AssetBackground,
} from './styled';

export type AssetProps = SelectElement & {
    onFocus: (
        layout: FocusableComponentLayout,
        props: SelectElement,
        details: FocusDetails,
    ) => void;
};

export const Asset = memo(
    ({ tmdbId, focusId, onFocus, ...imgData }: AssetProps) => {
        const navigate = useRouteStore((store) => store.navigate);

        const onPress = useCallback(() => {
            const params = new URLSearchParams([['pictureId', tmdbId]]);

            navigate({ pathName: routes.picture, params });
        }, [navigate, tmdbId]);

        const { ref, focused } = useFocusable({
            focusKey: focusId,
            onEnterPress: onPress,
            onFocus,
            extraProps: { tmdbId, focusId, ...imgData },
        });

        const handleAssetClick = useCallback(() => {
            onPress();
        }, [onPress]);

        return (
            <AssetWrapper ref={ref} onClick={handleAssetClick}>
                <AssetContainer focused={focused}>
                    <AssetBackground>
                        <Poster data={imgData} size="w500" type="hPosterPath" />
                    </AssetBackground>
                    <AssetInner>{}</AssetInner>
                </AssetContainer>
            </AssetWrapper>
        );
    },
);

Asset.displayName = 'Asset';
