import { createGlobalStyle } from "styled-components";
import COLOR from "constants/color";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    height: 100%;
    background-color: ${COLOR.bg.default};
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${COLOR.bg.default};
    color: ${COLOR.font.default};
    font-family: 'Pr-Light';
    font-size: 16px;
    height: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent; 
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  em-emoji-picker {
    --font-family: 'Pr-Regular';
    --rgb-accent: 60, 232, 123; 
  }  

`;

export default GlobalStyles;
