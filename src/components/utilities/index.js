import React, { Component } from "react"
import { Link } from "gatsby"

import { Animated } from "react-animated-css"

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
          <ul className="postContentful__navigation">
            <Animated
              animationIn="slideInLeft"
              animationOut="slideOutLeft"
              isVisible={this.state.isUtilitiesActive}
              animationInDuration={500}
              animationOutDuration={1000}
            >
              <li onClick={this.props.setTheme}>←</li>
            </Animated>

            <Animated
              animationIn="slideInRight"
              animationOut="slideOutRight"
              isVisible={this.state.isUtilitiesActive}
              animationInDuration={500}
              animationOutDuration={1000}
            >
              <li onClick={() => window.scrollTo(0, 0)}> →</li>
            </Animated>
          </ul>
        </div>
      </div>
    )
  }
}

export default Utilities
