import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.palette.black};
    color: ${({ theme }) => theme.palette.gray['60']};
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
  
  svg {
      width: ${({ theme }) => theme.spacing(8)};
      height: ${({ theme }) => theme.spacing(8)};
      fill: ${({ theme }) => theme.palette.gray['60']};
  }
`;

export default GlobalStyle;
