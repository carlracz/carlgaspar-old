import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  :root {
    --primaryLight: #000000;
    --primaryLight2: #808080;
    --primaryLight3: #4f4f4f;
    --primaryLight4: #e9e9e9;
    --secondaryLight: #ffffff;
    --tertiaryLight: #0069ff;
    --runningLight: #fafafa;
    --runningLight2: #dedede;
    
    --primaryDark: #ffffff;
    --primaryDark2: #b1b1b1;
    --primaryDark3: #dedede;
    --primaryDark4: #e9e9e9;
    --secondaryDark: #272727;
    --tertiaryDark: #ff9400;
    --runningDark: #1d1d1d;
    --runningDark2: #000000;
    
    --tags: #f1f1f1;
    
    --themingTiming: 500ms ease;
  }
  
  * {
    font-family: 'Baloo';
    //transition: color 1000ms ease; //Detecting some lag
  }
  
  body {
    background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
  }
  
  .--none {
    display: none;
  }
  
  .--display {
    display: unset;
  }
  
  .--hidden {
    visibility: hidden;
  }
  
  .--visible {
    visibility: visible;
  }
`;

export default GlobalCss;
