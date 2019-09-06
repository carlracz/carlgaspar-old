/** TABLE OF CONTENTS
 * 1. POSTCONTENTFUL
 * 2. POSTCONTENTFUL_IMAGE
 * 3. POSTCONTENTFUL CONTAINER
 * 4. POSTCONTENTFUL NAVIGATION
 * 5. EMPHASIS
 * 6. RESPONSIVE
 */

import { createGlobalStyle } from "styled-components";

const MainbodyCss = createGlobalStyle`
  /** FEATURED */
  .featured {
    min-height: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
  }
  /** FEATURED */
  
  /** FEATURED CONTAINER */
  .featured__container {
    width: 100%;
    max-width: 1050px;
    flex-grow: 1;
    margin: 0px auto auto;
    padding: 220px 1.5em 242px;
  }
  /** FEATURED CONTAINER */
  
  /** FEATURED POSTS */
  .featured__posts {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 0px auto;
    list-style: none;
  }
  /** FEATURED POSTS */
  
  /** FEATURED POST */
  .featured__post {
    position: relative;
    width: 100%;
    border: 1px solid ${props => props.theme === "light" ? "var(--primaryLight4)" : "var(--primaryDark4)"};
    border-radius: 2px;
    margin: 0px 0px 1em;
    
    .featured__contentModel {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 0px 15px;
      color: var(--primaryLight);
      background: var(--tagsDark);
      
    }
    
    .featured__postTitle {
      font-size: 1.5em;
      font-family: Montserrat,sans-serif;
      font-weight: 600;
      text-transform: capitalize;
      margin: 1rem 1rem 0.5rem;
      color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
    }
    
    .featured__postDetails {
      .featured__postPublished {
        margin: 0px 1rem 0rem;
        font-family: Montserrat,sans-serif;
        color: ${props => props.theme === "light" ? "var(--primaryLight2)" : "var(--primaryDark2)"};
      }
      
      .featured__postTimeToRead {
        margin: 0px 1rem 0.5rem;
        font-family: Montserrat,sans-serif;
        color: ${props => props.theme === "light" ? "var(--primaryLight2)" : "var(--primaryDark2)"};
      }
    }
    
    .featured__postSubtitle {
      line-height: 1.6;
      margin: 0px 1rem 1rem;
      font-family: Montserrat,sans-serif;
      color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
    }
    
    &:nth-child(1) {
      flex: 0 0 100%;
    }
    
    &:nth-child(1n+2) {
      flex: 0 0 32%;
    }
      
    /*&:nth-child(1n+5) {
      &:nth-child(odd) {
        flex: 0 0 74%;
      }
      
      &:nth-child(even) {
        flex: 0 0 24%;
      }
    }*/
  }
  /** FEATURED POST */
  
  .gatsby-image-wrapper {
    height: 0px;
    padding-bottom: 60%;
  }
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  @media only screen and (min-width: 35em) {
    .gatsby-image-wrapper {
      padding-bottom: 40%;
    }
    
    .featured__postDetails:nth-child(2) {
      .gatsby-image-wrapper {
        height: 0px;
        padding-bottom: 60%;
      }
    }
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    
`;

export default MainbodyCss;
