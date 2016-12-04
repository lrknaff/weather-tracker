import React, { Component } from 'react'
import { Link } from 'react-router'

const ThreeHour = ({ state, params }) => {
  const id = params.id
  const data = state.getFiveDayForecast[id]
  console.log(data)
  return (
    <div>
      <h1>in three hour</h1>
    </div>
  )
}

export default ThreeHour
