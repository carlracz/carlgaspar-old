import React from "react"

import GlobalCss from "./../globalCss"
import HeaderCss from "../header/headerCss"
import UtilitiesCss from "../utilities/utilitiesCss"
import The404Css from "../../pages/404/the404Css"
import FooterCss from "../footer/footerCss"

const The404CssHolder = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <UtilitiesCss theme={props.theme} />
    <The404Css theme={props.theme} />
    <FooterCss theme={props.theme} />
  </>
);

export default The404CssHolder;
