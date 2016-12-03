import React, { Component } from 'react'
import { Link } from 'react-router'
import FiveDay from './FiveDay'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

const Card = ({ state, id }) => {
  let card
  let pinCity
  if (state.getCurrentWeatherByZip[id]) {
    card = (
      <div>
        <h3>{state.getCurrentWeatherByZip[id].location}</h3>
        <h2>{Math.floor(convertKelvinToFahrenheit(state.getCurrentWeatherByZip[id].temp))}</h2>
        <h4>{`and ${state.getCurrentWeatherByZip[id].weatherType.toLowerCase()}`}</h4>
        <FiveDay state={state} />
      </div>
    )
  } else {
    card = (
      <p>{<Link to="/settings" >Add a pinned city.</Link>}</p>
    )
  }
  return (
    <div>
      {card}
    </div>
  )
}

export default Card
