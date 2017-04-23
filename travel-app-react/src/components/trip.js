import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrip, updateStartDate, updateEndDate, leaveTrip, removeTrip } from '../actions/trips'
import ConnectedActivities from './activitiesList'
import ConnectedAddActivity from './addActivity'
import ConnectedAddFriendToTrip from './addFriendToTrip'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class Trip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: 0,
      startDate: moment(),
      endDate: moment(),
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleDateEnd = this.handleDateEnd.bind(this)
    this.handleDateStart = this.handleDateStart.bind(this)
    this.listFriends = this.listFriends.bind(this)
    this.renderDateFields = this.renderDateFields.bind(this)
    this.leaveTripClick = this.leaveTripClick.bind(this)
    this.renderDeleteOrLeave = this.renderDeleteOrLeave.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
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

  listFriends() {
    let friends = []
      if (this.props.trip.accounts) {
        friends = this.props.trip.accounts
      }
    if (friends.length === 0) {
      return <h4 className="sub-title">You haven't added any friends yet!</h4>
    } else {
      return friends.map((friend) => friend.username)
      }
    }


  handleDateStart(date) {
    this.setState({
      startDate: date
    })
    this.props.updateStartDate(date, this.props.trip.id, this.props.account.token)
  }
  handleDateEnd(date) {
    this.setState({
      endDate: date
    })
    this.props.updateEndDate(date, this.props.trip.id, this.props.account.token)
  }

  renderDateFields() {
    let trip = this.props.trip
    if (this.props.account.account_id == trip.creator_id) {
      return (
        <div>
          <DatePicker className="custom-input trip-edit-field" selected={moment(trip.start_date, "YYYY-MM-DD")} onChange={this.handleDateStart}/>
          <DatePicker className="custom-input trip-edit-field" selected={moment(trip.end_date, "YYYY-MM-DD")} onChange={this.handleDateEnd}/>
        </div>
      )} else {
        return (
          <div>
            <input className="custom-input trip-edit-field" value={trip.start_date} disabled="true"/>
            <input className="custom-input trip-edit-field" value={trip.end_date} disabled="true"/>
          </div>
        )}
  }

  renderDeleteOrLeave() {
    if (this.props.trip.creator_id === this.props.account.id) {
      return <button onClick={this.leaveTripClick}>Delete Trip</button>
    } else {
      return <button onClick={this.leaveTripClick}>Leave Trip</button>
    }
  }

  leaveTripClick() {
    this.props.leaveTrip(this.props.account.account_id, this.props.account.token, this.props.trip.id)
    this.props.removeTrip(this.props.trip.id)
    this.setState({
      redirect: true
    })
  }

    handleRedirect() {
      return (
        <Redirect to={'/mytrips'}/>
      )
    }


  render() {
    let trip = this.props.trip
    return (
      <div className="col-md-12">
        {this.state.redirect ? this.handleRedirect() : null}
        <div className="col-md-4">
          <div className="row">
            <h2 className="title-field">{trip.name} to {trip.formatted_name}</h2>
            {this.renderDeleteOrLeave()}
          </div>
          <div className="row add-trip-row">
            <div className="row"><h4 className="sub-title date">Start Date &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; End Date</h4></div>
            {this.renderDateFields()}
          </div>
          <div className="row add-trip-row">
            <h4 className="sub-title">Travelers</h4>
            {this.listFriends()}
          </div>
          <div className="row add-trip-row">
            <h4 className="sub-title">Add some more friends below!</h4>
          </div>
        <div className="row"><ConnectedAddFriendToTrip fetchTrip={this.fetchTrip}/></div>
      </div>
      <div className="col-md-8">
        <button onClick={this.handleClick}>Planned Activities</button>
        <button onClick={this.handleClick}>Add Activity</button>
        {this.state.toggle === 0 ? <ConnectedActivities/> : <ConnectedAddActivity/>}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trip: state.CurrentTrip,
    account: state.Account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTrip: fetchTrip,
    updateEndDate: updateEndDate,
    updateStartDate: updateStartDate,
    leaveTrip: leaveTrip,
    removeTrip: removeTrip
  }, dispatch)
}


const ConnectedTrip = connect(mapStateToProps, mapDispatchToProps)(Trip)

export default ConnectedTrip
