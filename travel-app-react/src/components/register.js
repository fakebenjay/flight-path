import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAccount } from '../actions/account'
import { Redirect, NavLink } from 'react-router-dom'

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
        {this.props.account.account_id ? this.handleRedirect() : null }
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
          <input type='text' name='email' value={this.state.email} placeholder='E-mail' onChange={this.handleChange}/>
          <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
          <input type='submit' value='Register'/>
        </form>
         <p>Have an account already? <NavLink to="/login">Login</NavLink> here</p>
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
