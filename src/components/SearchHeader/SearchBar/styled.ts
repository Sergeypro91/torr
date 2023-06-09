import styled from 'styled-components';
import { transparentize } from 'polished';

export const SearchBarContainer = styled.form`
    height: 60px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: ${({ theme }) =>
        transparentize(0.95, theme.palette.white)};
    border-radius: ${({ theme }) => theme.spacing(4)};

    input {
        width: 500px;
    }

    & > *:not(:empty):not(:first-child) {
        position: relative;

        &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 1px;
            height: calc(100% - 20px);
            margin: 10px 0;
            background-color: ${({ theme }) => theme.palette.gray['50']};
        }
    }
`;
