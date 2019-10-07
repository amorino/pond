// @flow
import { createGlobalStyle } from 'styled-components';
import { colors, fontFamily } from './constants';

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${colors.white};
    font-family: ${fontFamily.gotham};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${colors.black};
  }
  button {
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
