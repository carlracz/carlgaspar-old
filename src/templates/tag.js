import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import storage from "local-storage-fallback"

import SEO from "../components/seo"
import config from "../utils/siteConfig"

import Header from "../components/header"
import Tag from "../components/tag"
import Utilities from "../components/utilities"
import Footer from "../components/footer"
import TagCssHolder from "../components/css/tagCssHolder"

class TagTemplate extends React.Component {
  state = {
    theme: "light"
  }

  componentDidMount = () => {
    // Determine what is the theme
    const savedTheme = storage.getItem("CarlGasparTheme")
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
    const contentfulTag = data.contentfulTag

    return (
      <>
        <SEO
          title={config.siteTitle + ` - ${contentfulTag.title}`}
          description={config.siteDescription}
        />
        <Header />
        <Tag
          contentfulTag={contentfulTag}
          footer={<Footer utilities={<Utilities setTheme={this.setTheme} />} />}
        />
        <TagCssHolder theme={this.state.theme} />
      </>
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query ContentfulTagBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulTag(slug: { eq: $slug }) {
      title
      blog {
        title
        published(formatString: "MMMM DD, YYYY")
        lastUpdated(formatString: "MMMM DD, YYYY")
        timeToRead
        subtitle
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        tier
      }
    }
  }
`
