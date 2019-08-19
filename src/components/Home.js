import React, { Component } from "react";
import Typist from "react-typist";
import {Animated} from "react-animated-css";


//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

//import MeAnimated from "../Resources/Me Animated.png";

class Home extends Component {
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
      <div className={this.props.home}>
        <div className="home__theme" onClick={this.props.setTheme}>
          <a
            className={"home__sunmoon " + this.props.sunMoon.sun}
            
          />
          <a
            className={"home__sunmoon " + this.props.sunMoon.moon}
            
          />
        </div>

        <div className="home__maininfo">
          {/** TODO: <img src={MeAnimated} className="home__meanimated" alt="" /> **/}
          <Animated animationIn="fadeIn" animationOut="fadeOutLeft" isVisible={this.props.atHome} animationInDuration={2000} animationOutDuration={1000}>
            <div className="home__name">
              {this.state.isTyping ? (
                <Typist onTypingDone={this.done} avgTypingDelay={110} cursor={this.cursor}>
                  <Typist.Delay ms={1000} />
                  Carl {" "}
                  <span>
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
                  <span>@</span>
                  carlracz
                  <Typist.Backspace count={9} delay={4500} />
                </Typist>
              ) : (
                ""
              )}
            </div>
          </Animated>
          
          <Animated animationIn="fadeIn" animationOut="fadeOutRight" isVisible={this.props.atHome} animationInDuration={2000} animationOutDuration={1000}>
            <p className="home__socials">
              <a
                href="asd"
                className="home__reddit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>{" "}
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
              {/* Shouldn't disclose gmail account <a
                href="asd"
                className="home__gmail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>{" "}*/}
              <a
                href="asd"
                className="home__portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>{" "}
            </p>
          </Animated>
          
          <Animated animationIn="fadeIn" animationOut="fadeOutDown" isVisible={this.props.atHome} animationInDuration={2000} animationOutDuration={1000}>
            <p className="home__interests">
              Interests: Programming (Java, ReactJS, Docker, asdf), Videography, Youtube, Investing, Dota2
            </p>
          </Animated>
        </div>
          
        <div className="home__blog">
          <div className="home__v">
            V
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
