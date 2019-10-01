import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

class Page extends Component {
  render() {
    const { allContentfulPage } = this.props
    const { footer } = this.props
    
    return (
      <div className="page">
        <div className="page__container">
          <ul className="page__posts">
            {allContentfulPage.map((post, key) => {
              post = post.node
              return (
                <Link className="page__post" key={key} to={post.slug}>
                  <li>
                    <Img fluid={post.image.fluid} />
                    <h2 className="page__postTitle">{post.title}</h2>
                    <div className="page__postDetails">
                      <p className="page__postPublished">
                        {post.lastUpdated ? post.lastUpdated : post.published}
                      </p>
                      <p className="page__postTimeToRead">
                        {post.timeToRead} min read
                      </p>
                    </div>
                    <p className="page__postSubtitle">{post.subtitle}</p>
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

export default Page
