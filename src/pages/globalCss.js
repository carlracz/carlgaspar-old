import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  * {
    font-family: 'Baloo';
    font-style: normal;
    font-weight: 400;
  }
  
  .none {
    display: none;
  }
  
  .display {
    display: default;
  }
  
  .hidden {
    visibility: hidden;
  }
  
  .visible {
    visibility: visible;
  }
`;

export default GlobalCss;
