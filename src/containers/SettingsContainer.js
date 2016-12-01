import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchForecastByZip } from '../actions/index'
import Settings from '../components/Settings'

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleApiCall: () => {
      dispatch(fetchForecastByZip())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
