import styled from "styled-components";
import { rgba } from "polished";

export const ContentRowContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > *:not(:first-child):not(:only-child) {
    margin-left: calc(100vw / 100);
  }
`;

export const ContentRowWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child):not(:only-child) {
    margin-top: calc(100vw / 100);
  }
`;
export const ContentRowTitle = styled.h2<{ focused: boolean }>`
  color: ${({ focused }) => (focused ? "white" : rgba("white", 0.15))};
  margin: calc(100vw / 100) calc(100vw / 100) calc(100vw / 200);
`;

export const ContentRowList = styled.div`
  display: flex;
  overflow-y: auto;
  padding-right: calc(100vw / 100);

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
