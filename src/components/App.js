import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import HeaderContainer from '../containers/HeaderContainer'
import CardContainer from '../containers/CardContainer'
import DashboardContainer from '../containers/DashboardContainer'
import { fetchForecast, fetchCurrentLocationForecast } from '../actions/index'

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.fetchForecast(position)
        this.props.fetchCurrentLocationForecast(position)
      })
    }
  }

  render() {
    return (
      <div className="master-container">
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  fetchCurrentLocationForecast: React.PropTypes.func.isRequired,
  fetchForecast: React.PropTypes.func.isRequired,
}

export default App
