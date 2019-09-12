import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

class Post extends React.Component {
  render() {
    const { post } = this.props;
    const { previous, next } = this.props;

    return (
      <div className="post">
        <div className="post__image">
          <Img fluid={post.image.fluid} />
          <h1 className="post__title">{post.title}</h1>
        </div>

        <div className="post__container">
          <div className="post__tags">
            {post.tags.map(tag => (
              <Link to={tag.slug} rel="next">
                {tag.title}
              </Link>
            ))}
          </div>

          <div className="post__details">
            <p>
              <span className="post__published">
                📅{" "}
                <span className="post__published--tooltiptext --none">
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
          <div className="post__post">
            <p
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(post.content.json)
              }}
            />
          </div>

          <ul className="post__navigation">
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
        {this.props.footer}
      </div>
    )
  }
}

export default Post;
