import React from "react"
import "./App.css"
import AutoList from "./auto/AutoList"
import Cookie from "./clicking/Cookie"
import HUD from "./hud/HUD"

class App extends React.Component {
  state = {
    cookies: 0,
    clickPower: 1,
    cps10: 0, // cookies per 100 ms
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ cookies: this.state.cookies + this.state.cps10 })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleCookieClick = () => {
    this.setState({
      cookies: this.state.cookies + this.state.clickPower,
    })
  }

  handleAutoItemClick = (cpsToAdd, price) => {
    const cookies = this.state.cookies

    if (cookies < price) return false

    this.setState({
      cps10: this.state.cps10 + cpsToAdd / 10,
      cookies: cookies - price,
    })
    return true
  }

  render() {
    return (
      <div className="app">
        <HUD cookies={this.state.cookies} cps={this.state.cps10 * 10} />
        <div className="core">
          <Cookie onClick={this.handleCookieClick} />
          <AutoList onAutoItemClick={this.handleAutoItemClick} />
        </div>
      </div>
    )
  }
}

export default App
