import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ConnectedAddFriend from './addFriend'
import ConnectedGetLocation from './getLocation'
import { addTrip } from '../actions/trips'
import '../stylesheets/addtrip.css'
import '../stylesheets/submit_and_input.css'

class AddTrip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      startDate: moment(),
      endDate: moment(),
      lat: this.props.location.lat,
      lng: this.props.location.lng,
      formattedName: this.props.location.formattedName,
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleDateStart = this.handleDateStart.bind(this)
    this.handleDateEnd = this.handleDateEnd.bind(this)
    this.renderError = this.renderError.bind(this)
  }


  handleChange(e) {
    let target = e.target.name
    this.setState({
      [target]: e.target.value
    })
  }

  handleRedirect() {
    return (
      <Redirect to={'/mytrips'}/>
    )
  }

  handleClick() {
    let today = moment()
    if (this.props.location.hasBeenFound && this.state.name !== '' &&  this.state.endDate !== today) {
      let trip = {}
      trip.formatted_name = this.props.location.formattedName
      trip.google_id = this.props.location.googleId
      trip.name = this.state.name
      trip.start_date = this.state.startDate.utc()
      trip.end_date = this.state.endDate.utc()
      let token = localStorage.getItem("token")
      let friends = []
      this.props.friends.forEach((friend) => {
        friends.push(friend.id)
      })
      this.props.addTrip(trip, token, friends)
      this.setState({
        error: false,
      })
    }
    else {
      this.setState({
        error: true
      })
    }
  }


  handleDateStart(date) {
    this.setState({
      startDate: date
    })
  }
  handleDateEnd(date) {
    this.setState({
      endDate: date
    })
  }

  renderError() {
    return <h4>Please make sure you fill out all of the fields!</h4>
  }

  render() {
    return (
      <div>
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="container-fluid">
          {this.props.location.redirect ? this.handleRedirect() : null}
          <div className="row add-trip-row">
            <h1 className="add-trip-title">Begin Your Journey</h1>
          </div>
          <div className="row">
            <input type='text' className="custom-input title-field" placeholder='Trip Name' onChange={this.handleChange} name='name'/>
          </div>
        <div className="row add-trip-row">
            <ConnectedGetLocation />
            <DatePicker className="col-md-2 col-md-offset-5 text-center custom-input trip-planning-field" selected={this.state.startDate} onChange={this.handleDateStart}/>
            <DatePicker className="col-md-2 col-md-offset-5 text-center custom-input trip-planning-field" selected={this.state.endDate} onChange={this.handleDateEnd}/>
            <ConnectedAddFriend />
        </div>
        <div className="col-md-12">
          <div className="row add-trip-row">
            <input type='submit' className="custom-submit" value='Create Trip' onClick={this.handleClick}/>
          </div>
        </div>
        <div className="row add-trip-row">
          {this.state.error ? this.renderError() : null }
        </div>
      </div>
    </div>
    <div className="col-md-1"></div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTrip: addTrip,
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    location: state.Location,
    friends: state.Friends.addedFriends
  }
}

const ConnectedAddTrip = connect(mapStateToProps, mapDispatchToProps)(AddTrip)

export default ConnectedAddTrip
