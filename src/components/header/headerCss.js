/** TABLE OF CONTENTS
 * 1. HEADER
 * 2. HEADER CONTAINER
 * 3. HEADER NAME
 * 4. HEADER SOCIALS
 * 5. HEADER NAVIGATION
 * 6. EMPHASIS
 * 7. RESPONSIVE
 */

import { createGlobalStyle } from "styled-components";

const HeaderCss = createGlobalStyle`
  /** HEADER */
  .header {
    position: fixed;
    height: 200px;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 1.5em;
    z-index: 1; // Mainbody has no z-index (means 0)
    
    background: ${props =>
      props.theme === "light" ? "var(--runningLight)" : "var(--runningDark)"};
    
    transition: var(--themingTiming); // For Theming
  }
  
  .header--minimized {
    height: 108px;
  }
  
  .header--minimized2 {
    height: 80px;
  }
  
  .header--minimized3 {
    height: 50px;
  }
  /** HEADER */
  
  /** HEADER CONTAINER */
  .header__container {
    position: relative; // without this NAME and SOCIALS not relating to the view port
    max-width: 70rem;
    height: 100%;
    margin: 0 auto;
  }
  /** HEADER CONTAINER */
  
  /** HEADER NAME */
  .header__nameContainer {
    width: 270px;
    height: 55px;
    position: absolute;
    bottom: 118px;
    // Center Horizontal
    left: 50%;
    transform: translateX(-50%);
    
    font-size: 48px;
    line-height: 76px;
    text-align: center;
    letter-spacing: -0.06em;
    
    transition: 300ms ease; // For changing position when scrolling
    
    .header__name {
      color: ${props =>
        props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
      
      transition: var(--themingTiming); // For Theming
    }
  }
  
  .header__nameContainer--minimized {
    bottom: 37px;
    left: 0;
    transform: unset;
  }
  
  .header__nameContainer--minimized2 {
    bottom: 22px;
    left: 0;
    transform: unset;
  }
  /** HEADER NAME */

  /** HEADER SOCIALS */
  .header__socials {
    position: absolute;
    bottom: 60px;
    // Center Horizontal
    right: 50%;
    transform: translateX(50%);
    
    display: flex;
    align-items: center;
    text-align: center;
  
    transition: 300ms ease; // For changing size when scrolled
    
    & > * { // Pointing to the Animated <div>
      margin: 0 5px 0;
      
      & a > img {
        width: 36px;
        height: 36px;
        border-radius: 5px;
        
        transition: 300ms ease; // For changing size when animating
        
        &.true {
          width: 36px;
        }
        
        &.false {
          width: 138px;
        }
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  
    .header__reddit {
      /*&.true {
        width: 36px;
      }
      
      &.false {
        width: 138px;
      }*/
    }
    
    .header__facebook {
      
    }
    
    .header__instagram {
      
    }
    
    .header__twitter {
      
    }
    
    .header__github {
      
    }
    
    .header__youtube {
      
    }
    
    .header__linkedin {
      
    }
    
    .header__aboutme {
      
    }
    
    .header__portfolio {
      
    }
  }
  
  .header__socials--minimized {
    bottom: 32px;
    right: 0;
    transform: unset;
    
    & > * { // Pointing to the Animated <div>
      margin: 0 5px 0;
      
      & a > img {
        width: 36px;
        height: 36px;
        border-radius: 5px;
        
        transition: 300ms ease;
        
        &.true {
          width: 36px;
        }
        
        &.false {
          width: 138px;
        }
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    
    .header__reddit {
      /*&.true {
        width: 36px;
      }
      
      &.false {
        width: 138px;
      }*/
    }
    
    .header__facebook {
      
    }
    
    .header__instagram {
      
    }
    
    .header__twitter {
      
    }
    
    .header__github {
      
    }
    
    .header__youtube {
      
    }
    
    .header__linkedin {
      
    }
    
    .header__aboutme {
      
    }
    
    .header__portfolio {
      
    }
  }
  
  .header__socials--minimized2 {
    bottom: 16px;
    right: 0;
    transform: unset;
    
    & > * { // Pointing to the Animated <div>
      margin: 0 5px 0;
      
      & a > img {
        width: 36px;
        height: 36px;
        border-radius: 5px;
        
        transition: 300ms ease;
        
        &.true {
          width: 36px;
        }
        
        &.false {
          width: 138px;
        }
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    
    .header__reddit {
      /*&.true {
        width: 36px;
      }
      
      &.false {
        width: 138px;
      }*/
    }
    
    .header__facebook {
      
    }
    
    .header__instagram {
      
    }
    
    .header__twitter {
      
    }
    
    .header__github {
      
    }
    
    .header__youtube {
      
    }
    
    .header__linkedin {
      
    }
    
    .header__aboutme {
      
    }
    
    .header__portfolio {
      
    }
  }
  /** HEADER SOCIALS */
  
  /** HEADER NAVIGATION */
  .header__navigation {
    position: absolute;
    top: 120px;
    // Center Horizontal
    left: 50%;
    transform: translateX(-50%);
    
    display: flex;
    align-items: center;
    text-align: center;
  
    transition: 300ms ease; // For moving when scrolled
      
    & > * { // Pointing to the each navs
      margin: 0 5px 0;
      
      font-size: 24px;
      line-height: 38px;
      
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.06em;
      box-shadow: none;
      
      color: ${props =>
        props.theme === "light"
          ? "var(--primaryLight3)"
          : "var(--primaryDark3)"};
          
      transition: var(--themingTiming); // For Theming
      
      &:hover {
        color: ${props =>
          props.theme === "light"
            ? "var(--tertiaryLight)"
            : "var(--tertiaryDark)"};
      }
    }
    
    div:hover {
      color: ${props =>
        props.theme === "light"
          ? "var(--primaryLight3)"
          : "var(--primaryDark3)"};
    }
  }
  
  .header__navigation--minimized {
    top: 18px;
    left: 105%;
    transform: unset;
  }
  
  .header__navigation--minimized2 {
    top: 18px;
    left: 105%;
    transform: unset;
  }
  
  .header__navigation--minimized3 {
    top: 128px;
    left: 50%;
    transform: translateX(-50%);
  }
  /** HEADER NAVIGATION */
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props =>
      props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  @media only screen and (max-width: 1080px) {
    .header--minimized {
      height: 108px;
    }
    
    .header--minimized2 {
      height: 108px;
    }
    
    .header__nameContainer--minimized {
      bottom: 65px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .header__nameContainer--minimized2 {
      bottom: 65px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .header__socials {
      bottom: 60px;
    }
    
    .header__socials--minimized, .header__socials--minimized2 {
      bottom: 24px;
    }
    
    // width smaller because of screen size. all class share the same properties
    .header__socials, .header__socials--minimized, .header__socials--minimized2 {
      position: absolute;
      // Center Horizontal
      right: 50%;
      transform: translateX(50%);
      
      display: flex;
      align-items: center;
      text-align: center;
    
      transition: 300ms ease;
      
      & > * { // Pointing to the Animated <div>
        margin: 0 5px 0;
        
        & a > img {
          width: 30px;
          height: 30px;
          border-radius: 5px;
          
          transition: 300ms ease;
          
          &.true {
            width: 30px;
          }
          
          &.false {
            width: 115px;
          }
          
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    
      .header__reddit {
      
      }
      
      .header__facebook {
        
      }
      
      .header__instagram {
        
      }
      
      .header__twitter {
        
      }
      
      .header__github {
        
      }
      
      .header__youtube {
        
      }
      
      .header__linkedin {
        
      }
      
      .header__aboutme {
        
      }
      
      .header__portfolio {
        
      }
    }
    
    // Navigation doesnt move when on small screen
    .header__navigation--minimized, .header__navigation--minimized2 {
      top: 85px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .header__navigation--minimized3 {
      top: 128px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media only screen and (min-width: 1081px) and (max-width: 1135px) {
    .header__socials--minimized {
      bottom: 18px;
    }
    .header__socials--minimized2 {
      bottom: 2px;
    }
    
    // width smaller because of screen size. all class share the same properties
    .header__socials, .header__socials--minimized, .header__socials--minimized2 {
      display: flex;
      align-items: center;
      text-align: center;
    
      transition: 300ms ease;
      
      & > * { // Pointing to the Animated <div>
        margin: 0 5px 0;
        
        & a > img {
          width: 33px;
          height: 33px;
          border-radius: 5px;
          
          transition: 300ms ease;
          
          &.true {
            width: 33px;
          }
          
          &.false {
            width: 115px;
          }
          
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    
      .header__reddit {
      
      }
      
      .header__facebook {
        
      }
      
      .header__instagram {
        
      }
      
      .header__twitter {
        
      }
      
      .header__github {
        
      }
      
      .header__youtube {
        
      }
      
      .header__linkedin {
        
      }
      
      .header__aboutme {
        
      }
      
      .header__portfolio {
        
      }
    }
  }
`;

export default HeaderCss;
