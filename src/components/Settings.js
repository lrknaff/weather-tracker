import React, { Component, PropTypes } from 'react'

const Settings = ({ fetchForecastByZip, state }) => {
  let input
  const cities = state.getCurrentWeatherByZip ?
                 state.getCurrentWeatherByZip.map((city, i) => <div key={i}>{city.location}</div>) :
                 null
  return (
    <div>
      {cities}
      <input type="number" value={input} ref={(node) => { input = node }} />
      <button
        onClick={(e) => {
          e.preventDefault()
          fetchForecastByZip(input.value)
          input.value = ''
        }}
      >Submit</button>
    </div>
  )
}

Settings.propTypes = {
  fetchForecastByZip: PropTypes.func.isRequired,
}

export default Settings
