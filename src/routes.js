import React from 'react'
import { Router, Route } from 'react-router'

import AppContainer from './containers/AppContainer'
import HeaderContainer from './containers/HeaderContainer'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/" component={HeaderContainer} />
  </Router>
)

export default Routes
