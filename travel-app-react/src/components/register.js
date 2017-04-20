import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAccount } from '../actions/account'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      email: '',
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  componentDidMount() {
    if (this.props.account.account_id) {
      this.setState({
        redirect: true
      })
    }
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
    this.setState({
      redirect: true
    })
  }

  handleRedirect() {
    return <Redirect to="/mytrips" />
  }

  handleFalseRedirect() {
    return <Redirect to="/login" />
  }

  render() {
    return(
      <div>
        {this.state.redirect ? this.handleRedirect() : null }
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
          <input type='text' name='email' value={this.state.email} placeholder='E-mail' onChange={this.handleChange}/>
          <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
          <input type='submit' value='Register'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createAccount: createAccount
  }, dispatch)
}

const ConnectedRegister = connect(null, mapDispatchToProps)(Register)

export default ConnectedRegister
