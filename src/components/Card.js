import React, { Component } from 'react'
import { Link } from 'react-router'

const Card = ({ state, id }) => {
  console.log('id', id)
  console.log('state', state)
  return (
    <div>
      <p>{ state.getCurrentWeatherByZip[id] ? state.getCurrentWeatherByZip[id].location : null}</p>
      <p>{ state.getCurrentWeatherByZip[id] ? state.getCurrentWeatherByZip[id].temp : null}</p>
      <p>{ state.getCurrentWeatherByZip[id] ? null : <Link to="/settings" >Add a pinned city.</Link> }</p>
    </div>
  )
}

export default Card
