import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  * {
    //position: relative;
    font-family: 'Baloo';
    font-style: normal;
    font-weight: 400;
  }
  
  .--emphasis {
    color: #0069FF;
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
