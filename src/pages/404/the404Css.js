import { createGlobalStyle } from "styled-components";

const The404Css = createGlobalStyle`
  /** THE404 */
  .the404 {
    min-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
  }
  /** THE404 */
  
  /** THE404 CONTAINER */
  .the404__container {
    width: 100%;
    max-width: 1050px;
    
    position: absolute;
    top: 43%;//50%
    left: 50%;
    transform: translate(-50%,-50%);
    
    flex-grow: 1;
    margin: 0 auto auto;
    padding: 220px 1.5em 242px;
    
    .the404__title {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin: 150px 0 0 0;
      text-align: center;
      line-height: 1em;
      color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
      
      span {
        font-size: 300%
      }
    }
    
    .the404__subtitle {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      
      margin: 0 0 150px 0;
      text-align: center;
      line-height: 20px;
      color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
    }
  }
  /** THE404 CONTAINER */
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  @media only screen and (min-width: 35em) {
  
  }
`;

export default The404Css;
