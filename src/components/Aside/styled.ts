import styled from 'styled-components';

export const AsideWrapper = styled.aside`
    position: relative;
    transition: ${({ theme }) => theme.transition};
    background-color: rgba(0, 0, 0, 0.8);
`;

export const AsideContainer = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(8)};
`;
