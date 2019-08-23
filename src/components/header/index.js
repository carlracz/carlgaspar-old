import React, { Component } from "react";
import { Link } from "gatsby";

import Typist from "react-typist";
import { Animated } from "react-animated-css";

import "react-typist/dist/Typist.css";

class Header extends Component {
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
      <div className={"header__"}>
        <Animated
          animationIn="bounceInLeft"
          animationOut="bounceOutLeft"
          isVisible={this.props.atFeatured}
          animationInDuration={2000}
          animationOutDuration={1000}
        >
          <div className="header__name" onClick={() => this.props.toHome()}>
            {this.state.isTyping ? (
              <Typist
                onTypingDone={this.done}
                avgTypingDelay={110}
                cursor={this.cursor}
              >
                <Typist.Delay ms={1000} />
                Carl{" "}
                <span className="header__name--emphasis">
                  Gas
                  <span>
                    <span className="header__name--P">P</span>
                  </span>
                  a
                  <span>
                    <span className="header__name--R">R</span>
                  </span>
                </span>
                <Typist.Backspace count={13} delay={4000} />
                <Typist.Delay ms={1000} />
                <span className="header__name--emphasis">@</span>
                carlracz
                <Typist.Backspace count={9} delay={4000} />
                <Typist.Delay ms={1000} />
                <span className="header__name--emphasis">#</span>
                carlblog
                <Typist.Backspace count={9} delay={4500} />
              </Typist>
            ) : (
              ""
            )}
          </div>
        </Animated>

        <Animated
          animationIn="bounceInRight"
          animationOut="bounceOutRight"
          isVisible={this.props.atFeatured}
          animationInDuration={2000}
          animationOutDuration={1000}
        >
          <p className="header__socials">
            <a
              href="asd"
              className="header__reddit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reddit
            </a>{" "}
            <a
              href="asd"
              className="header__facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            <a
              href="asd"
              className="header__instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            <a
              href="asd"
              className="header__twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            <a
              href="asd"
              className="header__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            <a
              href="asd"
              className="header__youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>{" "}
            <a
              href="asd"
              className="header__linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            <a
              href="asd"
              className="header__aboutme"
              target="_blank"
              rel="noopener noreferrer"
            >
              About.me
            </a>{" "}
            <a
              href="asd"
              className="header__portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>{" "}
            <a
              href="asd"
              className="header__portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate? :D
            </a>{" "}
          </p>
        </Animated>
      </div>
    );
  }
}

export default Header;
