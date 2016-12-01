import React, { Component } from 'react'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

class Header extends Component {

  render() {
    const { location, temp, weatherType } = this.props.state.getCurrentWeather
    // const tempF = convertKelvinToFahrenheit(temp)
    let data
    if (this.props.state.getCurrentWeather.temp) {
      const tempF = Math.floor(convertKelvinToFahrenheit(temp))
      data = <p>The current weather in {location} is {weatherType} and {tempF}</p>
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
