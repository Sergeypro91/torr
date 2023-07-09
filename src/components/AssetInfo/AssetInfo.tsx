import React, { useEffect, useRef } from 'react';
import {
    AssetInfoContainer,
    AssetInfoDescription,
    AssetInfoDetail,
    AssetInfoTitle,
} from './styled';
import { AssetInfoGeneral } from './AssetInfoGeneral';
import { resizeText } from '@/utils';
import { useAssetInfo } from './hooks';
import { lorem } from './constants';

export const AssetInfo = () => {
    const { title, description, type, rating, genres, releaseDate } =
        useAssetInfo();
    const titleSpanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (titleSpanRef.current) {
            resizeText({
                element: titleSpanRef.current,
                minSize: 47,
                maxSize: 76,
                step: 4,
            });
        }
    }, [title]);

    return (
        <AssetInfoContainer>
            <AssetInfoTitle isEmpty={!title}>
                <span ref={titleSpanRef}>{title ?? lorem}</span>
            </AssetInfoTitle>
            <AssetInfoDetail>
                <AssetInfoGeneral
                    genres={genres}
                    rating={rating}
                    type={type}
                    releaseDate={releaseDate}
                />
                <AssetInfoDescription isEmpty={!description}>
                    {description ?? lorem}
                </AssetInfoDescription>
            </AssetInfoDetail>
        </AssetInfoContainer>
    );
};
