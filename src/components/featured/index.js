import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

class Featured extends Component {
  render() {
    const { allContentfulPage } = this.props
    const { footer } = this.props
    
    return (
      <div className="featured">
        <div className="featured__container">
          <ul className="featured__posts">
            {allContentfulPage.map((post, key) => {
              return (
                <Link className="featured__post" key={key} to={post.slug}>
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
        {footer}
      </div>
    )
  }
}

export default Featured
