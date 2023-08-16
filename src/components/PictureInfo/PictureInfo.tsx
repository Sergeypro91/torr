import React from 'react';
import { PictureInfoContainer } from './styled';
import { AssetInfo } from '@/components';
import { Company } from '@/types';

export type PictureInfoProps = {
    tagline: null | string;
    production: null | Company[];
};

export const PictureInfo = ({ tagline, production }: PictureInfoProps) => {
    return (
        <PictureInfoContainer>
            <AssetInfo {...{ tagline, production }} />
        </PictureInfoContainer>
    );
};
