import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../actions/index'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps)(Footer)
