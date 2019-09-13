/** TABLE OF CONTENTS
 * 1. FEATURED
 * 2. FEATURED CONTAINER
 * 3. FEATURED POSTS
 * 4. FEATURED POST
 * 5. EMPHASIS
 * 6. RESPONSIVE
 */

import { createGlobalStyle } from "styled-components";

const MainbodyCss = createGlobalStyle`
  /** FEATURED */
  .featured {
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    background: ${props =>
      props.theme === "light"
        ? "var(--secondaryLight)"
        : "var(--secondaryDark)"};
        
    transition: var(--themingTiming); // For Theming
  }
  /** FEATURED */
  
  /** FEATURED CONTAINER */
  .featured__container {
    //width: 100%;
    max-width: 1050px;
    flex-grow: 1;
    margin: 0 auto auto;
    padding: 220px 1.5em 242px;
  }
  /** FEATURED CONTAINER */
  
  /** FEATURED POSTS */
  .featured__posts {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 0 auto;
    list-style: none;
    padding-inline-start: 0;
  }
  /** FEATURED POSTS */
  
  /** FEATURED POST */
  .featured__post {
    width: 100%;
    position: relative;
    margin: 0 0 1em;
    border-radius: 2px;
    border: 1px solid ${props =>
      props.theme === "light" ? "var(--primaryLight4)" : "var(--primaryDark4)"};
    
    transition: var(--themingTiming); // For Theming and Hover
    
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
    
    .featured__contentModel {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 15px;
      color: var(--primaryLight); // Permanent color
      background: var(--tags); // Permanent color
      
      transition: var(--themingTiming); // For Theming and Hover
    }
    
    .featured__postTitle {
      font-size: 1.5em;
      font-family: Montserrat,sans-serif;
      font-weight: 600;
      text-transform: capitalize;
      margin: 1rem 1rem 0.5rem;
      color: ${props =>
        props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        
      transition: var(--themingTiming); // For Theming
    }
    
    .featured__postDetails {
      .featured__postPublished {
        margin: 0 1rem 0rem;
        font-family: Montserrat, sans-serif;
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight2)"
            : "var(--primaryDark2)"};
            
        transition: var(--themingTiming); // For Theming
      }
      
      .featured__postTimeToRead {
        margin: 0 1rem 0.5rem;
        font-family: Montserrat, sans-serif;
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight2)"
            : "var(--primaryDark2)"};
            
        transition: var(--themingTiming); // For Theming
      }
    }
    
    .featured__postSubtitle {
      line-height: 1.6;
      margin: 0 1rem 1rem;
      font-family: Montserrat, sans-serif;
      color: ${props =>
        props.theme === "light"
          ? "var(--tertiaryLight)"
          : "var(--tertiaryDark)"};
          
      transition: var(--themingTiming); // For Theming
    }
    
    &:nth-child(1) {
      flex: 0 0 100%;
    }
    
    &:nth-child(1n+2) {
      flex: 0 0 100%;
    }
    
    &:hover {
      background: ${props =>
        props.theme === "light"
          ? "var(--postLight)"
          : "var(--postDark)"};
      
      .featured__contentModel {
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryDark)"
            : "var(--primaryLight)"};
        background: ${props =>
          props.theme === "light"
            ? "var(--tertiaryLight)"
            : "var(--tertiaryDark)"};
      }
    }
  }
  /** FEATURED POST */
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props =>
      props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      
      transition: var(--themingTiming); // For Theming
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  @media only screen and (min-width: 35em) {
    .featured__post:nth-child(1) {
      .gatsby-image-wrapper {
        padding-bottom: 40%;
      }
    }
    
    .featured__post:nth-child(1n+2) {
      flex: 0 0 49%;
      
      .gatsby-image-wrapper {
        padding-bottom: 60%;
      }
    }
  }
  
  @media only screen and (min-width: 50em) {
    .featured__post:nth-child(1n+2) {
      flex: 0 0 32%;
      
      .gatsby-image-wrapper {
        padding-bottom: 60%;
      }
    }
  }
`;

export default MainbodyCss;
