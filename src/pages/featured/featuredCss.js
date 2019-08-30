import { createGlobalStyle } from "styled-components";

const FeaturedCss = createGlobalStyle`
  .featured__ {
    background-color: ${props => props.theme.colorMode.secondary};
    
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-right: 1.3125rem;
    padding-bottom: 2.625rem;
    padding-left: 1.3125rem;
  }
  
  .featured__date {
    //font-size: 80%;
    margin-top: -5px;
  }
  
  .featured__subtitle {
    margin-top: -5px;
  }
  
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

export default FeaturedCss;
