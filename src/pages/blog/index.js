import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm } from "../../utils/typography"

import storage from "local-storage-fallback";

import Header from "../../components/header";
import Featured from "../../components/featured";
import Utilities from "../../components/utilities";
import Footer from "../../components/footer";
import IndexCssHolder from "../../components/css/indexCssHolder"

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
    const allContentfulPage = data.allContentfulPage.edges/*.node.title === "Featured" ? data.allContentfulPage.edges.node.post : ""*/
    
    return (
      <>
      {/* <Layout location={this.props.location} title={siteTitle}> */}
        <SEO title="All blog" />
        <Header />
        <Featured 
          allContentfulPage={allContentfulPage}
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
    allContentfulPage {
      edges {
        node {
          title
          post {
            ... on ContentfulAdvertisement {
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
              tags {
                title
              }
              tier
            }
            ... on ContentfulBlog {
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
              tags {
                title
              }
              tier
            }
          }
        }
      }
    }
  }
`

/*
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlog (sort: { fields: [lastUpdated], order: DESC }) {
      edges {
        node {
          title
          subtitle
          slug
          timeToRead
          published(formatString: "MMMM DD, YYYY")
          lastUpdated(formatString: "MMMM DD, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tags {
            title
          }
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
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tags {
            title
          }
          tier
        }
      }
    }
  }
`
*/