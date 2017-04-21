import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrip } from '../actions/trips'
import { authorize } from '../actions/account'
import ConnectedActivities from './activitiesList'
import ConnectedAddActivity from './addActivity'
import ConnectedAddFriendToTrip from './addFriendToTrip'

class Trip extends React.Component {
  constructor(props) {
    super()
    this.state = {
      toggle: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    let tripID = this.props.match.params.id
    this.props.fetchTrip(tripID)
  }

  handleClick() {
    let toggleId = this.state.toggle
    if (toggleId === 0) {
      this.setState({
        toggle: 1
      })
    } else {
      this.setState({
        toggle: 0
      })
    }
    this.props.fetchTrip(this.props.match.params.id)
  }
  render() {
    let trip = this.props.trip
    let friends = []
    if (trip.accounts) {
      friends = trip.accounts
    }
    return (
      <div>
        <div>Hi {this.props.account.username}, here's details of your trip:</div>
        <div>{trip.name}</div>
        <div>{trip.formatted_name}</div>
        <li>
          Who's Going:
          <ul>{friends.map((account) => <li key={account.id}>{account.username}</li>)}</ul>
        </li>
        <li>
          Dates:
          <ul>
            <li>{trip.start_date}</li>
            <li>{trip.end_date}</li>
          </ul>
        </li>
        <button onClick={this.handleClick}>Planned Activities</button>
        <button onClick={this.handleClick}>Add Activity</button>
        <ConnectedAddFriendToTrip fetchTrip={this.fetchTrip}/>
        {this.state.toggle === 0 ? <ConnectedActivities/> : <ConnectedAddActivity/>}
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
