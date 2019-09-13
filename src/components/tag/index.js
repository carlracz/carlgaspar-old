import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

class Tag extends Component {
  render() {
    const { post } = this.props;
    
    return (
      <div className="page">
        <div className="page__container">
          <ul className="page__posts">
            <h1>{post.title}</h1>
            {post.blog.map(post => {
              return (
                <Link className="page__post" key={post.uniqueId} style={{ boxShadow: `none` }} to={post.slug}>
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
        {this.props.footer}
      </div>
    );
  }
}

export default Tag;
