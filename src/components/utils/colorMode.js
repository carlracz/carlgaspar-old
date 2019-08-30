import React from "react"

import GlobalCss from "../../pages/globalCss"
import HomeCss from "../../pages/home/homeCss"
import HeaderCss from "../header/headerCss"
import MainbodyCss from "../mainbody/mainbodyCss"
import FeaturedCss from "../../pages/featured/featuredCss"
import FooterCss from "../footer/footerCss"

const ColorMode = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HomeCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <MainbodyCss theme={props.theme} />
    <FeaturedCss theme={props.theme} />
    <FooterCss theme={props.theme} />
  </>
);

export default ColorMode;
