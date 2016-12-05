import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

const ThreeHour = ({ state, params }) => {
  let data
  const id = params.id
  console.log('id', id)
  if (id >= 0) {
    data = state.getFiveDayForecast[id].forecast
  } else {
    data = state.setLocation[0].forecast
  }
  console.log('data in threeHour', data)

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
        <div key={i}>
          <ul>
            <li>{hour.day}</li>
            <li>{hour.time}</li>
            <li>{Math.floor(convertKelvinToFahrenheit(hour.temp))}&deg;</li>
            <li>{hour.description}</li>
          </ul>
        </div>
      )
    })
  })
  return (
    <div>
      {displayData}
    </div>
  )
}

export default ThreeHour
