import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

class FiveDay extends Component {

  getMinAndMax(arr, day) {
    const temps = day.map((hour) => {
      return arr.push(Math.floor(convertKelvinToFahrenheit(hour.temp)))
    })
  }

  render() {
    let data
    const { state, id } = this.props

    if (state.getFiveDayForecast[id]) {
      const one = []
      const two = []
      const three = []
      const four = []

      const a = state.getFiveDayForecast[id].forecast.a
      const b = state.getFiveDayForecast[id].forecast.b
      const c = state.getFiveDayForecast[id].forecast.c
      const d = state.getFiveDayForecast[id].forecast.d

      this.getMinAndMax(one, a)
      this.getMinAndMax(two, b)
      this.getMinAndMax(three, c)
      this.getMinAndMax(four, d)

      data = (
        <div className="five-day">
          <ul className="five-day-day-ul">
            <li className="five-day-day">{state.getFiveDayForecast[id].forecast.a[id].day}</li>
            <li className="five-day-day">{state.getFiveDayForecast[id].forecast.b[id].day}</li>
            <li className="five-day-day">{state.getFiveDayForecast[id].forecast.c[id].day}</li>
            <li className="five-day-day">{state.getFiveDayForecast[id].forecast.d[id].day}</li>
          </ul>
          <ul className="five-day-temp-ul">
            <li className="five-day-temp">{Math.max(...one)}&deg; / {Math.min(...one)}&deg;</li>
            <li className="five-day-temp">{Math.max(...two)}&deg; / {Math.min(...two)}&deg;</li>
            <li className="five-day-temp">{Math.max(...three)}&deg; / {Math.min(...three)}&deg;</li>
            <li className="five-day-temp">{Math.max(...four)}&deg; / {Math.min(...four)}&deg;</li>
          </ul>
          <button><Link to={`/Extended/${state.getCurrentWeatherByZip[id].location}/${id}`}>View Extended Forecast &raquo;</Link></button>
        </div>
      )
    } else {
      data = (
        null
      )
    }
    return (
      <div className="five-day-wrapper">
        {data}
      </div>
    )
  }
}

export default FiveDay
