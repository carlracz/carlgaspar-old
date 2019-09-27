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
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 1.5em;
    
    z-index: 1; // Mainbody has no z-index (means 0)
  }
  /** UTILITIES */
  
  /** UTILITIES CONTAINER */
  .utilities__container {
    position: relative;
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
  }
  /** UTILITIES CONTAINER */
  
  .utilities__location {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
  }
  
  .utilities__left, .utilities__right {
      position: relative;
      bottom: 115px;
      
      transition: 300ms ease; // For changing position when screen resizes
      
      img {
        width: 30px;
        height: 30px;
        border-radius: 25px;
        cursor: pointer;
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  @media only screen and (max-width: 1270px) {
    .utilities__left, .utilities__right {
      //bottom: 0;
    }
  }
`;

export default UtilitiesCss;
