import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { setLocation, clearLocations, fetchLocations, resetSearch } from '../actions/location'
import { connect } from 'react-redux'
import ReactBootstrap from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Location } from './location'
import FontAwesome from 'react-fontawesome'


class GetLocation extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.listLocations = this.listLocations.bind(this)
    this.renderResetButton = this.renderResetButton.bind(this)
    this.handleSearchReset = this.handleSearchReset.bind(this)
  }


  handleChange(e) {
    if (this.state.query.length > e.target.value.length) {
      this.setState({
        query: e.target.value
      })
      this.props.clearLocations()
    } else {
      this.setState({
        query: e.target.value
      })
    if (this.state.query.length > 0) {
      this.props.fetchLocations(this.state.query)
    }
    }
  }

  handleClick(e) {
    this.props.setLocation(e)
    this.props.clearLocations()
  }

  listLocations() {
    return this.props.location.locations.map((location) => {
      return <Location key={location.google_id} handleClick={this.handleClick.bind(null, location)} location={location}/>
    })
  }

  handleSearchReset() {
    this.props.resetSearch()
    this.setState({
      query: ''
    })
  }


  renderResetButton () {
    return (
        <button className="no-border" onClick={this.handleSearchReset}><FontAwesome className="larger-times" name='times'/></button>
    )
  }


  render() {
    return (
      <div>
        <ButtonGroup vertical>
        <input type="text" className="custom-input title-field" placeholder="Where would you like to go?" onChange={this.handleChange} value={this.props.location.formattedName.length > 0 ? this.props.location.formattedName : this.state.query} />
          {this.props.location.locations.length > 0 ? this.listLocations() : null}
        </ButtonGroup>
        {this.props.location.hasBeenFound ? this.renderResetButton() : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.Location
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLocation: setLocation,
    clearLocations: clearLocations,
    fetchLocations: fetchLocations,
    resetSearch: resetSearch
  }, dispatch)
}

const ConnectedGetLocation = connect(mapStateToProps, mapDispatchToProps)(GetLocation)

export default ConnectedGetLocation
