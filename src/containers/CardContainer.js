import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Card from '../components/Card'

const mapStateToProps = (state) => ({
  state,
})

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

export default connect(mapStateToProps)(Card)
