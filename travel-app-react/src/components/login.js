import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/account'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
          <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
          <input type='submit' value='Login'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login
  }, dispatch)
}

const ConnectedLogin = connect(null, mapDispatchToProps)(Login);

export default ConnectedLogin;
