import React, { useEffect, useRef } from 'react';
import {
    AssetInfoContainer,
    AssetInfoDescription,
    AssetInfoDetail,
    AssetInfoTitle,
} from './styled';
import { AssetInfoGeneral } from './AssetInfoGeneral';
import { useAssetInfo } from './hooks';
import { resizeText } from '@/utils';

export const AssetInfo = () => {
    const { title, description } = useAssetInfo();
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
            <AssetInfoTitle className="text-container">
                <span ref={titleSpanRef}>{title}</span>
            </AssetInfoTitle>
            <AssetInfoDetail>
                <AssetInfoGeneral />
                <AssetInfoDescription>{description}</AssetInfoDescription>
            </AssetInfoDetail>
        </AssetInfoContainer>
    );
};
