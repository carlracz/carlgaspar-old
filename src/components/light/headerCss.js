import { createGlobalStyle } from "styled-components";

const HeaderCss = createGlobalStyle`
  /** HEADER */
  .header__ {
    position: fixed;
    height: 242px;
    left: 0px;
    right: 0px;
    top: 0px;
    padding: 0 1.5em;
    
    background: #FAFAFA;
    //background-color: ${props => props.theme.colorMode.secondary};
    z-index: 1; // Mainbody has no z-index (means 0)
    
    transition: 300ms ease;
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
  
  /** NAME */
  .header__name {
    width: 270px;
    height: 77px;

    position: absolute;
    bottom: 94px;
    // Center Horizontal
    left: 50%;
    transform: translateX(-50%);
    
    font-size: 48px;
    line-height: 76px;
    text-align: center;
    letter-spacing: -0.06em;
    
    color: ${props => props.theme.colorMode.primary};
    
    transition: 300ms ease;
    
    .header__name--emphasis {
      color: ${props => props.theme.colorMode.tertiary};
    }
  }
  
  .header__name--minimized {
    bottom: 15px;
    left: 0;
    transform: unset;
  }
  
  .header__name--minimized2 {
    bottom: 0px;
    left: 0;
    transform: unset;
  }
  /** NAME */
  
  /** SOCIALS */
  .header__socials {
    width: 297px;
    height: 39px;
    
    position: absolute;
    bottom: 74px;
    // Center Horizontal
    right: 50%;
    transform: translateX(50%);
  
    transition: 300ms ease;
    
    & > * {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 7px;
      
      border-radius: 8px;
      
      transition: 300ms ease;
    }
  
    .header__reddit {
      left: 0px;
      background: #FF3D00;
    }
    
    .header__facebook {
      left: 34px;
      background: #00A3FF;
    }
    
    .header__instagram {
      left: 68px;
      background: #BD00FF;
    }
    
    .header__twitter {
      left: 102px;
      background: #00FFF0;
    }
    
    .header__github {
      left: 136px;
      background: #006FD6;
    }
    
    .header__youtube {
      left: 170px;
      background: #FF0000;
    }
    
    .header__linkedin {
      left: 204px;
      background: #218BEE;
    }
    
    .header__aboutme {
      left: 238px;
      background: #676869;
    }
    
    .header__portfolio {
      left: 272px;
      background: #2C2D2E;
    }
  }
  
  .header__socials--minimized {
    width: 406px;
    height: 50px;
    bottom: 33px;
    right: 0;
    transform: unset;
    
    & > * {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 7px;
      
      border-radius: 8px;
    }
    
    .header__reddit {
      left: 1px;
    }
    
    .header__facebook {
      left: 47px;
    }
    
    .header__instagram {
      left: 93px;
    }
    
    .header__twitter {
      left: 139px;
    }
    
    .header__github {
      left: 185px;
    }
    
    .header__youtube {
      left: 231px;
    }
    
    .header__linkedin {
      left: 277px;
    }
    
    .header__aboutme {
      left: 323px;
    }
    
    .header__portfolio {
      left: 369px;
    }
  }
  
  .header__socials--minimized2 {
    width: 406px;
    height: 50px;
    bottom: 17px;
    right: 0;
    transform: unset;
    
    & > * {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 7px;
      
      border-radius: 8px;
    }
    
    .header__reddit {
      left: 1px;
    }
    
    .header__facebook {
      left: 47px;
    }
    
    .header__instagram {
      left: 93px;
    }
    
    .header__twitter {
      left: 139px;
    }
    
    .header__github {
      left: 185px;
    }
    
    .header__youtube {
      left: 231px;
    }
    
    .header__linkedin {
      left: 277px;
    }
    
    .header__aboutme {
      left: 323px;
    }
    
    .header__portfolio {
      left: 369px;
    }
  }
  /** SOCIALS */
  
  /** NAVIGATION */
  .header__navigation {
    width: 330px;
    height: 40px;
    
    position: absolute;
    top: 120px;
    // Center Horizontal
    left: 50%;
    transform: translateX(-50%);
    
    transition: 300ms ease;
    
    & > * {
      height: 38px;
      position: absolute;
      top: 2px;
      
      font-size: 24px;
      line-height: 38px;
      
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.06em;
      
      color: #4F4F4F;
    }
    
    .header__home {
      width: 68px;
      left: 0px;
    }
    
    .header__featured {
      width: 89px;
      left: 70px;
    }
    
    .header__stopper {
      width: 8px;
      left: 169px;
    }
    
    .header__blog {
      width: 45px;
      left: 187px;
    }
    
    .header__portfolio {
      width: 88px;
      left: 242px;
    }
  }
  
  .header__navigation--minimized {
    top: 16px;
    left: 105%;
    transform: unset;
  }
  
  .header__navigation--minimized2 {
    top: 16px;
    left: 105%;
    transform: unset;
  }
  
  .header__navigation--minimized3 {
    top: 125px;
    left: 50%;
    transform: translateX(-50%);
  }
  /** NAVIGATION */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  // 319 v * .8
  @media only screen and (max-width: 319px) {
    
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    
`;

export default HeaderCss;
