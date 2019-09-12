import React from "react"

import GlobalCss from "./../globalCss"
import HeaderCss from "../header/headerCss"
import PageCss from "../page/pageCss"
import UtilitiesCss from "../utilities/utilitiesCss"
import FooterCss from "../footer/footerCss"

const IndexCssHolder = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <PageCss theme={props.theme} />
    <UtilitiesCss theme={props.theme} />
    <FooterCss theme={props.theme} />
  </>
);

export default IndexCssHolder;
