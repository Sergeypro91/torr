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
            resizeText({ element: titleSpanRef.current, step: 0.5 });
        }
    }, [title, titleSpanRef]);

    return (
        <AssetInfoContainer>
            <AssetInfoTitle className="text-container">
                <span ref={titleSpanRef} className="text">
                    <h1>{title}</h1>
                </span>
            </AssetInfoTitle>
            <AssetInfoDetail>
                <AssetInfoGeneral />
                <AssetInfoDescription>{description}</AssetInfoDescription>
            </AssetInfoDetail>
        </AssetInfoContainer>
    );
};
