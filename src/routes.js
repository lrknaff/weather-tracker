import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import AppContainer from './containers/AppContainer'
import HeaderContainer from './containers/HeaderContainer'
import Dashboard from './components/Dashboard'
import CardContainer from './containers/CardContainer'
import SettingsContainer from './containers/SettingsContainer'
import ExtendedContainer from './containers/ExtendedContainer'
import DashboardContainer from './containers/DashboardContainer'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={DashboardContainer} />
      <Route path="/settings" component={SettingsContainer} />
      <Route path="/extended/:name/:id" component={ExtendedContainer} />
    </Route>
  </Router>
)

export default Routes
