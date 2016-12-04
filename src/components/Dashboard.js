import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Card from '../components/Card'
import CardContainer from '../containers/CardContainer'
import FooterContainer from '../containers/FooterContainer'

const Dashboard = ({ state }) => {
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
      <FooterContainer />
    </div>
  )
}

export default Dashboard
