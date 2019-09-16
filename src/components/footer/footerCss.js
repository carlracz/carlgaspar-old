import { createGlobalStyle } from "styled-components";

const FooterCss = createGlobalStyle`
  /** FOOTER */
  .footer {
    position: absolute;
    height: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 1.5em;
    margin-bottom: 40px;
    
    background: ${props => props.theme === "light" ? "var(--runningLight)" : "var(--runningDark)"};
    z-index: 1; // Mainbody has no z-index (means 0)
    
    transition: 300ms ease;
  }
  /** FOOTER */
  
  /** FOOTER CONTAINER */
  .footer__container {
    position: relative;
    max-width: 70rem;
    height: 100%;
    margin: 0 auto;
  }
  /** FOOTER CONTAINER */
  
  /** FOOTER LEFT */
  .footer__left {
    position: absolute;
    left: 0;
    top: 0;
  }
  /** FOOTER LEFT */
  
  /** NAME */
  .footer__name {
    width: 270px;
    height: 77px;

    position: absolute;
    top: 0;
    left: 0;
    
    font-size: 48px;
    line-height: 76px;
    text-align: center;
    letter-spacing: -0.06em;
    
    color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
    
    transition: 300ms ease;
    
    .footer__summary {
      width: 350px;
      margin: -30px 0 0 5px;
      font-size: 14px;
      text-align: left;
      line-height: 1;
      letter-spacing: 0;
    }
  }
  /** NAME */
  
  /** SOCIALS */
  .footer__socials {
    width: 100%;
    //height: 34px; // temporary
    
    & > * {
      padding-right: 34px;
      margin-right: 5px;
      
      //width: 24px;
      //height: 24px;
      
      //position: absolute;
      
      //margin-right: 34px;
      border-radius: 8px;
      transition: 300ms ease;
    }
  
    .footer__reddit {
      background: #FF3D00;
    }
    
    .footer__facebook {
      background: #00A3FF;
    }
    
    .footer__instagram {
      background: #BD00FF;
    }
    
    .footer__twitter {
      background: #00FFF0;
    }
    
    .footer__github {
      background: #006FD6;
    }
    
    .footer__youtube {
      background: #FF0000;
    }
    
    .footer__linkedin {
      background: #218BEE;
    }
    
    .footer__aboutme {
      background: #676869;
    }
    
    .footer__portfolio {
      background: #2C2D2E;
    }
  }
  /** SOCIALS */
  
  
  
  /** FOOTER RIGHT */
  .footer__right {
    position: absolute;
    right: 0;
    top: 0;
  }
  /** FOOTER RIGHT */
  
  /** FOOTER MIDDLE */
  .footer__middle {
    position: absolute;
    right: 0;
    top: 0;
    
    p {
      margin-bottom: -10px;
      color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
      
      > * {
        font-size: 14px;
        box-shadow: none;
        color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      }
    }
  }
  /** FOOTER MIDDLE */
  
  .footer__usefulLinks {
    position: absolute;
    left: 0;
    top: 11px;
  }
  
  .footer__poweredBy {
    position: absolute;
    left: 50%;
    top: 11px;
    transform: translateX(-50%);
  }
  
  .footer__contactMe {
    position: absolute;
    right: 0;
    top: 11px;
  }
  
  /** FOOTER SAYHELLO */
  .footer__sayHello {
    position: absolute;
    top: -32px;
    right: 0;
    
    .footer__botfield {
      margin: 10px 0 0;
      
      input {
        border-radius: 10px;
        padding: 0 10px;
      }
    }
    
    .footer__email {
      margin: 10px 0 0;
      
      input {
        border-radius: 10px;
        padding: 0 10px;
        width: 68%;
        outline: none;
        color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
        border-left: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-right: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        //border-top: none;
        border-top: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
        //border-bottom: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-bottom: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      }
    }
    
    .footer__message {
      margin: 10px 0 0;
      
      textarea {
        border-radius: 10px;
        padding: 0 10px;
        width: 350px;
        height: 110px;
        outline: none;
        resize: none;
        color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
        border-left: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-right: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        //border-top: none;
        border-top: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
        //border-bottom: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-bottom: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      }
    }
    
    .footer__sayHello--button {
      button {
        width: 30%;
        height: 31px; //29px
        position: absolute;
        top: 52px;
        left: 70%;
        border-radius: 10px;
        color: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
        background: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
        border-left: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-right: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        //border-top: none;
        border-top: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        //border-bottom: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-bottom: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
      }
    }
  }
  /** FOOTER SAYHELLO */
  
  .footer__container {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 0 auto;
  }
  
  .footer__left {
    flex: 0 0 32%;
    position: relative;
    margin: 0 0 1em;
    width: 100%;
    height: 100%;
  }
  
  .footer__middle {
    flex: 0 0 32%;
    position: relative;
    margin: 0px 0px 1em;
    width: 100%;
    height: 100%;
  }
  
  .footer__right {
    flex: 0 0 32%;
    position: relative;
    margin: 0 0 1em;
    width: 100%;
    height: 100%;
  }
  
  /** CREDIT */
  .footer__credit {
    height: 40px;
    width: 100%;
    
    position: fixed;
    left: 0;
    bottom: 0;
    
    background: ${props => props.theme === "light" ? "var(--runningLight)" : "var(--runningDark)"};
    
    transition: 300ms ease;
    
    .footer__creditname {
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      font-size: 16px;
      line-height: 38px;
      
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.06em;
      
      color: ${props => props.theme === "light" ? "var(--primaryLight3)" : "var(--primaryDark3)"};
    }
  }
  
  .footer__credit--minimize {
    background: ${props => props.theme === "light" ? "var(--runningLight2)" : "var(--runningDark2)"};
    box-shadow: 0px -8px 5px #aaaaaa2e;
  }
  /** CREDIT */
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  @media only screen and (max-width: 1140px) {
    .footer__left {
      flex: 0 0 50%;
    }
    
    .footer__middle {
      flex: 0 0 50%;
    }
    
    .footer__right {
      flex: 0 0 50%;
    }
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    
`;

export default FooterCss;
