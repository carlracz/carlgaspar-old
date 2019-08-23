import React from "react"

import GlobalCss from "../../pages/globalCss"
import HomeCss from "../../pages/home/homeCss"
import HeaderCss from "../header/headerCss"
import FeaturedCss from "../../pages/featured/featuredCss"

const ColorMode = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HomeCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <FeaturedCss theme={props.theme} />
  </>
);

export default ColorMode;
