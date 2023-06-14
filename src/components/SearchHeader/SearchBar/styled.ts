import styled from 'styled-components';
import { transparentize } from 'polished';

export const SearchBarContainer = styled.form`
    height: 60px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: ${({ theme }) =>
        transparentize(0.9, theme.palette.white)};
    border-radius: ${({ theme }) => theme.spacing(4)};

    input {
        width: 500px;
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2, 0)};

    &:before {
        width: 100%;
        height: 100%;
        content: '';
        display: flex;
        background-color: ${({ theme }) => theme.palette.gray['60']};
    }
`;
