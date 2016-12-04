import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'
import FiveDay from './FiveDay'

const Card = ({ state, id, ifHidden }) => {
  // console.log(hidden)
  let newId
  if (id === 0 && state.getCurrentWeatherByZip[id]) {
    newId = 'a'
  } else if (id === 1 && state.getCurrentWeatherByZip[id]) {
    newId = 'b'
  } else if (id === 2 && state.getCurrentWeatherByZip[id]) {
    newId = 'c'
  }

  return (
    <div className={ifHidden}>
      <div className="card-main-info" id={newId}>
        <h3>{ state.getCurrentWeatherByZip[id] ? state.getCurrentWeatherByZip[id].location : null}</h3>
        <h2>{ state.getCurrentWeatherByZip[id] ? Math.floor(convertKelvinToFahrenheit(state.getCurrentWeatherByZip[id].temp)) : null}</h2>
        <h4>{ state.getCurrentWeatherByZip[id] ? `and ${state.getCurrentWeatherByZip[id].weatherType.toLowerCase()}` : null}</h4>
        <FiveDay state={state} />
      </div>
      <div className="card-extended-info">
        <p>{ state.getCurrentWeatherByZip[id] ? null : <Link className="add-city-link" to="/settings" aria-label="Add City"><div className="link-wrapper"><span className="plus-horiz" /><span className="plus-vert" /></div><p>Add City</p></Link> }</p>
      </div>
    </div>
  )
}

export default Card
