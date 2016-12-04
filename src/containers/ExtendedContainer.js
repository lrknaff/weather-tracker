import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Extended from '../components/Extended'

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps)(Extended)
