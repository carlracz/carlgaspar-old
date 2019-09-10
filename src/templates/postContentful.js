import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

import storage from "local-storage-fallback";

import Header from "../components/header";
import Utilities from "../components/utilities";
import Footer from "../components/footer";
import PostContentfulCssHolder from "../components/css/postContentfulCssHolder";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

class PostContentful extends React.Component {
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
    const post = this.props.data.contentfulBlog;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <div className="postContentful">
        {/*<Layout location={this.props.location} title={siteTitle}>*/}
        <SEO title={post.title} description={post.subtitle} />
        <Header />
        <div className="postContentful__image">
          <Img fluid={post.image.fluid} />
          <h1 className="postContentful__title">{post.title}</h1>
        </div>

        <div className="postContentful__container">
          <div className="postContentful__tags">
            {post.tags.map(tag => (
              <Link to={"/"} rel="next">
                {tag.title}
              </Link>
            ))}
          </div>

          <div className="postContentful__details">
            <p>
              <span className="postContentful__published">
                📅{" "}
                <span className="postContentful__published--tooltiptext --none">
                  {post.published !== post.lastUpdated
                    ? post.published + " • "
                    : ""}
                </span>
              </span>
              {post.published === post.lastUpdated // If post has not updated yet
                ? post.published + " • "
                : "✏️️ " + post.lastUpdated + " • "}
              ⏱ {post.timeToRead} min read
            </p>
          </div>
          <div className="postContentful__post">
            <p
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(post.content.json)
              }}
            />
          </div>

          <ul className="postContentful__navigation">
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
        {/*</Layout>*/}
        <Footer utilities={<Utilities setTheme={this.setTheme} />} />
        <PostContentfulCssHolder theme={this.state.theme} />
      </div>
    );
  }
}

export default PostContentful;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
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
`;
