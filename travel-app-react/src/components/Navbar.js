import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import '../stylesheets/navbar.css'

class Navbar extends Component  {

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <div className="col-xs-2 logo-wrapper">
              <FontAwesome className='logo' name='globe' size='3x'/>
            </div>
            <div className="col-xs-10 navbar-center-text">
              {this.props.token ? <NavLink className="navbar-link" to="/mytrips">My Trips</NavLink> : null }
              {this.props.token ? <NavLink className="navbar-link" to="/addtrip">Add Trip</NavLink> : null   }
              {this.props.token ? <NavLink className="navbar-link" to="/logout">Log Out</NavLink> : null }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  token: state.Account.token
})


const ConnectedNavbar = connect(mapStateToProps, null)(Navbar)

export default ConnectedNavbar
