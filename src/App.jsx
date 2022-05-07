import React from "react"
import "./App.css"
import HelperList from "./helpers/HelperList"
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

  handleHelperItemClick = (cpsToAdd, price) => {
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
        <HUD
          cookies={this.state.cookies}
          cps={this.state.cps10 * 10}
          clickPower={this.state.clickPower}
        />
        <div className="core">
          <Cookie onClick={this.handleCookieClick} />
          <HelperList onHelperItemClick={this.handleHelperItemClick} />
        </div>
      </div>
    )
  }
}

export default App
