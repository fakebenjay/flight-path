import { Redirect } from 'react-router-dom'
import React,{ Component } from 'react'
import { authorize } from '../actions/account'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Auth extends Component  {
  constructor() {
    super()

    this.authorization = this.authorization.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  componentWillMount() {
    this.authorization()
  }

  authorization() {
    let token = localStorage.getItem("token")
      if (token) {
      this.props.authorize(token)
    }
  }


  handleRedirect() {
    return <Redirect to="/login" />
  }

  render() {
    return (
      <div>
        <div>
            {this.props.account.account_id ? null : this.handleRedirect() }
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
    authorize: authorize
  }, dispatch)
}

const ConnectedAuth = connect(mapStateToProps, mapDispatchToProps)(Auth)

export default ConnectedAuth
