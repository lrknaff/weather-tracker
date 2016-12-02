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
        <div>
          <h2 className="current-weather-headline">The current weather in {location} is {tempF} &deg;F with {weatherType.toLowerCase()}.</h2>
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
