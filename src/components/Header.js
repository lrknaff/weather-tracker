import React, { Component } from 'react'

class Header extends Component {


  render() {
    const location = this.props.state.getCurrentWeather.location
    const temp = this.props.state.getCurrentWeather.temp
    const weatherType = this.props.state.getCurrentWeather.weatherType

    return (
      <header>
        {location}
        {temp}
        {weatherType}
      </header>
    )
  }

}

export default Header
