import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAccount } from '../actions/account'
import ConnectedNavbar from './Navbar'
import { fetchTrip } from '../actions/trips'
import { authorize } from '../actions/account'

class Trip extends React.Component {
  constructor() {
    super()
  }
  componentWillMount() {
    let token = localStorage.getItem('token')
    let tripID = this.props.match.params.id
    this.props.fetchTrip(tripID)
    this.props.authorize(token)
  }
  render() {
    let trip = this.props.trip
    let friends = []
    if (trip.accounts) {
      friends = trip.accounts
    }
    return (
      <div>
        <ConnectedNavbar />
        <div>Hi {this.props.account.username}, here's details of your trip:</div>
        <div>{trip.name}</div>
        <div>{trip.formatted_name}</div>
        <li>
          Who's Going:
          <ul>{friends.map((account) => <li>{account.username}</li>)}</ul>
        </li>
        <li>
          Dates:
          <ul>
            <li>{trip.start_date}</li>
            <li>{trip.end_date}</li>
          </ul>
        </li>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trip: state.Trip,
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTrip: fetchTrip,
    authorize: authorize
  }, dispatch)
}


const ConnectedTrip = connect(mapStateToProps, mapDispatchToProps)(Trip)

export default ConnectedTrip