import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

const FiveDay = ({ state, id }) => {
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

export default FiveDay
