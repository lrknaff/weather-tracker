import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'
import Loader from './loader'

class Header extends Component {

  render() {
    const { location, temp, weatherType } = this.props.state.getCurrentWeather
    let data
    let loading
    if (this.props.state.getCurrentWeather.temp) {
      const tempF = Math.floor(convertKelvinToFahrenheit(temp))
      data = (
        <div>
          <h2>The current weather in {location} is {tempF} &deg;F and {weatherType}.</h2>
          <Link to="/foo">View Extended Forecast</Link>
        </div>)
    } else {
      data = ''
      loading = <Loader />
    }

    return (
      <main>
        <header>
          {data}
        </header>
        {loading}
      </main>
    )
  }

}

export default Header
