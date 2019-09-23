import React, { Component } from "react"
import { Link } from "gatsby"

import { Animated } from "react-animated-css"

import reddit from "./socials/facebook.svg"
import reddit2 from "./socials/like.svg"
import facebook from "./socials/facebook.svg"
import facebook2 from "./socials/like.svg"
import instagram from "./socials/facebook.svg"
import instagram2 from "./socials/like.svg"
import twitter from "./socials/Twitter.svg"
import twitter2 from "./socials/Twitter.svg"
import github from "./socials/facebook.svg"
import github2 from "./socials/like.svg"
import youtube from "./socials/Youtube.svg"
import youtube2 from "./socials/Youtube.svg"
import linkedin from "./socials/Linkedin.svg"
import linkedin2 from "./socials/Linkedin.svg"
import aboutme from "./socials/Aboutme.svg"
import aboutme2 from "./socials/Aboutme.svg"
import portfolio from "./socials/facebook.svg"
import portfolio2 from "./socials/like.svg"

class Header extends Component {
  state = {
    header: "",
    headerName: "",
    headerSocials: "",
    headerNavigation: "",

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
    window.addEventListener("resize", this.handleResize)
    this.isScrollActive()
  }

  handleScroll = () => {
    let scrollPosition = Math.round(window.scrollY)
    // If we've scrolled 100px, add minimize class to the header
    if (scrollPosition >= 100 && scrollPosition < 200) {
      this.setState({
        header: "header--minimized",
        headerName: "header__nameContainer--minimized",
        headerSocials: "header__socials--minimized",
        headerNavigation: "header__navigation--minimized"
      })
    }
    // If we've scrolled 200px, add minimize class to the header
    else if (scrollPosition >= 200) {
      this.setState({
        header: "header--minimized2",
        headerName: "header__nameContainer--minimized2",
        headerSocials: "header__socials--minimized2",
        headerNavigation: "header__navigation--minimized2"
      })
    }
    // If not, remove minimize class from header
    else {
      this.setState({
        header: "",
        headerName: "",
        headerSocials: "",
        headerNavigation: ""
      })
    }

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
        header: "header--minimized3",
        headerName: "header__nameContainer--minimized3",
        headerSocials: "header__socials--minimized3",
        headerNavigation: "header__navigation--minimized3"
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
        header: "header--minimized3",
        headerName: "header__nameContainer--minimized3",
        headerSocials: "header__socials--minimized3",
        headerNavigation: "header__navigation--minimized3"
      })
    }
  }

  handleResize = () => {
    console.log("carl")
  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  render() {
    return (
      <div className={"header " + this.state.header}>
        <div className="header__container">
          <div className={"header__nameContainer " + this.state.headerName}>
            <div className="header__name">
              CARL <span className="--emphasis">GASPAR</span>
            </div>

            {/* Included here instead of separate container because NAVIGATION is related to the NAME */}
            <div
              className={"header__navigation " + this.state.headerNavigation}
            >
              <Link to="/">Home</Link>
              <div>•</div>
              <Link to="/blog">Blog</Link>
              <div>•</div>
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>

          <p className={"header__socials " + this.state.headerSocials}>
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
                  className={"header__facebook " + this.state.facebookPrimary}
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
                  src={this.state.instagramPrimary ? instagram : instagram2}
                  className={"header__instagram " + this.state.instagramPrimary}
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
                  className={"header__twitter " + this.state.twitterPrimary}
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
                  className={"header__youtube " + this.state.youtubePrimary}
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
                  className={"header__linkedin " + this.state.linkedinPrimary}
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
                  className={"header__aboutme " + this.state.aboutmePrimary}
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
                  src={this.state.portfolioPrimary ? portfolio : portfolio2}
                  className={"header__portfolio " + this.state.portfolioPrimary}
                />
              </a>
            </Animated>
          </p>
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

export default Header
