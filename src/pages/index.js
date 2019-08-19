import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactFullpage from "@fullpage/react-fullpage";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Home from "../components/Home.js";

const Post = styled.div `
  display: flex;
`

const PostImage = styled.div `
  flex: 25%;
  margin-right: 1rem;
`

const PostText = styled.div `
  flex: 75%;
`

class BlogIndex extends React.Component {
  state = {
    atHome: true,
    atFeatured: false,
    
    sunMoon: {
      sun: "js-home__sunmoon--hide",
      moon: "js-home__sunmoon--show"
    },
  }
  
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        
        <ReactFullpage
          sectionsColor={[""]} // There is a fucking error without this
          scrollOverflow={true}
          scrollingSpeed={1000}
          onLeave={(origin, destination, direction) => {
            if (destination.index === 1) {
              this.setState({
                atHome: false,
                atFeatured: true
              });
            } else if (destination.index === 0) {
              this.setState({
                atHome: true,
                atFeatured: false
              });
            }
            /* console.log("onLeave - origin:" + origin + " destination:" +
            destination.index+ " direction:" + direction);
            */
          }} // OnEnter for atFeatured
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Home
                    home={this.state.home}
                    sunMoon={this.state.sunMoon}
                    setTheme={() => this.setTheme()}
                    atHome={this.state.atHome}
                  />
                </div>
                <div className="section">
                  {posts.map(({ node }) => {
                    const title = node.title || node.slug
                    return (
                      <Post key={node.slug}>
                        <PostImage>
                          <Img fluid={node.image.fluid} />
                        </PostImage>
                        <PostText>
                          <header>
                            <h3
                              style={{
                                marginBottom: rhythm(1 / 4),
                              }}
                            >
                              <Link style={{ boxShadow: `none` }} to={node.slug}>
                                {title}
                              </Link>
                            </h3>
                          </header>
                          <section>
                            <p>{node.subtitle}</p>
                          </section>
                        </PostText>
                      </Post>
                    )
                  })}
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                  <h1>carl</h1>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        
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
   allContentfulPost {
     edges {
       node {
         title
         subtitle
         image {
           fluid {
             ...GatsbyContentfulFluid
           }
         }
         author
         slug
       }
     }
   }
  }
`
