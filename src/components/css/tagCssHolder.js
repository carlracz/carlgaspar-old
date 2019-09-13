import React from "react"

import GlobalCss from "./../globalCss"
import HeaderCss from "../header/headerCss"
import TagCss from "../tag/tagCss"
import UtilitiesCss from "../utilities/utilitiesCss"
import FooterCss from "../footer/footerCss"

const IndexCssHolder = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <TagCss theme={props.theme} />
    <UtilitiesCss theme={props.theme} />
    <FooterCss theme={props.theme} />
  </>
);

export default IndexCssHolder;
