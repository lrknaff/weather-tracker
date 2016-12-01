import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'
import Loader from './loader'

class Header extends Component {

  render() {
    const { location, temp, weatherType } = this.props.state.getCurrentWeather
    let data
    if (this.props.state.getCurrentWeather.temp) {
      const tempF = Math.floor(convertKelvinToFahrenheit(temp))
      data = <p>The current weather in {location} is {tempF} &deg;F and {weatherType}.</p>
    } else {
      data = 'Loading...'
      return <Loader />
    }

    return (
      <header>
        {data}
        <Link to="/foo">View Extended Forecast</Link>
      </header>
    )
  }

}

export default Header
