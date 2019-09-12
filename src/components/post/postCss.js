/** TABLE OF CONTENTS
 * 1. POST
 * 2. POST IMAGE
 * 3. POST CONTAINER
 * 4. POST NAVIGATION
 * 5. EMPHASIS
 * 6. RESPONSIVE
 */

import { createGlobalStyle } from "styled-components";

const PostCss = createGlobalStyle`
  /** 1. POST */
  .post {
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
  /** POST */
  
  /** 2. POST IMAGE */
  .post__image {
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
    
    .post__title {
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
  /** POST IMAGE */
  
  /** 3. POST CONTAINER */
  .post__container {
    //width: 100%;
    max-width: 1050px;
    margin: 0 auto auto;
    padding: 2.5em 1.5em 242px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    
    .post__tags {
      width: 100%;
      max-width: 650px;
      margin: 0 auto 1em;
      
      & > * { // These are all the tags
        padding: 2px 15px;
        margin-right: 10px;
        box-shadow: none;
        border-radius: 2px;
        color: var(--primaryLight); // Permanent color
        background: var(--tags); // Permanent color
        
        transition: 300ms ease; // For Hover
      }
      
      & > *:hover {
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
    
    .post__details {
      max-width: 650px;
      margin: 0 auto 2em;
      
      p {
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight)"
            : "var(--primaryDark)"};
        
        transition: var(--themingTiming); // For Theming
        
        .post__published {
          cursor: default;
          
          &:hover .post__published--tooltiptext {
            display: unset;
          }
        }
      }
    }
    
    .post__post {
      max-width: 650px;
      margin: 0 auto 0;
      
      * {
        font-family: Century Gothic;
        color: ${props =>
          props.theme === "light"
            ? "var(--primaryLight)"
            : "var(--primaryDark)"};
        
        transition: var(--themingTiming); // For Theming
      }
    }
  }
  /** POST CONTAINER */
  
  /** 4. POST NAVIGATION */
  .post__navigation {
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
        color: red;
      }
    }
  }
  /** POST NAVIGATION */
  
  /** 5. EMPHASIS */
  .--emphasis {
    color: ${props =>
      props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      
    transition: var(--themingTiming); // For Theming
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

export default PostCss;
