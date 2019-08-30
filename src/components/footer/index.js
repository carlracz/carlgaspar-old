import React, { Component } from "react";
import { Link } from "gatsby";

import Typist from "react-typist";
import { Animated } from "react-animated-css";

import "react-typist/dist/Typist.css";
import facebook from "../../../content/assets/Socials/facebook.svg"


class Footer extends Component {
  state = {
    footer: "",
    footerName: "",
    footerSocials: "",
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

  componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 100) {
      this.setState({
        //footer: "footer--minimized",
        //footerName: "footer__name--minimized",
        //footerSocials: "footer__socials--minimized"
      });
      console.log("bottom 100")
    }
    else {
      this.setState({
        footer: "",
        footerName: "",
        footerSocials: ""
      });
      console.log("NOT bottom")
    }
  }
  
  render() {
    return (
      <div className={"footer__ " + this.state.footer}>
        <div className="footer__container">
          <div className={"footer__name " + this.state.footerName}>
            <div>
              CARL{" "}
              <span className="--emphasis">
                GASPAR
              </span>
            </div>
            <div className="footer__summary">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          
          <div className={"footer__socials " + this.state.footerSocials}>
            <a
              href="asd"
              className="footer__reddit"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__aboutme"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="footer__portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
          </div>
        </div>
        
        <div className="footer__credit">
          <div className="footer__creditname">
            <span className="--emphasis">@</span>
            carlracz{" "}
            <span className="--emphasis">|</span>{" "}
            Designed by Carl{" "}
            <span className="--emphasis">Gaspar</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
