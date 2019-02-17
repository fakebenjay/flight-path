import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import FontAwesome from 'react-fontawesome'
import { customStyles } from '../../stylesheets/modal'
import '../../stylesheets/panel.css'


class PreviewActivityTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      infoModalStatus: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.openInfoModal = this.openInfoModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  handleClick() {
    this.setState({
      isDisabled: true
    })
    this.props.handleClick()
  }
  openInfoModal() {
    this.setState({
      infoModalStatus: true
    })
  }
  closeModal() {
    this.setState({
      infoModalStatus: false
    })
  }
  render() {
    let activity = this.props.activity
    let name = this.props.activity.name
    let tripActNames = this.props.currentTrip.activities.map(act => act.name)
    let currActNames = this.props.currentActivities.map(act => act.name)
    let disabled = false
    if (tripActNames.includes(name) || currActNames.includes(name)) {
      disabled = true
    }
    let nameShort = name.substring(0,30)
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 pb-xs-12 pb-sm-6 tile">
        <div className="panel panel-default">
          <div className="panel-heading">
            <strong onClick={this.openInfoModal}>{nameShort} - {this.props.activity.rating}</strong>
            <button className="btn btn-success btn-xs" href="" onClick={this.handleClick} disabled={disabled}>
              {disabled ? <FontAwesome className='icon' name='check'/> : <FontAwesome className='icon' name='plus'/>}
            </button>
          </div>
          <div onClick={this.openInfoModal} className="fill">
              <img src={this.props.activity.img_url} className='img' alt=':('/>
          </div>
        </div>

        <Modal isOpen={this.state.infoModalStatus} onRequestClose={this.closeModal} style={customStyles} contentLabel="Activity Modal">
          <h2>{activity.name}</h2>
          <p>Address: {activity.address}</p>
          <p>Rating: {activity.rating}/5</p>
          <p>For more info and to view in Google Maps, click <a target="_blank" href={`https://www.google.com/maps/place/${activity.name}/@${activity.lat},${activity.lng},17z/`}>here</a>!</p>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentActivities: state.Activity,
    currentTrip: state.CurrentTrip
  }
}

const ConnectedPreviewActivityTile = connect(mapStateToProps, null)(PreviewActivityTile)

export default ConnectedPreviewActivityTile


 // - Rating: {props.activity.rating ? props.activity.rating : <span>none</span>}
 // <input type="submit" disabled={props.isDisabled} value={props.isDisabled ? "Already Added!" : "Add Activity" } onClick={props.handleClick} />
