import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrip } from '../actions/trips'
import { authorize } from '../actions/account'
import ConnectedNavbar from './Navbar'
import ConnectedActvities from './activitiesList'
// import ConnectedAddActivity from './addActivity'

class Trip extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: 0
    }
  }
  componentWillMount() {
    let tripID = this.props.match.params.id
    this.props.fetchTrip(tripID)
  }
  render() {
    let trip = this.props.trip
    let friends = []
    if (trip.accounts) {
      friends = trip.accounts
    }
    return (
      <div>
        {this.state.toggle === 0 ? <ConnectedActivities /> : <ConnectedAddActivity/>}

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
        Activities: <ConnectedActvities />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trip: state.CurrentTrip,
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
