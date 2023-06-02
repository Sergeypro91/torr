import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.palette.black};
    color: ${({ theme }) => theme.palette.gray['30']};
  }
  
  h1 {
    ${({ theme }) => theme.typography.h1};
  }
  
  h2 {
    ${({ theme }) => theme.typography.h2};
  }
  
  h3 {
    ${({ theme }) => theme.typography.h3};
  }
  
  h4 {
    ${({ theme }) => theme.typography.h4};
  }
  
  p {
    ${({ theme }) => theme.typography.p};
  }
`;

export default GlobalStyle;
