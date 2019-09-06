import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

class Featured extends Component {
  c = this.props.blog.concat(this.props.advertisement)
  d = this.c.sort((a, b) => b.node.lastUpdated.localeCompare(a.node.lastUpdated)) // Reversed
  render() {
    return (
      <div className="featured">
        <div className="featured__container">
          {console.log(this.d)}
          <ul className="featured__posts">
            {this.d.map(node => {
              node = node.node // Added node.NODE - because it is not working after the update. It was moved inside another node
              if (node.featured) {
                return (
                  <li className="featured__post" key={node.uniqueId}>
                    <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                      <Img fluid={node.image.fluid} />
                      <p className="featured__contentModel">
                        {
                          node.tags[0] === "Blog"               // If
                            ? "Blog"                            // Then
                            : node.tags[0] === "Advertisement"  // Else - If
                              ? "Advertisement"                 // Then
                              : ""                              // Else
                        }
                      </p>
                      <h2 className="featured__postTitle">{node.title}</h2>
                      <div className="featured__postDetails">
                        <p className="featured__postPublished">{node.lastUpdated ? node.lastUpdated : node.published}</p>
                        <p className="featured__postTimeToRead">{node.timeToRead} min read</p>
                      </div>
                      <p className="featured__postSubtitle">{node.subtitle}</p>
                    </Link>
                  </li>
                )
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
