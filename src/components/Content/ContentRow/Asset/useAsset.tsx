import React, { useCallback } from 'react';
import { routes, useRouteStore } from '@/stores';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { AssetProps } from './types';

export const useAsset = ({ focusId, data, onAssetFocus }: AssetProps) => {
    const navigate = useRouteStore((store) => store.navigate);

    const onPress = useCallback(() => {
        if (data?.tmdbId) {
            const params = new URLSearchParams([['pictureId', data.tmdbId]]);

            navigate({ pathName: routes.picture, params });
        }
    }, [navigate, data]);

    const { ref, focused, setFocus } = useFocusable({
        focusKey: focusId,
        onEnterPress: onPress,
        onFocus: onAssetFocus,
        extraProps: data ? { focusId, ...data } : undefined,
    });

    const handleAssetClick = useCallback(() => {
        setFocus(focusId);
    }, [setFocus, focusId]);

    const handleAssetDoubleClick = useCallback(() => {
        onPress();
    }, [onPress]);

    return {
        ref,
        focused,
        handleAssetClick,
        handleAssetDoubleClick,
    };
};
