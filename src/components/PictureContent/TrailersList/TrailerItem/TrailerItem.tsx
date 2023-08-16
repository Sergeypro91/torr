import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { ListItemOptions } from '@/components';
import { Video } from '@/types';
import { TrailerItemContainer } from './styled';

export type TrailerItemProps = ListItemOptions<Video> & {
    onAssetFocus?: (layout: HTMLElement, item: Video) => void;
};

export const TrailerItem = (props: TrailerItemProps) => {
    const { rowItemId, itemStyle, itemData } = props;

    const onPress = (props: Video) => {
        console.log('ON PRESS', { props });
    };

    const { ref, focused } = useFocusable({
        focusKey: rowItemId,
        onEnterPress: onPress,
        extraProps: itemData,
    });

    return (
        <TrailerItemContainer
            ref={ref}
            focused={focused}
            style={itemStyle}
        ></TrailerItemContainer>
    );
};
