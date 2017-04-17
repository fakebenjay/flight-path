import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken, setUsername } from '../actions/account'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      email: ''
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
    let prefix = 'http://localhost:3001'
    axios
      .post(`${prefix}/registrations`, {
        account: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }
      })
      .then(response => {
        this.props.setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
      })
      // TODO redirect using setState redirect
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
          <input type='text' name='email' value={this.state.email} placeholder='E-mail' onChange={this.handleChange}/>
          <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
          <input type='submit' value='Register Account'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUsername: setUsername,
    setToken: setToken
  }, dispatch)
}

const ConnectedRegister = connect(null, mapDispatchToProps)(Register);

export default ConnectedRegister;
