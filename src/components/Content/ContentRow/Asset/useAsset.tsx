import React, { useCallback, useEffect } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useRouteStore } from '@/stores';
import { AssetProps } from './types';

export const useAsset = ({
    itemData,
    rowItemId,
    onAssetFocus = () => {},
}: AssetProps) => {
    const navigate = useRouteStore((store) => store.navigate);

    const onPress = useCallback(() => {
        if (itemData?.tmdbId) {
            const params = new URLSearchParams([
                ['pictureId', itemData.tmdbId],
            ]);

            navigate({ pathName: itemData.mediaType, params });
        }
    }, [navigate, itemData]);

    const { ref, focused, setFocus } = useFocusable({
        focusKey: rowItemId,
        onEnterPress: onPress,
    });

    const handleAssetClick = useCallback(() => {
        setFocus(rowItemId);
    }, [setFocus, rowItemId]);

    const handleAssetDoubleClick = useCallback(() => {
        onPress();
    }, [onPress]);

    useEffect(() => {
        if (focused && ref.current) {
            onAssetFocus(ref.current, { ...itemData, focusId: rowItemId });
        }
    }, [focused, itemData, rowItemId, onAssetFocus, ref]);

    return {
        ref,
        focused,
        rowItemId,
        handleAssetClick,
        handleAssetDoubleClick,
    };
};
