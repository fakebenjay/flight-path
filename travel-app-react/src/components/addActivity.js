import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { bindActionCreators } from 'redux'
import { setRadius, setKeyword, fetchActivities } from '../actions/activitySearch'

class AddActivity extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false,
      step: 1,
      max: 50,
      min: 1
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.renderSearchFields = this.renderSearchFields.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.props.fetchActivities(this.props.activitySearch.radius, this.props.activitySearch.keyword, this.props.currentTrip.lng, this.props.currentTrip.lat, this.props.currentTrip.id)
  }

  changeValue(e) {
    this.props.setRadius(e)
  }

  handleChange(e) {
    this.props.setKeyword(e.target.value)
  }

  handleSearch() {
    this.props.fetchActivities(this.props.activitySearch.radius, this.props.activitySearch.keyword, this.props.currentTrip.lng, this.props.currentTrip.lat, this.props.currentTrip.id)
  }

  handleToggle() {
    this.setState({
      toggle: true
    })
  }


  renderSearchFields() {
    return (
      <div>
      Keyword: <input type="text" onChange={this.handleChange} value={this.state.keyword} />
      Radius: {this.props.activitySearch.radius}
      <Slider
        defaultValue={this.props.activitySearch.radius}
        onChange={this.changeValue}
        max={this.state.max}
        min={this.state.min}
       />
       <input type="submit" value="Search" onClick={this.handleSearch}/>
    </div>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Refine Search</button>
        {this.state.toggle ? this.renderSearchFields() : null}
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setRadius: setRadius,
    setKeyword: setKeyword,
    fetchActivities: fetchActivities
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    activitySearch: state.activitySearch,
    currentTrip: state.CurrentTrip
  }
}

const ConnectedAddActivity = connect(mapStateToProps, mapDispatchToProps)(AddActivity)

export default ConnectedAddActivity
