import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../actions/account'
import { Redirect, NavLink } from 'react-router-dom'
import '../stylesheets/clouds.css'

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
      <div>

        <div id="Clouds">
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Foreground"></div>
          <div className="Cloud Background"></div>
          <div className="Cloud Background"></div>


          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="40px" height="24px" viewBox="0 0 40 24" enable- xmlSpace="preserve">
            <defs>
              <path id="Cloud" d="M33.85,14.388c-0.176,0-0.343,0.034-0.513,0.054c0.184-0.587,0.279-1.208,0.279-1.853c0-3.463-2.809-6.271-6.272-6.271
          	c-0.38,0-0.752,0.039-1.113,0.104C24.874,2.677,21.293,0,17.083,0c-5.379,0-9.739,4.361-9.739,9.738
          	c0,0.418,0.035,0.826,0.084,1.229c-0.375-0.069-0.761-0.11-1.155-0.11C2.811,10.856,0,13.665,0,17.126
          	c0,3.467,2.811,6.275,6.272,6.275c0.214,0,27.156,0.109,27.577,0.109c2.519,0,4.56-2.043,4.56-4.562
          	C38.409,16.43,36.368,14.388,33.85,14.388z"/>
            </defs>
          </svg>

          {this.props.account.account_id ? this.handleRedirect() : null }
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
            <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
            <input type='submit' value='Login'/>
          </form>
          <p>Need an account <NavLink to="/register">Register</NavLink> here</p>
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
