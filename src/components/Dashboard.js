import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Card from '../components/Card'
import CardContainer from '../containers/CardContainer'


const Dashboard = () => {
  return (
    <div>
      <CardContainer id={0} />
      <CardContainer id={1} />
      <CardContainer id={2} />
      <p><Link to="/settings">Edit Cities</Link></p>
    </div>
  )
}

export default Dashboard
