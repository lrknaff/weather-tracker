import React, { Component } from 'react'
import { Link } from 'react-router'
import FiveDay from './FiveDay'
import Extended from './Extended'
import convertKelvinToFahrenheit from './helpers/temp-conversion'


const Card = ({ state, id, ifHidden }) => {
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
        <h2 className="current-weather-temp">{ state.getCurrentWeatherByZip[id] ?
          Math.floor(convertKelvinToFahrenheit(state.getCurrentWeatherByZip[id].temp)) : null }</h2>
        <h4>{ state.getCurrentWeatherByZip[id] ?
          `and ${state.getCurrentWeatherByZip[id].weatherType.toLowerCase()}` : null}</h4>
      </div>
      <div className="card-extended-info">
        { state.getCurrentWeatherByZip[id] ? null :
          <Link
            className="add-city-link"
            to="/settings"
            aria-label="Add City"
          >
            <div className="link-wrapper">
              <span className="plus-horiz" />
              <span className="plus-vert" />
            </div>
            <p>Add City</p>
          </Link> }
      </div>
      { state ? <FiveDay state={state} id={id} /> : null }
      {/* <FiveDay state={state} id={id} /> */}
    </div>
  )
}

export default Card
