import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

class Tag extends Component {
  render() {
    const { contentfulTag } = this.props;
    const tag = contentfulTag;

    return (
      <div className="page">
        <div className="page__container">
          <ul className="page__posts">
            <h1>{tag.title}</h1>
            {tag.blog.map((tag, key) => {
              return (
                <Link className="page__post" key={key} to={tag.slug}>
                  <li>
                    <Img fluid={tag.image.fluid} />
                    <h2 className="page__postTitle">{tag.title}</h2>
                    <div className="page__postDetails">
                      <p className="page__postPublished">
                        {tag.lastUpdated ? tag.lastUpdated : tag.published}
                      </p>
                      <p className="page__postTimeToRead">
                        {tag.timeToRead} min read
                      </p>
                    </div>
                    <p className="page__postSubtitle">{tag.subtitle}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {this.props.footer}
      </div>
    );
  }
}

export default Tag;
