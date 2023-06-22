import React from 'react';
import { AssetInfo, Content } from '@/components';
import {
    HomeBottom,
    HomeContainer,
    HomeCenter,
    HomeLeft,
    HomeRight,
} from './styled';

export const Home = () => {
    return (
        <HomeContainer>
            <HomeLeft>
                <AssetInfo />
            </HomeLeft>
            <HomeCenter />
            <HomeRight />
            <HomeBottom>
                <Content />
            </HomeBottom>
        </HomeContainer>
    );
};
