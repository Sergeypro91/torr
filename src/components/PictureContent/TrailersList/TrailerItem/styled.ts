import styled from 'styled-components';

export const TrailerItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: ${({ theme }) => theme.transition};
    overflow: hidden;
`;

export const TrailerItemContainer = styled.div<{ focused?: boolean }>`
    padding: ${({ theme }) => theme.spacing(2)};
    cursor: pointer;

    * {
        border-radius: ${({ theme }) => theme.spacing(2)};
        transition: ${({ theme }) => theme.transition};
    }

    ${TrailerItemWrapper} {
        box-shadow: ${({ theme, focused }) =>
            focused ? `0 0 0 ${theme.spacing(2)} white` : 'none'};
    }

    &:hover {
        ${TrailerItemWrapper} {
            background-color: ${({ theme }) => theme.palette.white};
        }

        img {
            opacity: 0.5;
        }
    }
`;
