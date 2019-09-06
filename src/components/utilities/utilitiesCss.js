/** TABLE OF CONTENTS
 * 1. POSTCONTENTFUL
 * 2. POSTCONTENTFUL_IMAGE
 * 3. POSTCONTENTFUL CONTAINER
 * 4. POSTCONTENTFUL NAVIGATION
 * 5. EMPHASIS
 * 6. RESPONSIVE
 */
 
import { createGlobalStyle } from "styled-components";

const UtilitiesCss = createGlobalStyle`
  /** UTILITIES */
  .utilities__ {
    position: fixed;
    height: 50px;
    left: 0px;
    right: 0px;
    bottom: 100px;
    padding: 0 1.5em;
    
    z-index: 1; // Mainbody has no z-index (means 0)
  }
  /** UTILITIES */
  
  /** UTILITIES CONTAINER */
  .utilities__container {
    position: relative;
    max-width: 100rem;
    height: 100%;
    margin: 0 auto;
  }
  /** UTILITIES CONTAINER */
  
  /** UTILITIES LEFT */
  .utilities__left {
    position: absolute;
    left: 5rem;
  }
  /** UTILITIES LEFT */
  
  /** UTILITIES RIGHT */
  .utilities__right {
    position: absolute;
    right: 5rem;
  }
  /** UTILITIES RIGHT */
  
  .postContentful__navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
  }
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  // 319 v * .8
  @media only screen and (max-width: 319px) {
    
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    
`;

export default UtilitiesCss;
