import { NavLink, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearAccount } from '../actions/account'

class Navbar extends Component  {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    localStorage.removeItem("token")
    this.props.clearAccount()
    this.handleRedirect()
  }
  
  handleRedirect() {
    return <Redirect to="/login" />
  }

  render() {
    return (
      <div>
        <NavLink to="/mytrips">My Trips</NavLink> |
        <NavLink to="/addtrip">Add Trip</NavLink> |
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearAccount: clearAccount
  })
}

const ConnectedNavbar = connect(null, mapDispatchToProps)(Navbar)

export default ConnectedNavbar
