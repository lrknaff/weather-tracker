import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import HeaderContainer from '../containers/HeaderContainer'
import { fetchForecast, updateLocation } from '../actions/index'

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.updateLocation(position)
        this.props.fetchForecast(position)
        console.log(position)
      })
    }
  }

  render() {
    return (
      <HeaderContainer />
    )
  }
}

App.propTypes = {
  updateLocation: React.PropTypes.func.isRequired,
  fetchForecast: React.PropTypes.func.isRequired,
}

export default App
