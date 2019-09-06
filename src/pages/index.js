import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import storage from "local-storage-fallback";

import Header from "../components/header";
import Featured from "../components/featured";
import Utilities from "../components/utilities";
import Footer from "../components/footer";
import IndexCssHolder from "../components/css/indexCssHolder"

class Index extends React.Component {
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
      storage.setItem("CarlGasparTheme", "dark");
      this.setDarkTheme();
    } else {
      storage.setItem("CarlGasparTheme", "light");
      this.setLightTheme();
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
    const siteTitle = data.site.siteMetadata.title
    const blog = data.allContentfulBlogPost.edges
    const advertisement = data.allContentfulAdvertisement.edges

    return (
      <>
      {/* <Layout location={this.props.location} title={siteTitle}> */}
        <SEO title="All blog" />
        <Header />
        <Featured 
          blog={blog}
          advertisement={advertisement}
          footer={<Footer utilities={<Utilities setTheme={this.setTheme} />} />}
        />
        <IndexCssHolder theme={this.state.theme} />
      {/* </Layout> */}
      </>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost (sort: { fields: [lastUpdated], order: DESC }) {
      edges {
        node {
          title
          subtitle
          slug
          timeToRead
          published(formatString: "MMMM DD, YYYY")
          lastUpdated(formatString: "MMMM DD, YYYY")
          featured
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tags
          tier
        }
      }
    }
    allContentfulAdvertisement (sort: { fields: [lastUpdated], order: DESC }) {
      edges {
        node {
          title
          subtitle
          slug
          timeToRead
          published(formatString: "MMMM DD, YYYY")
          lastUpdated(formatString: "MMMM DD, YYYY")
          featured
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tags
          tier
        }
      }
    }
  }
`
