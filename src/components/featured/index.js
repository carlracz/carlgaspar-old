import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <div className="featured__container">
          <ul className="featured__posts">
            {this.props.allContentfulPage.map(post => {
              return (
                <Link className="featured__post" key={post.uniqueId} style={{ boxShadow: `none` }} to={post.slug}>
                  <li>
                    <Img fluid={post.image.fluid} />
                    <p className="featured__contentModel">
                      {post.__typename === "ContentfulBlog" // If
                        ? "Blog" // Then
                        : post.__typename === "ContentfulAdvertisement" // Else - If
                          ? "Ad" // Then
                          : "" // Else
                      }
                    </p>
                    <h2 className="featured__postTitle">{post.title}</h2>
                    <div className="featured__postDetails">
                      <p className="featured__postPublished">
                        {post.lastUpdated ? post.lastUpdated : post.published}
                      </p>
                      <p className="featured__postTimeToRead">
                        {post.timeToRead} min read
                      </p>
                    </div>
                    <p className="featured__postSubtitle">{post.subtitle}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
        {this.props.footer}
      </div>
    );
  }
}

export default Featured;
