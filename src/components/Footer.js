import React, { Component } from 'react'
import { Link } from 'react-router'
import Loader from './loader'

const Footer = ({ state }) => {
  let display
  if (state.getCurrentWeather.temp) {
    display = <p><Link to="/settings">Edit Cities</Link></p>
  } else {
    display = null
  }
  return (
    <div>
      { display }
    </div>
  )
}

export default Footer
