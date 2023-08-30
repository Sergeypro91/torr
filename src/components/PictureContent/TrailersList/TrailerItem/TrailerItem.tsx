import React from 'react';
import Image from 'next/image';
import { TrailerItemProps } from './types';
import { useTrailerItem } from './useTrailerItem';
import { GET_YOUTUBE_IMAGE_URL } from './constants';
import { TrailerItemContainer, TrailerItemWrapper } from './styled';

export const TrailerItem = (props: TrailerItemProps) => {
    const { itemStyle, itemData } = props;
    const { ref, focused, handleAssetClick, handleAssetDoubleClick } =
        useTrailerItem(props);

    return (
        <TrailerItemContainer
            key={itemData.key}
            ref={ref}
            style={itemStyle}
            focused={focused}
            onClick={handleAssetClick}
            onDoubleClick={handleAssetDoubleClick}
        >
            <TrailerItemWrapper>
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    src={GET_YOUTUBE_IMAGE_URL(itemData.key)}
                    loading="lazy"
                    alt={itemData.name}
                />
            </TrailerItemWrapper>
        </TrailerItemContainer>
    );
};
