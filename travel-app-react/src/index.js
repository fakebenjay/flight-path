import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'
import ConnectedLogin from './components/login'
import ConnectedRegister from './components/register'
import ConnectedAddTrip from './components/addTrip'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Switch>
          <Route path='/addtrip' component={ConnectedAddTrip}/>
          <Route path='/register' component={ConnectedRegister}/>
          <Route path='/login' component={ConnectedLogin}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
