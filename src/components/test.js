import React, { Component } from 'react'
import { Test } from '../actions/index'
import { store } from '../index'

const Counter = ({ handleSumbit, state }) => {
  return (
    <div>
      <p>Hello! This is a test. If you can read this, then React and webpack are working.</p>
      <p>{state}</p>
      <button onClick={handleSumbit}>Counter</button>
    </div>
  )
}

export default Counter
