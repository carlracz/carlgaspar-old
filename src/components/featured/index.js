import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <div className="featured__container">
          <ul className="featured__posts">
            {this.props.allContentfulPage.map(node => {
              // Added node.NODE - because it is not working after the update.
              // It was moved inside another node.
              node = node.node
              if(node.title === "Featured") {
                {node.post.map(post => {
                  return (
                    <li className="featured__post" key={post.uniqueId}>
                      {console.log(post)}
                      <Link style={{ boxShadow: `none` }} to={`/${post.slug}`}>
                        <Img fluid={post.image.fluid} />
                        <p className="featured__contentModel">
                          {post.__typename === "ContentfulBlog" // If
                            ? "Blog" // Then
                            : post.__typename === "ContentfulAdvertisement" // Else - If
                            ? "Advertisement" // Then
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
                      </Link>
                    </li>
                  )
                })}
              }
            })}
          </ul>
        </div>
        {this.props.footer}
      </div>
    );
  }
}

export default Featured;
