import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { setLocation, clearLocation } from '../actions/location'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { customStyles } from '../stylesheets/modal'


class GetLocation extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      isModalOpen: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleYes = this.handleYes.bind(this)
    this.handleNo = this.handleNo.bind(this)

  }

  handleNo() {
    this.setState({
      query: '',
      isModalOpen: false
    })
  }

  handleYes() {
    this.setState({
      isModalOpen: false,
      query: this.props.location.formattedName
    })
  }

  handleClose() {
    this.setState({
      isModalOpen: false
    })
    this.props.clearLocation()
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleClick() {
    this.props.setLocation(this.state.query)
    this.setState({
      isModalOpen: true
    })
  }

  render() {

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.query} />
        <input type="submit" onClick={this.handleClick} value="Find Location" />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleClose}
          style={customStyles}
          contentLabel="Modal"
          >
            <h2>Did You Mean?</h2>
            <p>{this.props.location.formattedName} ? </p>
            <input type="submit" onClick={this.handleYes} value="Yes" />
            <input type="submit" onClick={this.handleNo} value="No" />
          </Modal>
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
    clearLocation: clearLocation
  }, dispatch)
}

const ConnectedGetLocation = connect(mapStateToProps, mapDispatchToProps)(GetLocation)

export default ConnectedGetLocation
