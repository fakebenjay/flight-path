import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ConnectedAddFriend from './addFriend'

class AddTrip extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      startDate: moment(),
      endDate: moment(),
      location: null,
      friends: [],
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleDateStart = this.handleDateStart.bind(this)
    this.handleDateEnd = this.handleDateEnd.bind(this)
  }
  handleChange(e) {
    let target = e.target.name
    this.setState({
      [target]: e.target.value
    })
  }
  handleClick(e) {
    e.preventDefault()
    this.setState({
      redirect: true
    })
  }
  handleRedirect() {
    return (
      <Redirect to={'/mytrips'}/>
    )
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
  render() {
    return (
      <div>
        {this.state.redirect ? this.handleRedirect : null}
        <input type='text' placeholder='Trip Name' onChange={this.handleChange} name='name'/>
        <DatePicker selected={this.state.startDate} onChange={this.handleDateStart}/>
        <DatePicker selected={this.state.endDate} onChange={this.handleDateEnd}/>
        <input type='text' placeholder='Location' onChange={this.handleChange} name='location'/>
        <ConnectedAddFriend />
        <input type='submit' value='Create Trip' onClick={this.handleClick}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const ConnectedAddTrip = connect(null, mapDispatchToProps)(AddTrip)

export default ConnectedAddTrip
