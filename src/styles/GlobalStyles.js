import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    min-height: 100vh;
  }
`;

export default StyledGlobalStyle;
