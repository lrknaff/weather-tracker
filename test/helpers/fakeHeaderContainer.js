import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveLocation, promptUser } from '../../src/actions/index'
import fakeHeader from './fakeHeader'

const mapStateToProps = (state) => ({
  state,
})

export default connect(mapStateToProps)(fakeHeader)
