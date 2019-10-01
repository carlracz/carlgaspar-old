import React, { Component } from "react"

import { Animated } from "react-animated-css"

import themer from "./Youtube.svg"
import moveup from "./Youtube.svg"

class Utilities extends Component {
  state = {
    isUtilitiesActive: false
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
    this.isScrollActive()
  }

  handleScroll = e => {
    let scrollPosition = Math.round(window.scrollY)
    // If we've scrolled 100px, add minimize class to the utilities
    if (scrollPosition >= 100) {
      this.setState({
        isUtilitiesActive: true
      })
    }
    // If not, remove minimize class from utilities
    else {
      this.setState({
        isUtilitiesActive: false
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
        isUtilitiesActive: true
      })
    }
  }

  render() {
    return (
      <div className="utilities__">
        <div className="utilities__container">
          <ul className="utilities__location">
            <Animated
              className="utilities__left"
              animationIn="fadeInLeftBig"
              animationOut="fadeOutLeftBig"
              isVisible={this.state.isUtilitiesActive}
              animationInDuration={500}
              animationOutDuration={500}
            >
              <li onClick={this.props.setTheme}>
                <img src={themer} />
              </li>
            </Animated>

            <Animated
              className="utilities__right"
              animationIn="fadeInRightBig"
              animationOut="fadeOutRightBig"
              isVisible={this.state.isUtilitiesActive}
              animationInDuration={500}
              animationOutDuration={500}
            >
              <li onClick={() => window.scrollTo(0, 0)}>
                <img src={moveup} />
              </li>
            </Animated>
          </ul>
        </div>
      </div>
    )
  }
}

export default Utilities
