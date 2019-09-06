import React, { Component } from "react";
import { Link } from "gatsby";

import Typist from "react-typist";
import { Animated } from "react-animated-css";

import "react-typist/dist/Typist.css";


class Footer extends Component {
  state = {
    footerCredit: "",
    isFooterActive: false,
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
      this.isScrollActive()
  }
  
  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 100) {
      this.setState({
        footer__credit: "footer__credit--minimize",
        isFooterActive: true
      });
    }
    else {
      this.setState({
        footer__credit: "",
        isFooterActive: false
      });
    }
  }
  
  isScrollActive = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    
    if (windowHeight === docHeight) {
      this.setState({
        footer__credit: "footer__credit--minimize",
        isFooterActive: true
      });
    }
  }
  
  render() {
    return (
      <div className={"footer"}>
        <div className="footer__container">
          <div className="footer__left">
            <div className={"footer__name"}>
              
              <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={this.state.isFooterActive} animationInDuration={150} animationOutDuration={150}>
                <div>
                  CARL{" "}
                  <span className="--emphasis">
                    GASPAR
                  </span>
                </div>
              </Animated>
              
              <div className="footer__summary">
                <p>
                  Hello! I'm{" "}
                  <span className="--emphasis">Carl</span>{" "}
                  <span className="--emphasis">Gaspar</span>.{" "}
                  
                  I live in the{" "}
                  <span className="--emphasis">Philippines</span> who wish {" "}
                  to travel anywhere in the future.{" "}
                  
                  I work as an{" "}
                  <span className="--emphasis">IT Security Administrator</span>,{" "}
                  who also has the passion for{" "}
                  <span className="--emphasis">Software Development</span>.{" "}
                  
                  I am always interested in{" "}
                  <span className="--emphasis">Technology</span>.{" "}
                  My goal is to{" "}
                  <span className="--emphasis">Learn</span>{" "}
                  new things every single day and{" "}
                  <span className="--emphasis">Hustle</span>{" "}
                  everyday.
                </p>
              </div>
            </div>
            
            <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={this.state.isFooterActive} animationInDuration={150} animationOutDuration={150}>
              <div className={"footer__socials"}>
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
            </Animated>
          </div>
          
          <div className="footer__middle">
            <div className="footer__usefulLinks">
              <p className="footer__usefulLinks--header">Useful Links</p>
              <p><Link>Home</Link></p>
              <p><Link>Blog</Link></p>
              <p><Link>Tag</Link></p>
              <p><Link>Portfolio</Link></p>
              <p><Link>Advertisement</Link></p>
              <p><Link>--</Link></p>
              <p><Link>--</Link></p>
              <p><Link>--</Link></p>
            </div>
            
            <div className="footer__poweredBy">
              <p className="footer__poweredBy--header">Powered By</p>
              <p><Link>Figma</Link></p>
              <p><Link>Github</Link></p>
              <p><Link>Netlify</Link></p>
              <p><Link>GatsbyJS</Link></p>
              <p><Link>Contentful</Link></p>
              <p><Link>--</Link></p>
              <p><Link>--</Link></p>
              <p><Link>--</Link></p>
            </div>
            
            <div className="footer__contactMe">
              <p className="footer__contactMe--header">Contact Me</p>
              <p><Link>About Me</Link></p>
              <p><Link>Instagram</Link></p>
              <p><Link>Twitter</Link></p>
              <p><Link>Youtube</Link></p>
              <p><Link>Facebook</Link></p>
              <p><Link>--</Link></p>
              <p><Link>--</Link></p>
              <p><Link>--</Link></p>
            </div>
          </div>
          
          
          
          <div className="footer__right">
            <div className="footer__sayHello">
              <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <div className="footer__botfield --hidden">
                  <input name="bot-field" placeholder="Robot? Fill this out.."/>
                </div>
                <div className="footer__email">
                  <input type="text" name="email" placeholder="Email.." />
                </div>
                <div className="footer__message">
                  <textarea name="message" placeholder="Write Something.." ></textarea>
                </div>
                <div className="footer__sayHello--button">
                  <button type="submit">Say Hello!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {this.props.utilities}
        
        <div className={"footer__credit " + this.state.footer__credit}>
          <div className="footer__creditname">
            <p style={{marginBottom: `-1.75rem`,}}>
              <span className="--emphasis">@</span>
              carlracz{" "}
              <span className="--emphasis">|</span>{" "}
              Designed by Carl{" "}
              <span className="--emphasis">Gaspar</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
