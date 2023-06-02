import styled from "styled-components";
import { rgba } from "polished";

export const NavItemContainer = styled.li<{
  focused: boolean;
  focusKey?: string;
}>`
  color: ${({ focused }) => (focused ? "white" : rgba("white", 0.3))};

  transition: all 300ms ease-out;
`;
