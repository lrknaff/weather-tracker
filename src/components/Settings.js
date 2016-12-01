import React, { Component } from 'react'

const Settings = () => {
  return (
    <div>
      <input type="number" ref="zip" />
      <button onClick={() => this.props.fetchForecastByZip(this.refs.zip.value)}>Submit</button>
    </div>

  )
}

export default Settings
