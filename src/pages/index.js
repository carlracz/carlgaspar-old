import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactFullpage from "@fullpage/react-fullpage";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Header from "../components/header";
import Mainbody from "../components/mainbody";
import ColorMode from "../components/utils/colorMode"

class BlogIndex extends React.Component {
  state = {
    atHome: true,
    atFeatured: false,
    
    colorMode: {
      primary: "#000000",
      secondary: "#ffffff",
      tertiary: "#0069FF",

      reddit: "#ff4301",
        f: "#3b5998",
        acebook: "#3b5998",
        instagram: `background: -webkit-linear-gradient(45deg,
          rgba(64,93,230,1) 0%,
          rgba(88,81,219,1) 11.11111111111111%,
          rgba(131,58,180,1) 22.22222222222222%,
          rgba(193,53,132,1) 33.33333333333333%,
          rgba(225,48,108,1) 44.44444444444444%,
          rgba(253,29,29,1) 55.55555555555555%,
          rgba(245,96,64,1) 66.66666666666666%,
          rgba(247,119,55,1) 77.77777777777777%,
          rgba(252,175,69,1) 88.88888888888888%,
          rgba(255,220,128,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`,
        twitter: "#38a1f3",
        youtube: "color: #ff0000;",
        linkedin: "#0e76a8",

      shadow: "0, 0, 0, 0.3" // Shadow requires RGBa
    },
  }
  
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const blogPosts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All blogPosts" />
        <Header />
        <Mainbody 
          blogPosts={blogPosts}
          rhythm={rhythm}
        />
        {/*<Featured 
          blogPosts={this.props.blogPosts}
          rhythm={rhythm}
        />
        <Footer />*/}
        <ColorMode theme={this.state} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          subtitle
          slug
          published(formatString: "MMM DD, YYYY")
          modified(formatString: "MMM DD, YYYY")
          featured
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tags
        }
      }
    }
  }
`
