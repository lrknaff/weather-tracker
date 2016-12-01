import React, { Component } from 'react'

class Header extends Component {

  render() {
    const name = this.props.state.getCurrentWeather.name
    console.log(this.props.state.getCurrentWeather.name)
    return (
      <header>
        {name ?
          <div>The current weather in {this.props.state.getCurrentWeather.name} is </div> : ''
      }
      </header>
    )
  }

}

export default Header
