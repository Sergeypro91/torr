import React, { useCallback } from 'react';
import { routes, useAppStore, useRouteStore } from '@/stores';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { AssetProps } from './types';

export const useAsset = ({
    focusId = '',
    onFocus = () => {},
    ...data
}: AssetProps) => {
    const navigate = useRouteStore((store) => store.navigate);
    const selectAsset = useAppStore((store) => store.selectAsset);

    const onPress = useCallback(() => {
        if (data?.tmdbId) {
            const params = new URLSearchParams([['pictureId', data.tmdbId]]);

            navigate({ pathName: routes.picture, params });
        }
    }, [navigate, data]);

    const { ref, focused } = useFocusable({
        focusKey: focusId,
        onEnterPress: onPress,
        onFocus,
        extraProps: { focusId, ...data },
    });

    const handleAssetClick = useCallback(() => {
        if (data?.tmdbId) {
            selectAsset({ focusId, ...data });
        }
    }, [selectAsset, focusId, data]);

    const handleAssetDoubleClick = useCallback(() => {
        onPress();
    }, [onPress]);

    return {
        ref,
        focused,
        focusId,
        handleAssetClick,
        handleAssetDoubleClick,
    };
};
