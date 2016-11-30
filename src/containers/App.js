import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../actions/index'
import Counter from '../components/test'

class App extends Component {
  render() {
    return (
      <section>
        <div>Hello! This is a test. If you can read this, then React and webpack are working.</div>
        <Counter />
      </section>
    )
  }
}

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
