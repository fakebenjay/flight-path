import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component  {

  render() {
    return (
      <div>
        {this.props.token ? <NavLink to="/mytrips">My Trips</NavLink> : null }
        {this.props.token ? <NavLink to="/addtrip">Add Trip</NavLink> : null   }
        {this.props.token ? <NavLink to="/logout">Log Out</NavLink> : null }
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  token: state.Account.token
})


const ConnectedNavbar = connect(mapStateToProps, null)(Navbar)

export default ConnectedNavbar
