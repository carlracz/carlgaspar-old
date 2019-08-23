import { createGlobalStyle } from "styled-components";

const HomeCss = createGlobalStyle`
  .header__ {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.colorMode.secondary};
  }
  
  .header__name--emphasis {
    color: ${props => props.theme.colorMode.tertiary};
  }
  
  /** NAME */
  .header__name {
    position: absolute;
    top: -10px;
    left: 12px;
    font-size: 300%;
    cursor: pointer;
    color: ${props => props.theme.colorMode.primary};
    
    span {
      .header__name--P {
        font-size: 80%;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${props => props.theme.colorMode.tertiary};
      }
      
      .header__name--R {
        font-size: 85%;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${props => props.theme.colorMode.tertiary};
      }
    }
  }
  /** NAME */
  
  /** SOCIALS */
  .header__socials {
    position: absolute;
    right: 0%;
    font-size: 100%;
    color: ${props => props.theme.colorMode.primary};
    
    & > * {
      box-shadow: none;
    }
    
    .header__reddit {
      color: ${props => props.theme.colorMode.reddit};
      
      &:hover {
        color: black;
      }
    }
    
    .header__facebook {
      color: ${props => props.theme.colorMode.facebook};
    }
    
    .header__instagram {
      ${props => props.theme.colorMode.instagram}
    }
    
    .header__twitter {
      color: ${props => props.theme.colorMode.twitter};
    }
    
    .header__youtube {
      ${props => props.theme.colorMode.youtube};
    }
    
    .header__linkedin {
      color: ${props => props.theme.colorMode.linkedin};
    }
    
    .header__gmail {
      color: ${props => props.theme.colorMode.gmail};
    }
    
    .header__aboutme {
      ${props => props.theme.colorMode.aboutme}
    }
    
    .header__github {
      color: ${props => props.theme.colorMode.github};
    }
    
    .header__portfolio {
      ${props => props.theme.colorMode.portfolio}
    }
  }
  /** SOCIALS */
  
  .atFeatured {
    position: sticky;
    top: 125px;
    font-size: 100%;
    color: ${props => props.theme.colorMode.primary};
    line-height: 1;
  }
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  // 319 v * .8
  @media only screen and (max-width: 319px) {
    /** MAIN-INFO */
    .header__name {
      line-height: 30px;
      font-size: 240% !important;
    }
    
    .header__socials {
      top: -5px !important;
      font-size: 80% !important;
    }
    
    .header__interests {
      top: -8px !important;
      line-height: 14px;
      font-size: 80% !important;
    }
    /** MAIN-INFO */
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    /** MAIN-INFO */
    .header__name {
      line-height: 30px;
      font-size: 270% !important;
    }
    
    .header__socials {
      top: -5px !important;
      font-size: 90% !important;
    }
    
    .header__interests {
      top: -8px !important;
      line-height: 14px;
      font-size: 90% !important;
    }
    /** MAIN-INFO */
  }
  /** RESPONSIVE */
`;

export default HomeCss;
