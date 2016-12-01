import React from 'react'
import { Router, Route } from 'react-router'

import AppContainer from './containers/AppContainer'
import HeaderContainer from './containers/HeaderContainer'
import Dashboard from './components/Dashboard'
import CardContainer from './containers/CardContainer'
import SettingsContainer from './containers/SettingsContainer'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/" component={HeaderContainer} />
    <Route path="/" component={Dashboard} />
    <Route path="/settings" component={SettingsContainer} />
    <Route path="/" component={CardContainer} />
  </Router>
)

export default Routes
