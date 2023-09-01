import styled from 'styled-components';

export const AsideContainer = styled.aside<{ asideNavWidth?: number }>`
    width: ${({ asideNavWidth }) => `${asideNavWidth}px`};
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const AsideWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(8)};
`;
