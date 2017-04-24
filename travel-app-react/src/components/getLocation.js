import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { setLocation, clearLocations, fetchLocations } from '../actions/location'
import { connect } from 'react-redux'
import ReactBootstrap from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Location } from './location'


class GetLocation extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.listLocations = this.listLocations.bind(this)

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


  render() {
    return (
      <div>
        <ButtonGroup vertical>
        <input type="text" className="custom-input title-field" placeholder="Where would you like to go?" onChange={this.handleChange} value={this.props.location.formattedName.length > 0 ? this.props.location.formattedName : this.state.query} />
          {this.props.location.locations.length > 0 ? this.listLocations() : null}
        </ButtonGroup>
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
    fetchLocations: fetchLocations
  }, dispatch)
}

const ConnectedGetLocation = connect(mapStateToProps, mapDispatchToProps)(GetLocation)

export default ConnectedGetLocation
