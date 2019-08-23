import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactFullpage from "@fullpage/react-fullpage";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Home from "./home"
import Header from "../components/header"
import Featured from "./featured"

class FullPage extends React.Component {
  state = {
    atHome: true,
    atFeatured: false,
    isHomeAnimated: false, // if not animated yet, dont animate at first
  }
  
  render() {
    return (
      <ReactFullpage
        sectionsColor={[""]} // There is a fucking error without this
        scrollOverflow={true}
        scrollingSpeed={1000}
        fixedElements={[".header__"]}
        onLeave={(origin, destination, direction) => {
          if (destination.index === 1) {
            this.setState({
              atHome: false,
              atFeatured: true,
              isHomeAnimated: true
            });
          } else if (destination.index === 0) {
            this.setState({
              atHome: true,
              atFeatured: false
            });
          }
        }}
        render={({ state, fullpageApi }) => {
          if (fullpageApi !== undefined) {
            if (this.state.atHome) {
              fullpageApi.setAllowScrolling(true);
              fullpageApi.setKeyboardScrolling(true);
            } else if (this.state.atFeatured) {
              fullpageApi.setAllowScrolling(false, "up")
              fullpageApi.setKeyboardScrolling(false, "up");
            }
          }
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home
                  atHome={this.state.atHome}
                  animate={this.animate}
                />
              </div>
              
              <div className="section">
                <Header
                  atFeatured={this.state.atFeatured}
                  toHome={() => fullpageApi.moveSectionUp()}
                  isHomeAnimated={this.state.isHomeAnimated}
                />
                <Featured 
                  atFeatured={this.state.atFeatured}
                  posts={this.props.posts}
                  rhythm={rhythm}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}



export default FullPage
