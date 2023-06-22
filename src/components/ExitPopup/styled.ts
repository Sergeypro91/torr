import styled from 'styled-components';
import { rgba } from 'polished';

export const ExitPopupContainer = styled.div`
    grid-area: aside / aside / content / content;
    display: flex;
    position: absolute;
    background-color: black;
    z-index: 1;
    animation: appearance 300ms ease-in;

    @keyframes appearance {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Prompt = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PromptTitle = styled.h4`
    text-align: center;
    color: ${() => rgba('white', 0.3)};
`;

export const PromptActions = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:first-child):not(:empty) {
        margin-left: 30px;
    }
`;

export const PromptKeyContainer = styled.h2<{
    focused: boolean;
    focusKey?: string;
}>`
    color: ${({ focused }) => (focused ? 'white' : rgba('white', 0.3))};
`;
