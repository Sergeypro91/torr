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
    const { ref, focusKey } = useFocusable({
        trackChildren: true,
        saveLastFocusedChild: false,
    });

    return (
        <FocusContext.Provider value={focusKey}>
            <AsideFooterContainer ref={ref}>
                <NavItem
                    route={{ pathName: routes.profile }}
                    render={(props) => (
                        <Profile {...props}>
                            <UserPhoto>
                                <User />
                            </UserPhoto>
                            <UserName>User_name</UserName>
                        </Profile>
                    )}
                />

                <NavItem
                    route={{ pathName: routes.info }}
                    render={(props) => (
                        <Info {...props}>
                            <InfoIcon />
                        </Info>
                    )}
                />

                <NavItem
                    route={{ pathName: routes.settings }}
                    render={(props) => (
                        <Settings {...props}>
                            <Gear />
                        </Settings>
                    )}
                />
            </AsideFooterContainer>
        </FocusContext.Provider>
    );
};
