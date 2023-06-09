import React from 'react';
import { BackgroundContainer } from './styled';
import { useAppStore } from '@/stores';

export const Background = () => {
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const data = useAppStore((state) => state.data);

    return (
        <BackgroundContainer>
            <h3>{selectedAsset?.title}</h3>
            <p>{data}</p>
        </BackgroundContainer>
    );
};
