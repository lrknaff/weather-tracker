import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Card from '../components/Card'

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps)(Card)
