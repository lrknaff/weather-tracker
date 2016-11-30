import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import HeaderContainer from '../containers/HeaderContainer'
import { receiveLocation, promptUser } from '../actions/index'
import Geohelpers from '../helpers/geohelpers'

class App extends Component {


  componentWillMount() {
    let location
    if (navigator.geolocation) {
      location = navigator.geolocation.getCurrentPosition(Geohelpers.onPositionReceived, Geohelpers.onPositionFailed)
      console.log(location)
    }
  }
  render() {
    return (
      <HeaderContainer />
    )
  }
}

export default App
