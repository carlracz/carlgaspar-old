import React, { Component } from "react";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Typist from "react-typist";
import {Animated} from "react-animated-css";

const Post = styled.div `
  display: flex;
`

const PostText = styled.div `
  flex: 75%;
`
class Featured extends Component {
  state = {
    isTyping: true
  };
  
  // Repeater
  done = () => {
    this.setState({ isTyping: false }, () => {
      this.setState({ isTyping: true });
    });
  };

  cursor = {
    element: "_"
  };
  
  render() {
    return (
      <>
      <div className={"featured__"}>
        {this.props.blogPosts.map(node => {
          node = node.node // Added node.NODE - because it is not working after the update. It was moved inside another node
          const title = node.title || node.slug
          if (node.featured) {
            return (
              <Post key={node.slug}>
                <PostText>
                  <header>
                    <h3
                      style={{
                        marginBottom: this.props.rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                        {title}
                      </Link>
                    </h3>
                  </header>
                  <section>
                    {/*<Link style={{ boxShadow: `none` }}>
                      <p className="featured__tags">
                        {
                          node.tags.map(tags => {
                            return tags + " "
                          })
                        }
                      </p>
                    </Link>*/}
                    <p className="featured__date">
                      {node.modified === null ? node.published : node.modified}
                    </p>
                    <p className="featured__subtitle">{node.subtitle}</p>
                    
                  </section>
                </PostText>
              </Post>
            )
        }
        })}
        <div className="footer__space"></div>
      </div></>
    );
  }
}

export default Featured;
