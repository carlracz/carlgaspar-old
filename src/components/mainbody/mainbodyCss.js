import { createGlobalStyle } from "styled-components";

const MainbodyCss = createGlobalStyle`
  /** MAINBODY */
  .mainbody__ {
    min-height: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    
    //background-color: ${props => props.theme.colorMode.secondary};
  }
  /** MAINBODY */
  
  /** MAINBODY CONTAINER */
  .mainbody__container {
    width: 100%;
    max-width: 1050px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin: 0px auto auto;
    padding: 242px 1.5em 242px; // 222px? for smaller? t lr b
    
    height: 100%;
  }
  /** MAINBODY CONTAINER */
  
  /** NAME */
  .mainbody__name {
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
    
    .mainbody__name--emphasis {
      color: ${props => props.theme.colorMode.tertiary};
    }
  }
  /** NAME */
  
  /** SOCIALS */
  .mainbody__socials {
    width: 317px;
    height: 39px;
    
    position: absolute;
    bottom: 74px;
    // Center Horizontal
    right: 50%;
    transform: translateX(50%);
    
    & > * {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 7px;
      
      border-radius: 8px;
    }
  
    .mainbody__reddit {
      left: 12px;
      background: #FF3D00;
    }
    
    .mainbody__facebook {
      left: 46px;
      background: #00A3FF;
    }
    
    .mainbody__instagram {
      left: 80px;
      background: #BD00FF;
    }
    
    .mainbody__twitter {
      left: 114px;
      background: #00FFF0;
    }
    
    .mainbody__github {
      left: 148px;
      background: #006FD6;
    }
    
    .mainbody__youtube {
      left: 182px;
      background: #FF0000;
    }
    
    .mainbody__linkedin {
      left: 216px;
      background: #218BEE;
    }
    
    .mainbody__aboutme {
      left: 250px;
      background: #676869;
    }
    
    .mainbody__portfolio {
      left: 284px;
      background: #2C2D2E;
    }
  }
  /** SOCIALS */
  
  /** NAVIGATION */
  .mainbody__navigation {
    width: 330px;
    height: 40px;
    
    position: absolute;
    top: 120px;
    // Center Horizontal
    left: 50%;
    transform: translateX(-50%);
    
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
    
    .mainbody__home {
      width: 68px;
      left: 0px;
    }
    
    .mainbody__featured {
      width: 89px;
      left: 70px;
    }
    
    .mainbody__stopper {
      width: 8px;
      left: 169px;
    }
    
    .mainbody__blog {
      width: 45px;
      left: 187px;
    }
    
    .mainbody__portfolio {
      width: 88px;
      left: 242px;
    }
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

export default MainbodyCss;
