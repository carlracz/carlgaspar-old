import React, { Component } from "react";
import { Link } from "gatsby";

import Typist from "react-typist";
import { Animated } from "react-animated-css";

import "react-typist/dist/Typist.css";

class Home extends Component {
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
      <div className={"home__"}>
        <div className="home__maininfo">
          <Animated
            animationIn="bounceInLeft"
            animationOut="bounceOutLeft"
            isVisible={this.props.atHome}
            animationInDuration={2000}
            animationOutDuration={1000}
          >
            <div className="home__name">
              {this.state.isTyping ? (
                <Typist
                  onTypingDone={this.done}
                  avgTypingDelay={110}
                  cursor={this.cursor}
                >
                  <Typist.Delay ms={1000} />
                  Carl{" "}
                  <span className="home__name--emphasis">
                    Gas
                    <span>
                      <span className="home__name--P">P</span>
                    </span>
                    a
                    <span>
                      <span className="home__name--R">R</span>
                    </span>
                  </span>
                  <Typist.Backspace count={13} delay={4000} />
                  <Typist.Delay ms={1000} />
                  <span className="home__name--emphasis">@</span>
                  carlracz
                  <Typist.Backspace count={9} delay={4000} />
                  <Typist.Delay ms={1000} />
                  <span className="home__name--emphasis">#</span>
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
            isVisible={this.props.atHome}
            animationInDuration={2000}
            animationOutDuration={1000}
          >
            <p className="home__socials">
              <Link to="/asd" className="home__reddit">
                Reddit
              </Link>{" "}
              <a
                href="asd"
                className="home__facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
              <a
                href="asd"
                className="home__instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              <a
                href="asd"
                className="home__twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              <a
                href="asd"
                className="home__github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              <a
                href="asd"
                className="home__youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>{" "}
              <a
                href="asd"
                className="home__linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              <a
                href="asd"
                className="home__aboutme"
                target="_blank"
                rel="noopener noreferrer"
              >
                About.me
              </a>{" "}
              <a
                href="asd"
                className="home__portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>{" "}
              <a
                href="asd"
                className="home__portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate? :D
              </a>{" "}
            </p>
          </Animated>

          <Animated
            animationIn="bounceIn"
            animationOut="bounceOutDown"
            isVisible={this.props.atHome}
            animationInDuration={2000}
            animationOutDuration={1000}
          >
            <p className="home__interests">
              Interests: Programming (Java, ReactJS, Docker, asdf), Videography,
              Youtube, Investing, Dota2
            </p>
          </Animated>
        </div>

        <Animated
          animationIn="bounceIn"
          animationOut="bounceOutDown"
          isVisible={this.props.atHome}
          animationInDuration={2000}
          animationOutDuration={1000}
        >
          <div className="home__scroll">
            <div className="home__outside">
              <div className="home__inside"></div>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Home;
