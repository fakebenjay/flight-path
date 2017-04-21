import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAccount } from '../actions/account'
import { Redirect, NavLink } from 'react-router-dom'
import { Clouds } from './clouds'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }


  handleChange(e) {
    let target = e.target.name
    this.setState({
      [target]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.createAccount(this.state)
  }

  handleRedirect() {
    return <Redirect to="/mytrips" />
  }


  render() {
    return(
      <div>
        <div className="col-md-12 text-center login-register-form">
          {this.props.account.account_id ? this.handleRedirect() : null }
          <div className="row login-register">
            <h1 className="intro">Welcome to Waltzing Matilda</h1>
            <h2 className="tagline">Plan your perfect get-away</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row login-register">
              <input className="col-md-2 col-md-offset-5 text-center custom-input login-input" type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
            </div>
            <div className="row login-register">
              <input className="col-md-2 col-md-offset-5 text-center custom-input login-input" type='text' name='email' value={this.state.email} placeholder='E-mail' onChange={this.handleChange}/>
            </div>
            <div className="row login-register">
              <input className="col-md-2 col-md-offset-5 text-center custom-input login-input" type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
            </div>
            <div className="row login-register">
              <input className="custom-button login-button" type='submit' value='Register'/>
            </div>
          </form>
          <div className="row login-register">
            <p className="instructions">Have an account, already? <NavLink className="instructions-link" to="/login">Sign in</NavLink> here!</p>
          </div>
        </div>
        <Clouds />
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
    createAccount: createAccount
  }, dispatch)
}

const ConnectedRegister = connect(mapStateToProps, mapDispatchToProps)(Register)

export default ConnectedRegister
