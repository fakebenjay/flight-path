import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAccount } from '../actions/account'

class Trip extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>Hi {this.props.account.username}, here's details of your trip:</div>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    trips: state.Trip,
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // fetchTrip: fetchTrip
  }, dispatch)
}


const ConnectedTrip = connect(mapStateToProps, mapDispatchToProps)(Trip)

export default ConnectedTrip
