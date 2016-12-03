import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps)(Dashboard)
