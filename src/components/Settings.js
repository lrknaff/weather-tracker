import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const Settings = ({ fetchForecastByZip, state }) => {
  let input
  const cities = state.getCurrentWeatherByZip ?
                 state.getCurrentWeatherByZip.map((city, i) => <div key={i}>{city.location}</div>) :
                 null

  console.log('state', state)
  return (
    <div>
      <h1>My Cities</h1>
      {cities}
      <input
        type="number"
        placeholder="Enter a zip code"
        value={input}
        ref={(node) => { input = node }}
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          fetchForecastByZip(input.value)
          input.value = ''
        }}
      >Submit</button>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}

Settings.propTypes = {
  fetchForecastByZip: PropTypes.func.isRequired,
}

export default Settings
