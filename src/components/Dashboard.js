import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Card from '../components/Card'
import CardContainer from '../containers/CardContainer'

const Dashboard = ({ state }) => {
  // console.log(state)
  let ifHidden
  if (!state.getCurrentWeather.location) {
    ifHidden = 'is-hidden'
  } else {
    ifHidden = 'card-container'
  }

  return (
    <div className="dashboard">
      <CardContainer id={0} ifHidden={ifHidden} />
      <CardContainer id={1} ifHidden={ifHidden} />
      <CardContainer id={2} ifHidden={ifHidden} />
      <p className="edit-cities-link"><Link to="/settings">Edit Cities &raquo;</Link></p>
    </div>
  )
}

export default Dashboard
