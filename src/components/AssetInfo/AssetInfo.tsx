import React, { useEffect, useRef } from 'react';
import { getImageSrc, resizeText } from '@/utils';
import { AssetInfoGeneral } from './AssetInfoGeneral';
import { useAssetInfo } from './hooks';
import { AssetInfoProps } from './types';
import {
    AssetInfoContainer,
    AssetInfoDescription,
    AssetInfoDetail,
    AssetInfoProduction,
    AssetInfoTagline,
    AssetInfoTitle,
} from './styled';

export const AssetInfo = ({
    overview = true,
    tagline,
    production,
}: AssetInfoProps) => {
    const {
        selectedAsset,
        title,
        description,
        type,
        rating,
        genres,
        releaseDate,
    } = useAssetInfo();
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

    return selectedAsset ? (
        <AssetInfoContainer>
            <AssetInfoTitle overview={overview}>
                <span ref={titleSpanRef}>{title}</span>
            </AssetInfoTitle>
            <AssetInfoDetail>
                <AssetInfoGeneral
                    genres={genres}
                    rating={rating}
                    type={type}
                    releaseDate={releaseDate}
                />
                <AssetInfoTagline isShown={overview}>
                    {tagline}
                </AssetInfoTagline>
                <AssetInfoDescription isShown={overview}>
                    {description}
                </AssetInfoDescription>
            </AssetInfoDetail>
            <AssetInfoProduction isShown={overview}>
                {production?.map((company) => {
                    return company.logoPath ? (
                        <img
                            src={getImageSrc({
                                data: company,
                                size: 'w92',
                                type: 'logoPath',
                            })}
                            alt={company.name}
                            loading="lazy"
                        />
                    ) : null;
                })}
            </AssetInfoProduction>
        </AssetInfoContainer>
    ) : null;
};
