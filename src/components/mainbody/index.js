import React, { Component } from "react";
import { Link } from "gatsby";

import styled from "styled-components"
import Typist from "react-typist";
import { Animated } from "react-animated-css";

import "react-typist/dist/Typist.css";

const Post = styled.div `
  display: flex;
`

const PostText = styled.div `
  flex: 75%;
`

class Mainbody extends Component {
  state = {
    isTyping: true
  };

  // Typing Repeater
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
      <div className="mainbody__">
        <div className="mainbody__container">
        
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
          
        <h2>Carl</h2>
        <h2>Carl</h2>
        <h2>Carl</h2>
        </div>
        
        {this.props.footer}
      </div>
    );
  }
}

export default Mainbody;
