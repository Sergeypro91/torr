import React from 'react';
import { Content } from '@/components';
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
            <HomeLeft></HomeLeft>
            <HomeCenter></HomeCenter>
            <HomeRight></HomeRight>
            <HomeBottom>
                <Content />
            </HomeBottom>
        </HomeContainer>
    );
};
