import styled from "styled-components";
import { rgba } from "polished";

export const ContentWrapper = styled.div<{ focusKey?: string }>`
  grid-area: content;

  display: flex;
  flex-direction: column;
  margin-left: 30px;
  overflow: hidden;

  //border: 1px solid white;
  // background-color: ${() => rgba("white", 0.15)};
  color: white;

  transition: all 300ms ease-out;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  padding-bottom: calc((100vw / 6) * (9 / 16));

  & > *:not(:first-child):not(:only-child) {
    margin-top: calc(100vw / 100);
  }

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
