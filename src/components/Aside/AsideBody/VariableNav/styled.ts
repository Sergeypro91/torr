import styled from 'styled-components';

export const VariableNavContainer = styled.div``;

export const Devider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.gray['60']};
    margin-top: ${({ theme }) => theme.spacing(4)};
`;
