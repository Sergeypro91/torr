import React, { useEffect, useState } from 'react';
import { WelcomeScreenContainer } from './styled';
import { useAppStore } from '@/store';

export const WelcomeScreen = () => {
    const isWelcomeScreenShown = useAppStore(
        (state) => state.isWelcomeScreenShown,
    );
    const [isHidden, setIsHidden] = useState(false);

    const toggleWelcomeScreenShown = useAppStore(
        (state) => state.toggleWelcomeScreenShown,
    );

    useEffect(() => {
        setTimeout(() => {
            toggleWelcomeScreenShown();
        }, 3000);
    }, [toggleWelcomeScreenShown]);

    if (isHidden) {
        return null;
    }

    return (
        <WelcomeScreenContainer
            isStartHide={isWelcomeScreenShown}
            onTransitionEnd={() => setIsHidden(true)}
        >
            <h2>TORR</h2>
        </WelcomeScreenContainer>
    );
};
