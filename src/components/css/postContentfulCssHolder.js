import React from "react"

import GlobalCss from "./../globalCss"
import HeaderCss from "../header/headerCss"
import PostContentful from "../../templates/postContentfulCss"
import UtilitiesCss from "../utilities/utilitiesCss"
import FooterCss from "../footer/footerCss"

const PostContentfulCssHolder = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <PostContentful theme={props.theme} />
    <UtilitiesCss theme={props.theme} />
    <FooterCss theme={props.theme} />
  </>
);

export default PostContentfulCssHolder;
