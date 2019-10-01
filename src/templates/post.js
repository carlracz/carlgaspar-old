import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import storage from "local-storage-fallback"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import SEO from "../components/seo"
import config from "../utils/siteConfig"

import Header from "../components/header"
import Post from "../components/post"
import Utilities from "../components/utilities"
import Footer from "../components/footer"
import PostCssHolder from "../components/css/postCssHolder"

class PostTemplate extends React.Component {
  state = {
    theme: "light"
  };

  componentDidMount = () => {
    // Determine what is the theme
    let savedTheme = storage.getItem("CarlGasparTheme")
    if (!savedTheme) {
      savedTheme = "light"
    }
    savedTheme === "light" ? this.setLightTheme() : this.setDarkTheme()
  }

  /** THEME */
  setTheme = () => {
    if (this.state.theme === "light") {
      storage.setItem("CarlGasparTheme", "dark")
      this.setDarkTheme()
    } else {
      storage.setItem("CarlGasparTheme", "light")
      this.setLightTheme()
    }
  }

  setLightTheme = () => {
    this.setState({ theme: "light" })
  }

  setDarkTheme = () => {
    this.setState({ theme: "dark" })
  }
  /** THEME */

  render() {
    const { data } = this.props
    const contentfulBlog = data.contentfulBlog
    const { previous, next } = this.props.pageContext

    return (
      <>
        <SEO
          title={
            config.siteTitle + ` - Blog`
          }
          description={config.siteDescription}
        />
        <Header />
        <Post 
          contentfulBlog={contentfulBlog}
          previous={previous}
          next={next}
          footer={<Footer utilities={<Utilities setTheme={this.setTheme} />} />}
        />
        <PostCssHolder theme={this.state.theme} />
      </>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query ContentfulPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlog(slug: { eq: $slug }) {
      title
      subtitle
      tags {
        title
        slug
      }
      timeToRead
      published(formatString: "MMMM DD, YYYY")
      lastUpdated(formatString: "MMMM DD, YYYY")
      image {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        json
      }
    }
  }
`
