import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Card from '../components/Card'
import CardContainer from '../containers/CardContainer'

const Dashboard = ({ state }) => {
  // console.log(state)
  let ifHidden
  if (!state.getCurrentWeather.location) {
    ifHidden = 'isHidden'
  } else {
    ifHidden = 'card-container'
  }

  return (
    <div className="dashboard">
      <CardContainer id={0} ifHidden={ifHidden} />
      <CardContainer id={1} ifHidden={ifHidden} />
      <CardContainer id={2} ifHidden={ifHidden} />
      <p><Link to="/settings">Edit Cities</Link></p>
    </div>
  )
}

export default Dashboard
