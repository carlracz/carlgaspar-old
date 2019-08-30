import React, { Component } from "react";
import { Link } from "gatsby";

import Typist from "react-typist";
import { Animated } from "react-animated-css";

import "react-typist/dist/Typist.css";
import facebook from "../../../content/assets/Socials/facebook.svg"


class Header extends Component {
  state = {
    header: "",
    headerName: "",
    headerSocials: "",
    headerNavigation: "",
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
  
  handleScroll = (e) => {
    let scrollPosition = Math.round(window.scrollY);
    // If we've scrolled 100px, add minimize class to the header
    if (scrollPosition >= 100 && scrollPosition < 200) {
      this.setState({
        header: "header--minimized",
        headerName: "header__name--minimized",
        headerSocials: "header__socials--minimized",
        headerNavigation: "header__navigation--minimized"
      });
    }
    // If we've scrolled 200px, add minimize class to the header
    else if (scrollPosition >= 200) {
      this.setState({
        header: "header--minimized2",
        headerName: "header__name--minimized2",
        headerSocials: "header__socials--minimized2",
        headerNavigation: "header__navigation--minimized2"
      });
    }
    // If not, remove minimize class from header
    else {
      this.setState({
        header: "",
        headerName: "",
        headerSocials: "",
        headerNavigation: ""
      });
    }
    
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight  - 100) {
      this.setState({
        header: "header--minimized2",
        headerName: "header__name--minimized2",
        headerSocials: "header__socials--minimized2",
        headerNavigation: "header__navigation--minimized2"
      });
    }
  }
  
  render() {
    return (
      <div className={"header__ " + this.state.header}>
        <div className="header__container">
          <div className={"header__name " + this.state.headerName}>
            <div>
              CARL{" "}
              <span className="--emphasis">
                GASPAR
              </span>
            </div>
            
            {/* Included here instead of separate container because NAVIGATION is related to the NAME */}
            <div className={"header__navigation " + this.state.headerNavigation}>
              <div className="header__home">Home</div>
              <div className="header__featured">Featured</div>
              <div className="header__stopper">•</div>
              <div className="header__blog">Blog</div>
              <div className="header__portfolio">Portfolio</div>
            </div>
          </div>
  
          <div className={"header__socials " + this.state.headerSocials}>
            <a
              href="asd"
              className="header__reddit"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__aboutme"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
            <a
              href="asd"
              className="header__portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
