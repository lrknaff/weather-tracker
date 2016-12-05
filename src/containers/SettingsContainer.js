import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchForecastByZip, removePinnedCity } from '../actions/index'
import Settings from '../components/Settings'

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecastByZip: (input) => {
      dispatch(fetchForecastByZip(input))
    },
    removePinnedCity: (index) => {
      dispatch(removePinnedCity(index))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
