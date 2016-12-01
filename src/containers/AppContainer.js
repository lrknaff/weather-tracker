import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, fetchForecast } from '../actions/index'
import App from '../components/App'

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: (position) => {
      dispatch(fetchForecast(position))
    },
    receiveLocation: () => {
      dispatch(receiveLocation())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(fetchForecast, dispatch)
// }
