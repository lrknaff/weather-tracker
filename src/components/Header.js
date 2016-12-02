import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'
import Loader from './loader'

class Header extends Component {

  render() {
    let location
    let temp
    let weatherType

    if (this.props.test) {
      location = 'Denver'
      temp = '30'
      weatherType = 'Freakin Cold!'
      // return <div className="test-class">The page renders!</div>
    } else {
      const realWeather = this.props.state.getCurrentWeather
      location = realWeather.location
      temp = realWeather.temp
      weatherType = realWeather.weatherType
    }
    // const { location, temp, weatherType } = this.props.state.getCurrentWeather
    let data
    let loading
    if (this.props.test || this.props.state.getCurrentWeather.temp) {
      const tempF = Math.floor(convertKelvinToFahrenheit(temp))
      data = (
        <div>
          <h2 className="current-weather-headline">The current weather in {location} is {tempF} &deg;F and {weatherType}.</h2>
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
