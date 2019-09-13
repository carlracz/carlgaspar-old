import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

import config from "../utils/siteConfig";
import Pagination from "../components/Pagination";

import styled from "styled-components";
import storage from "local-storage-fallback";

import Header from "../components/header";
import Featured from "../components/featured";
import Utilities from "../components/utilities";
import Footer from "../components/footer";
import IndexCssHolder from "../components/css/indexCssHolder";

class IndexTemplate extends React.Component {
  state = {
    theme: "light"
  };

  componentDidMount = () => {
    // Determine what is the theme
    const savedTheme = storage.getItem("CarlGasparTheme");
    savedTheme === "light" ? this.setLightTheme() : this.setDarkTheme();
  };

  /** THEME */
  setTheme = () => {
    if (this.state.theme === "light") {
      storage.setItem("CarlGasparTheme", "dark");
      this.setDarkTheme();
    } else {
      storage.setItem("CarlGasparTheme", "light");
      this.setLightTheme();
    }
  };

  setLightTheme = () => {
    this.setState({ theme: "light" });
  };

  setDarkTheme = () => {
    this.setState({ theme: "dark" });
  };
  /** THEME */

  render() {
    const { data, pageContext } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    let allContentfulPage = data.allContentfulPage.edges;

    allContentfulPage.map(page => {
      page = page.node
      if (page.title === "Featured") {
        allContentfulPage = page.post;
        // Sorting by date. DESC
        allContentfulPage = allContentfulPage.sort(
          (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
        );
      }
    });

    const { currentPage } = pageContext;
    const isFirstPage = currentPage === 1;
    
    return (
      <>
        {/* <Layout location={this.props.location} title={siteTitle}> */}>
        <SEO
          title={
            config.siteTitle + (!isFirstPage ? `- Page ${currentPage}` : ``)
          }
          description={config.siteDescription}
        />
        <Header />
        <Featured
          allContentfulPage={allContentfulPage}
          footer={<Footer utilities={<Utilities setTheme={this.setTheme} />} />}
        />
        <Pagination context={pageContext} />
        <IndexCssHolder theme={this.state.theme} />
        {/* </Layout> */}
      </>
    )
  }
}

export default IndexTemplate

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
              tier
            }
          }
        }
      }
    }
  }
`;
