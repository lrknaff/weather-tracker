import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import HeaderContainer from '../containers/HeaderContainer'
import { fetchForecast, promptUser } from '../actions/index'
import Geohelpers from '../helpers/geohelpers'


class App extends Component {


  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchForecast(position)
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

export default App
