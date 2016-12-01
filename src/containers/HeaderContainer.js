import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return { location: state.location, temp: state.temp, weatherType: state.weatherType }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     prompt: () => {
//       dispatch(promptUser())
//     },
//     receiveLocation: () => {
//       dispatch(receiveLocation())
//     },
//   }
// }

export default connect(mapStateToProps)(Header)
