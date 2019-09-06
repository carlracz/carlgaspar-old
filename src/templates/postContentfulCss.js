/** TABLE OF CONTENTS
 * 1. POSTCONTENTFUL
 * 2. POSTCONTENTFUL_IMAGE
 * 3. POSTCONTENTFUL CONTAINER
 * 4. POSTCONTENTFUL NAVIGATION
 * 5. EMPHASIS
 * 6. RESPONSIVE
 */

import { createGlobalStyle } from "styled-components";

const PostContentfulCss = createGlobalStyle`
  /** 1. POSTCONTENTFUL */
  .postContentful {
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
  /** POSTCONTENTFUL */
  
  /** 2. POSTCONTENTFUL IMAGE */
  .postContentful__image {
    min-height: 300px;
    position: relative;
    padding-top: 205px;
    
    .gatsby-image-wrapper {
      min-height: 300px;
      height: auto; // Changes to 50vh when specific size
      filter: brightness(70%);
    }
    
    img {
      background-color: rgba(0, 0, 0, 0.5); // Darker image
    }
    
    .postContentful__title {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      padding: 0 1rem;
      
      font-size: 3em;
      font-weight: 600;
      text-align: center;
      color: white; // Always white
    }
  }
  /** POSTCONTENTFUL IMAGE */
  
  /** 3. POSTCONTENTFUL CONTAINER */
  .postContentful__container {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto auto;
    padding: 2.5em 1.5em 242px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    
    .postContentful__tags {
      width: 100%;
      max-width: 650px;
      margin: 0 auto 1em;
      
      & > * { // These are all the tags
        padding: 2px 15px;
        margin-right: 10px;
        box-shadow: none;
        border-radius: 2px;
        color: var(--primaryLight);
        background: var(--tags);
        
        transition: 300ms ease; // For Theming
      }
      
      & > *:hover {
        border-radius: 10px;
        border-bottom: 2px solid ${props =>
          props.theme === "light"
            ? "var(--primaryLight)"
            : "var(--primaryDark)"};
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
    
    .postContentful__details {
      max-width: 650px;
      margin: 0 auto 2em;
      
      p {
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight)"
            : "var(--primaryDark)"};
        
        transition: var(--themingTiming); // For Theming
        
        .postContentful__published {
          cursor: default;
          
          &:hover .postContentful__published--tooltiptext {
            display: unset;
          }
        }
      }
    }
    
    .postContentful__post {
      max-width: 650px;
      margin: -10px auto 0;
      
      * {
        font-family: arial;
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight)"
            : "var(--primaryDark)"};
        
        transition: var(--themingTiming); // For Theming
      }
    }
  }
  /** POSTCONTENTFUL CONTAINER */
  
  /** 4. POSTCONTENTFUL NAVIGATION */
  .postContentful__navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    
    li a {
      color: ${props =>
        props.theme === "light"
          ? "var(--tertiaryLight)"
          : "var(--tertiaryDark)"};
      
      transition: var(--themingTiming); // For Theming and Hover (Combined)
      
      &:hover {
        box-shadow: 0 1px 0 0 ${props =>
          props.theme === "light"
            ? "var(--secondaryLight)"
            : "var(--secondaryDark)"};
      }
    }
  }
  /** POSTCONTENTFUL NAVIGATION */
  
  /** 5. EMPHASIS */
  .--emphasis {
    color: ${props =>
      props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** 6. RESPONSIVE */
  @media only screen and (min-width: 35em) {
    .gatsby-image-wrapper {
      height: 50vh !important;
    }
  }
`;

export default PostContentfulCss;
