import { createGlobalStyle } from "styled-components";

const HomeCss = createGlobalStyle`
  .home__ {
    position: absolute;
    top: 0%;
    left: 0%; //left: 15%;
    height: 100%;
    width: 100%; //width: 70%;
    background-color: ${props => props.theme.colorMode.secondary};
  }
  
  /** THEME */
  .home__theme {
    position: absolute;
    top: 4%;
    left: 50%;
    transform: scale(1.3) translate(-50%, -50%);
    text-align: center;
    cursor: pointer;
      
    .home__sunmoon {
      color: ${props => props.theme.colorMode.primary};
    }
    
    .js-home__sunmoon--show {
      display: block;
    }
    
    .js-home__sunmoon--hide {
      display: none;
    }
  }
  /** THEME */
  
  /** MAIN-INFO */
  .home__maininfo {
    position: absolute;
    top: 48%;
    left: 50%;
    /** Centering Horizontal */
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    .home__meanimated {
      width: 20%;
      height: 20%;
      filter: drop-shadow(0px 5px 5px rgba(${props =>
        props.theme.colorMode.shadow}));
    }
    
    .home__name {
      margin: 0;
      padding: 0;
      font-size: 300%;
      letter-spacing: 1px;
      color: ${props => props.theme.colorMode.primary};
      
      span {
        .home__name--P {
          font-size: 80%;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${props => props.theme.colorMode.tertiary};
        }
        
        .home__name--R {
          font-size: 85%;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${props => props.theme.colorMode.tertiary};
        }
      }
    }
    
    .home__name--emphasis {
      color: ${props => props.theme.colorMode.tertiary};
    }
    
    .home__socials {
      position: relative;
      top: -18px;
      font-size: 100%;
      color: ${props => props.theme.colorMode.primary};
      line-height: 1;
      
      & > * {
        box-shadow: none;
      }
      
      .home__reddit {
        color: ${props => props.theme.colorMode.reddit};
        
        &:hover {
          color: black;
        }
      }
      
      .home__facebook {
        color: ${props => props.theme.colorMode.facebook};
      }
      
      .home__instagram {
        ${props => props.theme.colorMode.instagram}
      }
      
      .home__twitter {
        color: ${props => props.theme.colorMode.twitter};
      }
      
      .home__youtube {
        ${props => props.theme.colorMode.youtube};
      }
      
      .home__linkedin {
        color: ${props => props.theme.colorMode.linkedin};
      }
      
      .home__gmail {
        color: ${props => props.theme.colorMode.gmail};
      }
      
      .home__aboutme {
        ${props => props.theme.colorMode.aboutme}
      }
      
      .home__github {
        color: ${props => props.theme.colorMode.github};
      }
      
      .home__portfolio {
        ${props => props.theme.colorMode.portfolio}
      }
    }
    
    .home__interests {
      position: relative;
      top: -18px;
      font-size: 100%;
      color: ${props => props.theme.colorMode.primary};
      line-height: 1;
    }
  }
  /** MAIN-INFO */
  
  /** SCROLL */
  .home__scroll {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    .home__outside {
      height: 25px;
      width: 15px;
      border-radius: 30%;
      border: 3px solid ${props => props.theme.colorMode.primary};
      
      .home__inside {
        position: absolute;
        top: 5px;
        left: 5px;
        height: 10px;
        width: 5px;
        border-radius: 40%;
        background-color: ${props => props.theme.colorMode.tertiary};
        
        transform: translatey(0px);
        animation: scroll-down 2s ease-in infinite;
      }
    }
  }
    
  // Scroll Animation
  @keyframes scroll-down {
    0% {
      transform: translatey(0px);
    }
    95% {
      transform: translatey(5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  /** SCROLL */
  
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
    .home__name {
      line-height: 30px;
      font-size: 240% !important;
    }
    
    .home__socials {
      top: -5px !important;
      font-size: 80% !important;
    }
    
    .home__interests {
      top: -8px !important;
      line-height: 14px;
      font-size: 80% !important;
    }
    /** MAIN-INFO */
  }
  
  // 320 *.9
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    /** MAIN-INFO */
    .home__name {
      line-height: 30px;
      font-size: 270% !important;
    }
    
    .home__socials {
      top: -5px !important;
      font-size: 90% !important;
    }
    
    .home__interests {
      top: -8px !important;
      line-height: 14px;
      font-size: 90% !important;
    }
    /** MAIN-INFO */
  }
  /** RESPONSIVE */
`;

export default HomeCss;
