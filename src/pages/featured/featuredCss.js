import { createGlobalStyle } from "styled-components";

const HomeCss = createGlobalStyle`
  .featured__ {
    margin-top: 60px;
    background-color: ${props => props.theme.colorMode.secondary};
  }
  
  /** MAIN-INFO */
  .featured__maininfo {
    position: absolute;
    top: 48%;
    left: 50%;
    /** Centering Horizontal */
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    .featured__meanimated {
      width: 20%;
      height: 20%;
      filter: drop-shadow(0px 5px 5px rgba(${props =>
        props.theme.colorMode.shadow}));
    }
    
    .featured__name {
      margin: 0;
      padding: 0;
      font-size: 300%;
      letter-spacing: 1px;
      color: ${props => props.theme.colorMode.primary};
      
      span {
        .featured__name--P {
          font-size: 80%;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${props => props.theme.colorMode.tertiary};
        }
        
        .featured__name--R {
          font-size: 85%;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${props => props.theme.colorMode.tertiary};
        }
      }
    }
    
    .featured__socials {
      position: relative;
      top: -25px;
      font-size: 100%;
      color: ${props => props.theme.colorMode.primary};
      line-height: 1;
      
      .featured__reddit {
        color: ${props => props.theme.colorMode.reddit};
        
        &:hover {
          color: black;
        }
      }
      
      .featured__facebook {
        color: ${props => props.theme.colorMode.facebook};
      }
      
      .featured__instagram {
        ${props => props.theme.colorMode.instagram}
      }
      
      .featured__twitter {
        color: ${props => props.theme.colorMode.twitter};
      }
      
      .featured__youtube {
        ${props => props.theme.colorMode.youtube};
      }
      
      .featured__linkedin {
        color: ${props => props.theme.colorMode.linkedin};
      }
      
      .featured__gmail {
        color: ${props => props.theme.colorMode.gmail};
      }
      
      .featured__aboutme {
        ${props => props.theme.colorMode.aboutme}
      }
      
      .featured__github {
        color: ${props => props.theme.colorMode.github};
      }
      
      .featured__portfolio {
        ${props => props.theme.colorMode.portfolio}
      }
    }
    
    .featured__interests {
      position: relative;
      top: -35px;
      font-size: 100%;
      color: ${props => props.theme.colorMode.primary};
      line-height: 1;
    }
  }
  /** MAIN-INFO */
  
  .atFeatured {
    position: sticky;
    top: 125px;
    font-size: 100%;
    color: ${props => props.theme.colorMode.primary};
    line-height: 1;
  }
  
  /** BLOGLINK */
  .featured__blog {
    position: absolute;
    top: 96%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    .featured__v {
      cursor: pointer;
      font-size: 13px;
      color: ${props => props.theme.colorMode.primary};
      transform: translatey(0px);
      animation: blog-animation 1s ease-in infinite;
      
      &:hover {
        color: ${props => props.theme.colorMode.tertiary};
      }
    }
  }
    
  // Blog Animation
  @keyframes blog-animation {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  /** BLOGLINK */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  // 319 v * .8
  @media only screen and (max-width: 319px) {
    /** MAIN-INFO */
    .featured__name {
      line-height: 30px;
      font-size: 240% !important;
    }
    
    .featured__socials {
      top: -5px !important;
      font-size: 80% !important;
    }
    
    .featured__interests {
      top: -8px !important;
      line-height: 14px;
      font-size: 80% !important;
    }
    /** MAIN-INFO */
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    /** MAIN-INFO */
    .featured__name {
      line-height: 30px;
      font-size: 270% !important;
    }
    
    .featured__socials {
      top: -5px !important;
      font-size: 90% !important;
    }
    
    .featured__interests {
      top: -8px !important;
      line-height: 14px;
      font-size: 90% !important;
    }
    /** MAIN-INFO */
    
    /** BLOGLINK */
    .featured__bloglink--show {
      top: 60%;
      left: 50%;
    }
    
    .featured__bloglink--tooltiptext {
      display:none
    }
    /** BLOGLINK */
  }
  /** RESPONSIVE */
`;

export default HomeCss;
