import React, { useCallback, useEffect } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useBackgroundStore } from '@/stores';
import { Video } from '@/types';
import { TrailerItemProps } from './types';

export const useTrailerItem = ({
    rowItemId,
    itemData,
    onAssetFocus = () => {},
}: TrailerItemProps) => {
    const setVideoUrl = useBackgroundStore((store) => store.setVideoUrl);

    const onPress = useCallback(
        (props: Video) => {
            setVideoUrl(`https://www.youtube.com/watch?v=${itemData.key}`);
        },
        [itemData.key, setVideoUrl],
    );

    const { ref, focused, setFocus } = useFocusable({
        focusKey: rowItemId,
        onEnterPress: onPress,
        extraProps: itemData,
    });

    const handleAssetClick = useCallback(() => {
        setFocus(rowItemId);
    }, [setFocus, rowItemId]);

    const handleAssetDoubleClick = useCallback(() => {
        onPress(itemData);
    }, [onPress, itemData]);

    useEffect(() => {
        if (focused && ref.current) {
            onAssetFocus(ref.current, { ...itemData, focusId: rowItemId });
        }
    }, [focused, itemData, rowItemId, onAssetFocus, ref]);

    return { ref, focused, handleAssetClick, handleAssetDoubleClick };
};
