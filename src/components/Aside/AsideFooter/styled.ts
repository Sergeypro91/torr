import styled from 'styled-components';
import { FocusedItem } from '@/components/types';

export const AsideFooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;

    & > *:not(:first-child):not(:empty) {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }
`;

export const UserPhoto = styled.div``;

export const UserName = styled.div``;

export const Profile = styled.div<FocusedItem>`
    flex: 1 100%;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2)};

    & > *:not(:first-child):not(:empty) {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }

    ${UserPhoto} {
        display: flex;
        padding: ${({ theme }) => theme.spacing(2)};
        border-radius: 50%;
        background: ${({ theme }) => theme.palette.gray['80']};
        box-shadow: ${({ theme, focused }) =>
            focused ? theme.boxShadow.targetBorder : 'none'};
        transition: ${({ theme }) => theme.transition};
    }

    &:hover {
        cursor: pointer;
        ${UserPhoto} {
            box-shadow: ${({ theme }) => theme.boxShadow.targetBorder};
        }
    }
`;

export const Info = styled.div<FocusedItem>`
    display: flex;
    padding: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme, focused }) =>
        focused ? theme.palette.white : 'none'};
    border-radius: ${({ theme }) => theme.spacing(2)};
    mix-blend-mode: ${({ focused }) => (focused ? 'lighten' : 'none')};
    transition: ${({ theme }) => theme.transition};

    & > svg {
        fill: ${({ theme, focused }) =>
            focused ? theme.palette.black : theme.palette.gray['60']};
        transition: ${({ theme }) => theme.transition};
    }

    &:hover {
        cursor: pointer;
        box-shadow: ${({ theme, focused }) =>
            !focused ? theme.boxShadow.targetBorder : 'none'};
    }
`;

export const Settings = styled(Info)``;
