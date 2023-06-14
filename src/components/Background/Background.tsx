import React, { useEffect, useState } from 'react';
import { BackgroundContainer } from './styled';
import { useAppStore, useRouteStore } from '@/stores';
import background from '../../assets/images/jpg/background.jpg';

export const Background = () => {
    const [blur, setBlur] = useState(false);
    const { pathName } = useRouteStore((state) => state.route);
    const selectedAsset = useAppStore((state) => state.selectedAsset);
    const data = useAppStore((state) => state.data);

    useEffect(() => {
        setTimeout(() => {
            setBlur(Boolean(pathName));
        }, 300);
    }, [pathName]);

    return (
        <BackgroundContainer img={background.src} blur={blur}>
            <h3>{selectedAsset?.title}</h3>
            <p>{data}</p>
        </BackgroundContainer>
    );
};
