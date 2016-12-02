import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import HeaderContainer from '../containers/HeaderContainer'
import CardContainer from '../containers/CardContainer'
import Dashboard from '../components/Dashboard'
import { fetchForecast, updateLocation } from '../actions/index'

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.props.updateLocation(position)
        this.props.fetchForecast(position)
      })
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Dashboard />
      </div>
    )
  }
}

App.propTypes = {
  updateLocation: React.PropTypes.func.isRequired,
  fetchForecast: React.PropTypes.func.isRequired,
}

export default App
