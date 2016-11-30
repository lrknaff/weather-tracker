import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../actions/index'
import Counter from '../components/test'

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleSumbit: () => {
      dispatch(test())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
