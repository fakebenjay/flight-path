import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactBootstrapSlider from 'react-bootstrap-slider';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import { bindActionCreators } from 'redux'
import { setRadius, setKeyword } from '../actions/activitySearch'

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
  }

  changeValue(e) {
    debugger
    this.props.setRadius(this.state.radius)
  }

  handleChange(e) {
    this.props.setKeyword(e.target.value)
  }

  handleToggle() {
    this.setState({
      toggle: true
    })
  }


  renderSearchFields() {
    return (
      <div>
      <input type="text" onChange={this.handleChange} value={this.state.keyword} />
      <ReactBootstrapSlider
        value={this.state.radius}
        slideStop={this.changeValue}
        step={this.state.step}
        max={this.state.max}
        min={this.state.min}
        reversed={true} />
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
    setKeyword: setKeyword
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    activitySearch: state.activitySearch
  }
}

const ConnectedAddActivity = connect(mapStateToProps, mapDispatchToProps)(AddActivity)

export default ConnectedAddActivity
