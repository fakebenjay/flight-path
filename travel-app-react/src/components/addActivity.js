import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { bindActionCreators } from 'redux'
import { setRadius, setKeyword, fetchActivities, removePotentialActivity } from '../actions/activitySearch'
import ConnectedPreviewActivityTile from './previewActivityTile'
import { saveActivity } from '../actions/activity'
import { fetchTrip } from '../actions/trips'

class AddActivity extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false,
      step: 1,
      max: 50,
      min: 1,
      addedActivities: []
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.renderSearchFields = this.renderSearchFields.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.renderPreviewActivities = this.renderPreviewActivities.bind(this)
  }

  componentWillMount() {
    this.props.fetchActivities(this.props.activitySearch.radius, this.props.activitySearch.keyword, this.props.currentTrip.lng, this.props.currentTrip.lat, this.props.currentTrip.id)
  }

  componentWillUnmount() {
    this.props.dispatch({type: "RESET_SEARCH"})
  }

  changeValue(e) {
    this.props.setRadius(e)
  }

  handleChange(e) {
    this.props.setKeyword(e.target.value)
  }

  handleSearch() {
    this.props.fetchActivities(this.props.activitySearch.radius, this.props.activitySearch.keyword, this.props.currentTrip.lng, this.props.currentTrip.lat, this.props.currentTrip.id)
    // this.props.fetchTrip(this.props.currentTrip.id)
  }

  handleToggle() {
    this.setState({
      toggle: true
    })
  }

  handleClick(activity) {
    // this.props.removePotentialActivity(activity)
    this.props.saveActivity(activity)
    this.setState({
      addedActivities: [...this.state.addedActivities, activity]
    })
  }

  isAdded(activity) {
    let filteredList = this.props.tripActivities.filter((plannedActivity) => plannedActivity.name === activity.name)
    return filteredList.length !== 0
  }

  renderPreviewActivities() {
    return this.props.activitySearch.activities.map((activity, index) => {
      return <ConnectedPreviewActivityTile key={index} activity={activity} isDisabled={this.isAdded(activity)} handleClick={this.handleClick.bind(null, activity)} tripActivities={this.props.tripActivities}/>
    })
  }

  renderSearchFields() {
    return (
      <div className='row'>
        <div className='col-sm-8'>
          Keyword: <input type="text" onChange={this.handleChange} value={this.state.keyword} />
          <br/>
          Radius: {this.props.activitySearch.radius} kilometers
          <Slider
            defaultValue={this.props.activitySearch.radius}
            onChange={this.changeValue}
            max={this.state.max}
            min={this.state.min}
           />
        </div>
        <div className='col-sm-4'>
          <br/>
          <button className="btn btn-primary active filter" onClick={this.handleSearch}>Filter</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container-flex">
        <div className='row search'>
          <div className="col-sm-8">
            {this.renderSearchFields()}
          </div>
        </div>
        <div className="container-flex">
          {this.props.activitySearch.activities.length === 0 ? null : this.renderPreviewActivities()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setRadius: setRadius,
    setKeyword: setKeyword,
    fetchTrip: fetchTrip,
    fetchActivities: fetchActivities,
    saveActivity: saveActivity,
    removePotentialActivity: removePotentialActivity,
    dispatch
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    activitySearch: state.activitySearch,
    currentTrip: state.CurrentTrip,
    tripActivities: state.CurrentTrip.activities
  }
}

const ConnectedAddActivity = connect(mapStateToProps, mapDispatchToProps)(AddActivity)

export default ConnectedAddActivity
