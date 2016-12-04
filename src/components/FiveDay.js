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
