import React, { Component } from 'react'

class Settings extends Component {
  render() {
    let input
    return (
      <div>
        <input type="number" value={input} ref={(node) => { input = node }} />
        <button
          onClick={(e) => {
            e.preventDefault()
            this.props.fetchForecastByZip(input.value)
          }}
        >Submit</button>
      </div>
    )
  }
}

Settings.propTypes = {
  fetchForecastByZip: React.PropTypes.func.isRequired,
}

export default Settings
