import React, { Component } from "react";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Typist from "react-typist";
import {Animated} from "react-animated-css";

const Post = styled.div `
  display: flex;
`

const PostImage = styled.div `
  flex: 25%;
  margin-right: 1rem;
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
        {this.props.posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug}>
              <PostImage>
                <Img fluid={node.image.fluid} />
              </PostImage>
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
                  <p>{node.subtitle}</p>
                </section>
              </PostText>
            </Post>
          )
        })}
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
        <h1>carl</h1>
      </div></>
    );
  }
}

export default Featured;
