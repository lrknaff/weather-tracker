import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

const ThreeHour = ({ state, params }) => {
  let data
  const id = params.id

  if (id >= 0) {
    data = state.getFiveDayForecast[id].forecast
  } else {
    data = state.setLocation[0].forecast
  }

  const dataArray = Object.keys(data).map((key) => data[key])

  const displayDay = dataArray.map((day, i) => {
    const theDay = day[0].day
    return (
      <h2 key={i}>{theDay}</h2>
    )
  })

  const displayData = dataArray.map((day) => {
    return day.map((hour, i) => {
      return (
        <div key={i} className="extended-forecast-each-card" id={hour.day}>
          <ul>
            <li className="extended-day">{hour.day}</li>
            <li className="extended-time">{hour.time === '0 PM' ? //eslint-disable-line
                                           '12 PM' :
                                           hour.time === '0 AM' ?
                                           '12AM' :
                                           hour.time}
            </li>
            <li className="extended-temp">{Math.floor(convertKelvinToFahrenheit(hour.temp))}&deg;</li>
            <li className="extended-description">{hour.description}</li>
          </ul>
          <hr />
        </div>
      )
    })
  })
  return (
    <div className="extended-container">
      <Link className="back-to-dashboard-link" to="/">
        Back to Dashboard &raquo;
      </Link>
      <h2 className="extended-city-location">{params.name}</h2>
      <div className="display-data-container">
        {displayData}
      </div>
    </div>
  )
}

export default ThreeHour
