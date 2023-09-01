import styled from 'styled-components';

export const PersonItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: ${({ theme }) => theme.transition};
    overflow: hidden;
`;

export const PersonData = styled.dl`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: ${({ theme }) => theme.spacing(2)};
    transition: ${({ theme }) => theme.transition};
`;

export const PersonRole = styled.dd<{ height?: number }>`
    height: ${({ height }) => `${height}px`};
    color: ${({ theme }) => theme.palette.gray['40']};
    transition: ${({ theme }) => theme.transition};
`;

export const PersonName = styled.dt`
    ${({ theme }) => theme.typography.h4}

    line-height: ${({ theme }) => `${theme.typography.h4['font-size']}px`};
    color: ${({ theme }) => theme.palette.white};
    text-shadow: ${({ theme }) => `0 1px ${theme.palette.black}`};
    transition: ${({ theme }) => theme.transition};
`;

export const EmptyPersonImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.black};

    svg {
        width: 50%;
        height: auto;
        fill: ${({ theme }) => theme.palette.gray['40']};
    }
`;

export const PersonItemContainer = styled.div<{ focused?: boolean }>`
    padding: ${({ theme }) => theme.spacing(2)};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    ${PersonData} {
        background-color: ${({ theme, focused }) =>
            focused ? theme.palette.black : 'transparent'};
    }

    ${PersonItemWrapper} {
        border-radius: ${({ theme }) => theme.spacing(2)};
        box-shadow: ${({ theme, focused }) =>
            focused ? `0 0 0 ${theme.spacing(2)} white` : 'none'};
    }

    ${PersonRole} {
        visibility: ${({ focused }) => (focused ? 'visible' : 'hidden')};
        margin-top: ${({ theme, focused }) => (focused ? theme.spacing(2) : 0)};
    }

    &:hover {
        ${PersonItemWrapper} {
            background-color: ${({ theme }) => theme.palette.white};
        }

        img {
            opacity: 0.5;
        }
    }
`;
