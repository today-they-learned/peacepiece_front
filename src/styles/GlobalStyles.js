import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import COLOR from "constants/color.constant";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: ${COLOR.WHITE};
    color: ${COLOR.BLACK};
    font-size: 15px;
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

`;

export default GlobalStyles;
