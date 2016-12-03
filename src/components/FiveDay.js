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

  componentDidMount() {
    this.getDays()
  }

  getDays() {
    const { state } = this.props

    const days = state.getFiveDayForecast[0].forecast.map((d) => {
      d.dt_txt = d.dt_txt.split(' ')[0].split('-')
      d.dt_txt = new Date(parseInt(d.dt_txt[0], 10), parseInt(d.dt_txt[1] - 1, 10), parseInt(d.dt_txt[2], 10))

      const dayNumber = d.dt_txt.getDay()
      return daysMap[dayNumber]
    })
    const noDuplicates = [...new Set(days)]
    return noDuplicates
  }

  render() {
    const displayDays = this.getDays()
    const days = displayDays.map((day, i) => {
      return (
        <li key={i}>{day}</li>
      )
    })
    return (
      <div>
        <ul>
          {days}
        </ul>
        <ul>
          <li>temp</li>
        </ul>
      </div>
    )
  }
}

export default FiveDay
