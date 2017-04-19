import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import ConnectedLogin from './components/login'
import ConnectedRegister from './components/register'
import ConnectedAuth from './utils/auth'
import createHistory from 'history/createBrowserHistory'
import ConnectedAddTrip from './components/addTrip'
import ConnectedMyTrips from './components/myTrips'


const history=createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path='/login' component={ConnectedLogin}/>
          <Route path='/register' component={ConnectedRegister}/>
          <Route path='/addtrip' component={ConnectedAddTrip}/>
          <Route path ='/mytrips' component={ConnectedMyTrips}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
