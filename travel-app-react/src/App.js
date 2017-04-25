import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import ConnectedLogin from './components/login'
import ConnectedRegister from './components/register'
import createHistory from 'history/createBrowserHistory'
import ConnectedAddTrip from './components/addTrip'
import ConnectedMyTrips from './components/myTrips'
import ConnectedNavbar from './components/Navbar'
import { setToken, setAccount } from './actions/account'
import PrivateRoute from './components/PrivateRoute'
import { bindActionCreators } from 'redux'
import ConnectedLogout from './components/Logout'
import ConnectedTrip from './components/trip'
import ProtectedTripRoute from './components/ProtectedTripRoute'
import './stylesheets/font.css';


export const history=createHistory()

class App extends Component {
  componentWillMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.setToken(token)
      this.props.setAccount(token)
    }
  }

  render() {
    return (
      <Router history={history}>
        <div>
        <Route path="/" component={ConnectedNavbar} />
          <Switch>
            {this.props.account.account_id ? <Redirect exact from="/" to="/login" /> : <Redirect exact from="/" to="/login" />}
            {this.props.account.account_id ? <Redirect from="/login" to="/mytrips" /> : <Route path='/login' component={ConnectedLogin}/>}
            {this.props.account.account_id ? <Redirect from="/register" to="/mytrips" /> : <Route path='/register' component={ConnectedRegister}/>}
            <Route path="/logout" component={ConnectedLogout} />
            <PrivateRoute path='/addtrip' component={ConnectedAddTrip}/>
            <PrivateRoute path='/mytrips' component={ConnectedMyTrips}/>
            <ProtectedTripRoute path='/trips/:id' component={ConnectedTrip}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setToken: setToken,
    setAccount: setAccount
  }, dispatch)
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
