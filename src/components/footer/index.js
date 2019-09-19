import React, { Component } from "react"
import { Link } from "gatsby"

import { Animated } from "react-animated-css"

import reddit from "./socials/facebook.svg"
import reddit2 from "./socials/like.svg"
import facebook from "./socials/facebook.svg"
import facebook2 from "./socials/like.svg"
import instagram from "./socials/facebook.svg"
import instagram2 from "./socials/like.svg"
import twitter from "./socials/facebook.svg"
import twitter2 from "./socials/like.svg"
import github from "./socials/facebook.svg"
import github2 from "./socials/like.svg"
import youtube from "./socials/facebook.svg"
import youtube2 from "./socials/like.svg"
import linkedin from "./socials/facebook.svg"
import linkedin2 from "./socials/like.svg"
import aboutme from "./socials/facebook.svg"
import aboutme2 from "./socials/like.svg"
import portfolio from "./socials/facebook.svg"
import portfolio2 from "./socials/like.svg"

class Footer extends Component {
  state = {
    footerCredit: "",
    isFooterActive: false,

    animationInSpeed: 500,
    animationOutSpeed: 500,

    redditAnimation: true,
    facebookAnimation: true,
    instagramAnimation: true,
    twitterAnimation: true,
    githubAnimation: true,
    youtubeAnimation: true,
    linkedinAnimation: true,
    aboutmeAnimation: true,
    portfolioAnimation: true,

    redditPrimary: true,
    facebookPrimary: true,
    instagramPrimary: true,
    twitterPrimary: true,
    githubPrimary: true,
    youtubePrimary: true,
    linkedinPrimary: true,
    aboutmePrimary: true,
    portfolioPrimary: true
  }

  componentDidMount = () => {
    this.animateInstagram()
    window.addEventListener("scroll", this.handleScroll)
    this.isScrollActive()
  }

  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight - 100) {
      this.setState({
        footer__credit: "footer__credit--minimize",
        isFooterActive: true
      })
    } else {
      this.setState({
        footer__credit: "",
        isFooterActive: false
      })
    }
  }

  isScrollActive = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    if (windowHeight === docHeight) {
      this.setState({
        footer__credit: "footer__credit--minimize",
        isFooterActive: true
      })
    }
  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <div className="footer__name">
              <Animated
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                isVisible={this.state.isFooterActive}
                animationInDuration={150}
                animationOutDuration={150}
              >
                <div>
                  CARL <span className="--emphasis">GASPAR</span>
                </div>
              </Animated>

              <div className="footer__summary">
                <p>
                  Hello! I'm <span className="--emphasis">Carl</span>{" "}
                  <span className="--emphasis">Gaspar</span>. I live in the{" "}
                  <span className="--emphasis">Philippines</span> who wish to
                  travel anywhere in the future. I work as an{" "}
                  <span className="--emphasis">IT Security Administrator</span>,{" "}
                  who also has the passion for{" "}
                  <span className="--emphasis">Software Development</span>. I am
                  always interested in{" "}
                  <span className="--emphasis">Technology</span>. My goal is to{" "}
                  <span className="--emphasis">Learn</span> new things every
                  single day. <span className="--emphasis">carlgaspar.com</span>{" "}
                  is a personal website of mine focusing on my different{" "}
                  interests, passion, and hobbies.
                </p>
              </div>

              <Animated
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                isVisible={this.state.isFooterActive}
                animationInDuration={150}
                animationOutDuration={150}
              >
                <p className="footer__socials">
                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.redditAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.redditPrimary ? reddit : reddit2}
                        className={"header__reddit " + this.state.redditPrimary}
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.facebookAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.facebookPrimary ? facebook : facebook2}
                        className={
                          "header__facebook " + this.state.facebookPrimary
                        }
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.instagramAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={
                          this.state.instagramPrimary ? instagram : instagram2
                        }
                        className={
                          "header__instagram " + this.state.instagramPrimary
                        }
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.twitterAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.twitterPrimary ? twitter : twitter2}
                        className={
                          "header__twitter " + this.state.twitterPrimary
                        }
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.githubAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.githubPrimary ? github : github2}
                        className={"header__github " + this.state.githubPrimary}
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.youtubeAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.youtubePrimary ? youtube : youtube2}
                        className={
                          "header__youtube " + this.state.youtubePrimary
                        }
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.linkedinAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.linkedinPrimary ? linkedin : linkedin2}
                        className={
                          "header__linkedin " + this.state.linkedinPrimary
                        }
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.aboutmeAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={this.state.aboutmePrimary ? aboutme : aboutme2}
                        className={
                          "header__aboutme " + this.state.aboutmePrimary
                        }
                      />
                    </a>
                  </Animated>

                  <Animated
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.portfolioAnimation}
                    animationInDuration={this.state.animationInSpeed}
                    animationOutDuration={this.state.animationOutSpeed}
                  >
                    <a href="asd" target="_blank" rel="noopener noreferrer">
                      <img
                        src={
                          this.state.portfolioPrimary ? portfolio : portfolio2
                        }
                        className={
                          "header__portfolio " + this.state.portfolioPrimary
                        }
                      />
                    </a>
                  </Animated>
                </p>
              </Animated>
            </div>
          </div>

          {/*<div className="footer__middle">
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
          </div>*/}

          <div className="footer__right">
            <div className="footer__sayHello">
              <form
                name="contact"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <div className="footer__botfield --hidden">
                  <input
                    name="bot-field"
                    placeholder="Robot? Fill this out.."
                  />
                </div>
                <div className="footer__email">
                  <input type="text" name="email" placeholder="Email.." />
                </div>
                <div className="footer__message">
                  <textarea
                    name="message"
                    placeholder="Write Something.."
                  ></textarea>
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
            <p>
              <span className="--emphasis">@</span>
              carlracz <span className="--emphasis">|</span> Designed by Carl{" "}
              <span className="--emphasis">Gaspar</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Animations

  animateInstagram = async () => {
    await this.sleep(1500)
    //exit
    this.setState(prevState => ({
      instagramAnimation: !prevState.instagramAnimation
    }))
    await this.sleep(1000)

    //secondary
    this.setState(prevState => ({
      instagramPrimary: !prevState.instagramPrimary
    }))
    //enter
    this.setState(prevState => ({
      instagramAnimation: !prevState.instagramAnimation
    }))
    await this.sleep(3000)
    //exit
    this.setState(prevState => ({
      instagramAnimation: !prevState.instagramAnimation
    }))
    await this.sleep(1000)

    //primary
    this.setState(prevState => ({
      instagramPrimary: !prevState.instagramPrimary
    }))
    //enter
    this.setState(prevState => ({
      instagramAnimation: !prevState.instagramAnimation
    }))

    await this.sleep(3000)
    this.animateReddit()
  }

  animateReddit = async () => {
    await this.sleep(1500)
    //exit
    this.setState(prevState => ({
      redditAnimation: !prevState.redditAnimation
    }))
    await this.sleep(1000)

    //secondary
    this.setState(prevState => ({
      redditPrimary: !prevState.redditPrimary
    }))
    //enter
    this.setState(prevState => ({
      redditAnimation: !prevState.redditAnimation
    }))
    await this.sleep(3000)
    //exit
    this.setState(prevState => ({
      redditAnimation: !prevState.redditAnimation
    }))
    await this.sleep(1000)

    //primary
    this.setState(prevState => ({
      redditPrimary: !prevState.redditPrimary
    }))
    //enter
    this.setState(prevState => ({
      redditAnimation: !prevState.redditAnimation
    }))

    await this.sleep(3000)
    this.animateInstagram()
  }
}

export default Footer
