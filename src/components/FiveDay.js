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
      return d.dt_txt.split(' ')[0].split('-')
    })
    console.log(days[0])

    const date = new Date(parseInt(days[0][0], 10), parseInt(days[0][1] - 1, 10), parseInt(days[0][2], 10))
    console.log(date)
    console.log(date.getDay())
  }

  render() {
    console.log(this.props.state)
    return (
      <div>
        <ul>
          <li>day</li>
        </ul>
        <ul>
          <li>temp</li>
        </ul>
      </div>
    )
  }
}

export default FiveDay
