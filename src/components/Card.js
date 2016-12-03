import React, { Component } from 'react'
import { Link } from 'react-router'
import convertKelvinToFahrenheit from './helpers/temp-conversion'

const Card = ({ state, id }) => {
  console.log(id)
  let newId
  if (id === 0) {
    newId = 'a'
  } else if (id === 1) {
    newId = 'b'
  } else if (id === 2) {
    newId = 'c'
  }
  // let backgroundColor
  // let colorOne
  // let colorTwo
  // if (id === 0) {
  //   backgroundColor = 'linear-gradient(to bottom, #7B5ECF, #869BFC);'
  // } else if (id === 1) {
  //   backgroundColor = 'blue'
  // } else if (id === 2) {
  //   backgroundColor = 'magenta'
  // }
  return (
    <div className="card-container">
      <div className="card-main-info" id={newId}>
        <h3>{ state.getCurrentWeatherByZip[id] ? state.getCurrentWeatherByZip[id].location : null}</h3>
        <h2>{ state.getCurrentWeatherByZip[id] ? Math.floor(convertKelvinToFahrenheit(state.getCurrentWeatherByZip[id].temp)) : null}</h2>
        <h4>{ state.getCurrentWeatherByZip[id] ? `and ${state.getCurrentWeatherByZip[id].weatherType.toLowerCase()}` : null}</h4>
      </div>
      <div className="card-extended-info">
        <p>{ state.getCurrentWeatherByZip[id] ? null : <Link to="/settings" >Add a pinned city.</Link> }</p>
      </div>
    </div>
  )
}

export default Card
