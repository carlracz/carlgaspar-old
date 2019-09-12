import React from "react"

import GlobalCss from "./../globalCss"
import HeaderCss from "../header/headerCss"
import PostCss from "../post/postCss"
import UtilitiesCss from "../utilities/utilitiesCss"
import FooterCss from "../footer/footerCss"

const PostCssHolder = (props) => (
  <>
    <GlobalCss theme={props.theme} />
    <HeaderCss theme={props.theme} />
    <PostCss theme={props.theme} />
    <UtilitiesCss theme={props.theme} />
    <FooterCss theme={props.theme} />
  </>
);

export default PostCssHolder;
