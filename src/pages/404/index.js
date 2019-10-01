import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import storage from "local-storage-fallback";

import Header from "../../components/header"
import Utilities from "../../components/utilities"
import Footer from "../../components/footer"
import The404CssHolder from "../../components/css/the404CssHolder"

class The404 extends React.Component {
  state = {
    theme: "light"
  }
  
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

    return (
      <div className="the404">
      {/*<Layout location={this.props.location} title={siteTitle}>*/}
        <SEO title="404: Not Found" />
        <Header />
          <div className="the404__container">
            <h1 className="the404__title">
              <span className="--emphasis">404</span> Page Not Found
            </h1>
            <p className="the404__subtitle">You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        <Footer utilities={<Utilities setTheme={this.setTheme} />} />
        <The404CssHolder theme={this.state.theme}/>
      {/*</Layout>*/}
      </div>
    )
  }
}

export default The404

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
