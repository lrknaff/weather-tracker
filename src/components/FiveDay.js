import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

const daysMap = {
  '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday',
}

class FiveDay extends Component {
  render() {
    let data
    const { state, id } = this.props

    if (state.getFiveDayForecast[id]) {
      data = (
        <div>
          <ul>
            <li>{state.getFiveDayForecast[id].forecast.dayOne[id].main}</li>
          </ul>
          <ul>
            <li>temp</li>
          </ul>
        </div>
      )
    } else {
      data = (
        <h2>Loading...</h2>
      )
    }
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default FiveDay
