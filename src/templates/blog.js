import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import storage from "local-storage-fallback"

import SEO from "../components/seo"
import config from "../utils/siteConfig"

import Header from "../components/header"
import Page from "../components/page"
import Utilities from "../components/utilities"
import Footer from "../components/footer"
import PageCssHolder from "../components/css/pageCssHolder"

class BlogTemplate extends React.Component {
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
    const allContentfulPage = data.allContentfulBlog.edges

    return (
      <>
        <SEO
          title={config.siteTitle + ` - Blog`}
          description={config.siteDescription}
        />
        <Header />
        <Page
          allContentfulPage={allContentfulPage}
          footer={<Footer utilities={<Utilities setTheme={this.setTheme} />} />}
        />
        <PageCssHolder theme={this.state.theme} />
      </>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlog {
      edges {
        node {
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
  }
`
