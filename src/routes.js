import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './Components/Common/PrivateRoute'
import history from './history'

/* Containers */
import Todos from './Containers/Todos'
import Navigation from './Containers/Navigation'
import Icebox from './Containers/Icebox'
import Progress from './Containers/Progress'
import Completed from './Containers/Completed'
import ErrorClass from './Containers/ErrorClass'
import Home from './Containers/Home'

const Routes = ({ translate }) => {
  return (
    <Router history={history}>
      <Switch>
        <Navigation>
          <Route exact path='/' component={Todos} />
          <Route path='/icebox' component={Icebox} />
          <Route path='/progress' component={Progress} />
          <Route path='/completed' component={Completed} />
          <Route path='/errordemo' component={ErrorClass} />
          <PrivateRoute path='/home' component={Home} />
        </Navigation>
      </Switch>
    </Router>
  )
}

export default Routes
