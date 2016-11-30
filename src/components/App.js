import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../containers/HeaderContainer'
import { receiveLocation, promptUser } from '../actions/index'
import Geohelpers from '../helpers/geohelpers'

class App extends Component {

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(Geohelpers.onPositionReceived, Geohelpers.onPositionFailed)
    }
  }

  render() {
    return (
      <HeaderContainer />
    )
  }
}

export default App
