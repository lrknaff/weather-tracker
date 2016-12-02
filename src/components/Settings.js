import React, { Component, PropTypes } from 'react'

const Settings = ({ fetchForecastByZip }) => {
  let input
  return (
    <div>
      <input type="number" value={input} ref={(node) => { input = node }} />
      <button
        onClick={(e) => {
          e.preventDefault()
          fetchForecastByZip(input.value)
        }}
      >Submit</button>
    </div>
  )
}

Settings.propTypes = {
  fetchForecastByZip: PropTypes.func.isRequired,
}

export default Settings
