import React from 'react';
import {
    useFocusable,
    FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import { NavItem } from '@/components';
import { routes } from '@/stores';
import {
    AsideFooterContainer,
    Info,
    Profile,
    Settings,
    UserName,
    UserPhoto,
} from './styled';
import { Gear, Info as InfoIcon, User } from '@/assets/images/svgr';

export const AsideFooter = () => {
    const { ref, focusKey, focusSelf } = useFocusable({
        trackChildren: true,
        saveLastFocusedChild: false,
    });

    return (
        <FocusContext.Provider value={focusKey}>
            <AsideFooterContainer ref={ref}>
                <NavItem route={{ pathName: routes.profile }}>
                    <Profile>
                        <UserPhoto>
                            <User />
                        </UserPhoto>
                        <UserName>User_name</UserName>
                    </Profile>
                </NavItem>

                <NavItem route={{ pathName: routes.info }}>
                    <Info>
                        <InfoIcon />
                    </Info>
                </NavItem>

                <NavItem route={{ pathName: routes.settings }}>
                    <Settings>
                        <Gear />
                    </Settings>
                </NavItem>
            </AsideFooterContainer>
        </FocusContext.Provider>
    );
};
