import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../actions/account'
import { Redirect, NavLink } from 'react-router-dom'
import '../stylesheets/login_register.css'
import '../stylesheets/submit_and_input.css'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleRedirect() {
    return <Redirect to="/mytrips" />
  }

  handleChange(e) {
    let target = e.target.name
    this.setState({
      [target]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return(
      <div className="col-md-12 text-center login-register-form">
        {this.props.account.account_id ? this.handleRedirect() : null }
        <div className="row login-register">
          <h1 className="intro">Welcome to Waltzing Matilda</h1>
          <h2 className="tagline">Plan your perfect get-away</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row login-register">
            <input className="col-md-2 col-md-offset-5 text-center custom-input" type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
          </div>
          <div className="row login-register">
            <input className="col-md-2 col-md-offset-5 text-center custom-input" type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
          </div>
          <div className="row login-register">
            <input className="custom-button" type='submit' value='Login'/>
          </div>
        </form>
        <div className="row login-register">
          <p className="instructions">Need an account? <NavLink className="instructions-link" to="/register">Register</NavLink> now!</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
  }, dispatch)
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default ConnectedLogin
