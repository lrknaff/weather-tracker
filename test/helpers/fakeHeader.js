import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from '../../src/components/helpers/temp-conversion'
import Loader from '../../src/components/loader'

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
        <header>
          <div className="header-container">
            <h2 className="header-text-main">The current weather in <span className="header-text-location">{location}</span><br /> is <span className="header-text-temp">{tempF}&deg;F </span> and <span className="header-text-weather-type">{weatherType.toLowerCase()}</span>.</h2>
            <Link className="extended-forecast-link" to={`/Extended/${state.getCurrentWeather.location}`}>View Extended Forecast &raquo;</Link>
          </div>
        </header>
      )
    } else {
      data = <Loader />
    }

    return (
      <main>
        {data}
      </main>
    )
  }

}

export default Header
