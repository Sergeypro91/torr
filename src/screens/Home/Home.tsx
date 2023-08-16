import React from 'react';
import { AssetInfo, Content } from '@/components';
import {
    HomeContainer,
    HomeHeader,
    HomeLeft,
    HomeCenter,
    HomeRight,
    HomeBottom,
} from './styled';

export const Home = () => {
    return (
        <HomeContainer>
            <HomeHeader />
            <HomeLeft>
                <AssetInfo overview={false} />
            </HomeLeft>
            <HomeCenter />
            <HomeRight />
            <HomeBottom>
                <Content />
            </HomeBottom>
        </HomeContainer>
    );
};
