/** TABLE OF CONTENTS
 * 1. PAGE
 * 2. PAGE CONTAINER
 * 3. PAGE POSTS
 * 4. PAGE POST
 * 5. EMPHASIS
 * 6. RESPONSIVE
 */

import { createGlobalStyle } from "styled-components";

const PageCss = createGlobalStyle`
  /** PAGE */
  .page {
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
  /** PAGE */
  
  /** PAGE CONTAINER */
  .page__container {
    //width: 100%;
    max-width: 1050px;
    flex-grow: 1;
    margin: 0 auto auto;
    padding: 220px 1.5em 242px;
  }
  /** PAGE CONTAINER */
  
  /** PAGE POSTS */
  .page__posts {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 0 auto;
    list-style: none;
    padding-inline-start: 0;
  }
  /** PAGE POSTS */
  
  /** PAGE POST */
  .page__post {
    width: 100%;
    position: relative;
    flex: 0 0 100%;
    margin: 0 0 1em;
    border-radius: 2px;
    border: 1px solid ${props =>
      props.theme === "light" ? "var(--primaryLight4)" : "var(--primaryDark4)"};
    
    transition: var(--themingTiming); // For Theming and Hover
    
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
    
    .page__postTitle {
      font-size: 1.5em;
      font-family: Montserrat,sans-serif;
      font-weight: 600;
      text-transform: capitalize;
      margin: 1rem 1rem 0.5rem;
      color: ${props =>
        props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        
      transition: var(--themingTiming); // For Theming
    }
    
    .page__postDetails {
      .page__postPublished {
        margin: 0 1rem 0rem;
        font-family: Montserrat, sans-serif;
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight2)"
            : "var(--primaryDark2)"};
            
        transition: var(--themingTiming); // For Theming
      }
      
      .page__postTimeToRead {
        margin: 0 1rem 0.5rem;
        font-family: Montserrat, sans-serif;
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight2)"
            : "var(--primaryDark2)"};
            
        transition: var(--themingTiming); // For Theming
      }
    }
    
    .page__postSubtitle {
      line-height: 1.6;
      margin: 0 1rem 1rem;
      font-family: Montserrat, sans-serif;
      color: ${props =>
        props.theme === "light"
          ? "var(--tertiaryLight)"
          : "var(--tertiaryDark)"};
          
      transition: var(--themingTiming); // For Theming
    }
    
    &:hover {
      background: ${props =>
        props.theme === "light"
          ? "var(--postLight)"
          : "var(--postDark)"};
    }
  }
  /** PAGE POST */
  
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
    .page__post {
      flex: 0 0 49%;
      
      .gatsby-image-wrapper {
        padding-bottom: 60%;
      }
    }
  }
  
  @media only screen and (min-width: 50em) {
    .page__post {
      flex: 0 0 32%;
      
      .gatsby-image-wrapper {
        padding-bottom: 60%;
      }
    }
  }
  
  @media only screen and (max-width: 700px) {
    .page__container {
      padding: 220px 1.5em 440px;
    }
  }
  
  @media only screen and (min-width: 701px) and (max-width: 1140px) {
    .page__container {
      padding: 220px 1.5em 420px;
    }
  }
`;

export default PageCss;
