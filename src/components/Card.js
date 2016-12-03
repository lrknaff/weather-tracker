import React, { Component } from 'react'
import { Link } from 'react-router'

const Card = ({ state, id }) => {
  console.log(state)
  return (
    <div>
      <h3>{ state.getCurrentWeatherByZip[id] ? state.getCurrentWeatherByZip[id].location : null}</h3>
      <h2>{ state.getCurrentWeatherByZip[id] ? state.getCurrentWeatherByZip[id].temp : null}</h2>
      <h4>{ state.getCurrentWeatherByZip[id] ? `with ${state.getCurrentWeatherByZip[id].weatherType.toLowerCase()}` : null}</h4>
      <p>{ state.getCurrentWeatherByZip[id] ? null : <Link to="/settings" >Add a pinned city.</Link> }</p>
    </div>
  )
}

export default Card
