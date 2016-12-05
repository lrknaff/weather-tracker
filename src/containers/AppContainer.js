import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentLocationForecast, fetchForecast } from '../actions/index'
import App from '../components/App'

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: (position) => {
      dispatch(fetchForecast(position))
    },
    fetchCurrentLocationForecast: (position) => {
      dispatch(fetchCurrentLocationForecast(position))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
