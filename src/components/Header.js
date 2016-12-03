import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'
import Loader from './loader'

class Header extends Component {

  render() {
    const { state, test, fakeLocation, fakeTemp, fakeWeatherType } = this.props

    let location
    let temp
    let weatherType

    if (test) {
      location = fakeLocation
      temp = fakeTemp
      weatherType = fakeWeatherType
    } else {
      location = state.getCurrentWeather.location
      temp = state.getCurrentWeather.temp
      weatherType = state.getCurrentWeather.weatherType
    }
    let data
    let loading
    if (this.props.test || state.getCurrentWeather.temp) {
      const tempF = Math.floor(convertKelvinToFahrenheit(temp))
      data = (
        <div className="header-container">
          <h2 className="header-text-main">The current weather in <span className="header-text-location">{location}</span> is <span className="header-text-temp">{tempF}</span> &deg;F with <span className="header-text-weather-type">{weatherType.toLowerCase()}</span>.</h2>
          <Link className="extended-forecast-link" to="/foo">View Extended Forecast</Link>
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
