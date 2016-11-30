import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../containers/HeaderContainer'
import { receiveLocation, promptUser } from '../actions/index'
import { onPositionReceived } from '../helpers/geohelpers'

class App extends Component {

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onPositionReceived)
    }
  }

  render() {
    return (
      <HeaderContainer />
    )
  }
}

export default App
