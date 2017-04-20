import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactBootstrapSlider from 'react-bootstrap-slider';

class addActivity extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      toggle: false,
      step: 1,
      max: 50,
      min: 1
      radius: this.props.activitySearch.radius,
      keyword: this.props.activitySearch.keyword
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
    this.setState({
      this.props.setKeyword(e.target.value)
    })
  }

  handleToggle() {
    this.setState({
      toggle: true
    })
  }


  renderSearchFields() {
    return (
      <div>
    <ReactBootstrapSlider
      value={this.state.radius}
      slideStop={this.changeValue}
      step={this.state.step}
      max={this.state.max}
      min={this.state.min}
      reversed={true} />
      <input type="text" onChange={this.handleChange} value={this.state.keyword} />
    </div>
    )
  }

  render() {
    return (
      <div>
      {this.state.toggle ? this.renderSearchFields() : null}
      <button value="Refine Search" onClick={this.handleToggle} />
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
    activitySearch: state.actvitiySearch
  }
}
