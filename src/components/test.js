import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Test } from '../actions/index'
import { store } from '../index'

const Counter = ({ handleSumbit, state }) => {
  return (
    <div>
      <p>{state}</p>
      <button onClick={handleSumbit}>Counter</button>
    </div>
  )
}

export default Counter
