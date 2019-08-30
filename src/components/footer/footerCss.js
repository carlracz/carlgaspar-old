import { createGlobalStyle } from "styled-components";

const FooterCss = createGlobalStyle`
  /** FOOTER */
  .footer__ {
    position: absolute;
    height: 242px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    
    background: #FAFAFA;
    //background-color: ${props => props.theme.colorMode.secondary};
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
  
  /** NAME */
  .footer__name {
    width: 270px;
    height: 77px;

    position: absolute;
    top: 25px;
    left: 0;
    
    font-size: 48px;
    line-height: 76px;
    text-align: center;
    letter-spacing: -0.06em;
    
    color: ${props => props.theme.colorMode.primary};
    
    transition: 300ms ease;
    
    .footer__name--emphasis {
      color: ${props => props.theme.colorMode.tertiary};
    }
    
    .footer__summary {
      position: absolute;
      top: 70px;
      left: 5px;
      width: 350px;
      font-size: 14px;
      text-align: left;
      line-height: 1;
      letter-spacing: 0;
    }
  }
  /** NAME */
  
  /** SOCIALS */
  .footer__socials {
    width: 317px;
    height: 39px;
    
    position: absolute;
    top: 170px;
    left: -10px;
    
    & > * {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 7px;
      
      border-radius: 8px;
      
      transition: 300ms ease;
    }
  
    .footer__reddit {
      left: 12px;
      background: #FF3D00;
    }
    
    .footer__facebook {
      left: 46px;
      background: #00A3FF;
    }
    
    .footer__instagram {
      left: 80px;
      background: #BD00FF;
    }
    
    .footer__twitter {
      left: 114px;
      background: #00FFF0;
    }
    
    .footer__github {
      left: 148px;
      background: #006FD6;
    }
    
    .footer__youtube {
      left: 182px;
      background: #FF0000;
    }
    
    .footer__linkedin {
      left: 216px;
      background: #218BEE;
    }
    
    .footer__aboutme {
      left: 250px;
      background: #676869;
    }
    
    .footer__portfolio {
      left: 284px;
      background: #2C2D2E;
    }
  }
  /** SOCIALS */
  
  /** CREDIT */
  .footer__credit {
    height: 40px;
    width: 100%;
    
    position: absolute;
    left: 0;
    
    background: #dedede;
    
    .footer__creditname {
      position: absolute;
      top: 3px;
      // Center Horizontal
      left: 50%;
      transform: translateX(-50%);
      
      font-size: 16px;
      line-height: 38px;
      
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.06em;
      
      color: #4F4F4F;
    }
  }
  /** CREDIT */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  // 319 v * .8
  @media only screen and (max-width: 319px) {
    
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    
`;

export default FooterCss;
