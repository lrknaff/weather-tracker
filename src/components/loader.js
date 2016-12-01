import React, { Component } from 'react'
import Spinner from 'react-spinkit'

export default class Loader extends Component {
  render() {
    return (
      <Spinner spinnerName="circle" />
    )
  }
}
