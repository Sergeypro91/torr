import styled from 'styled-components';

export const PictureContainer = styled.div``;
export const TestC = styled.h2<{ focused?: boolean }>`
    color: ${({ focused }) => (focused ? 'red' : 'blue')};
`;
export const PicFocubleContainer = styled.div<{ hasFocusedChild?: boolean }>`
    background-color: ${({ hasFocusedChild }) =>
        hasFocusedChild ? '#01ef92' : 'white'};
`;
