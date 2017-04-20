import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearAccount } from '../actions/account'
import { Redirect } from 'react-router-dom'

class Logout extends Component {

  componentDidMount() {
    localStorage.removeItem("token")
    this.props.clearAccount()
    this.props.history.push('/login')
  }

  render() {
    return (
      <h1>Logging Out</h1>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.Account
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearAccount: clearAccount
  }, dispatch)
}

const ConnectedLogout = connect(mapStateToProps, mapDispatchToProps)(Logout)

export default ConnectedLogout
