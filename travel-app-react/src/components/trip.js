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
      <div className='container-flex'>
        <div className='col-sm-4'>
          <h2>Hi {this.props.account.username}, here's details of your trip:</h2>
          <h4>{trip.name}</h4>
          <div>{trip.formatted_name}</div>
          <div>
            Who's Going:
            <ul>{friends.map((account) => <li key={account.id}>{account.username}</li>)}</ul>
          </div>
          <div>
            Dates:
            <ul>
              <li>{trip.start_date}</li>
              <li>{trip.end_date}</li>
            </ul>
          </div>
          <h5>Add a Friend:</h5>
          <ConnectedAddFriendToTrip fetchTrip={this.fetchTrip}/>
        </div>
        <div className='col-sm-8'>
          <div className='row'>
            <div className="col-sm-4 col-sm-offset-4">
              <button onClick={this.handleClick}>Planned Activities</button>
              <button onClick={this.handleClick}>Add Activity</button>
            </div>
          </div>
          {this.state.toggle === 0 ? <ConnectedActivities/> : <ConnectedAddActivity/>}
        </div>
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
