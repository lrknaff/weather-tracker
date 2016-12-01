import React, { Component } from 'react'

class Header extends Component {


  render() {
    const { location, temp, weatherType } = this.props.state.getCurrentWeather
    let data
    if (this.props.state.getCurrentWeather.temp) {
      data = <p>The current weather in {location} is {weatherType} and {temp}</p>
    } else {
      data = 'Loading...'
    }

    return (
      <header>
        {data}
      </header>
    )
  }

}

export default Header
