import React from 'react'
import Modal from 'react-modal'
import customStyles from '../stylesheets/modal'
import ConnectedEditActivity from './editActivity'

class ActivityTile extends React.Component {
  constructor() {
    super()
    this.state = {
      modalStatus: false,
      activityDate: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  handleClick() {
    this.setState({
      modalStatus: true
    })
  }
  closeModal() {
    this.setState({
      modalStatus: false
    })
  }
  render() {
    let activity = this.props.activity
    return (
      <div>
        <div onClick={this.handleClick}>
          <div>
            <strong>{activity.name}</strong>
          </div>
          <div><em>Click to view or add comments</em></div>
          <div>
            <img src={activity.img_url} alt=":(" className="img-responsive"/>
          </div>
        </div>
        <Modal isOpen={this.state.modalStatus} style={customStyles} contentLabel="Activity Modal">
          <h2>{activity.name}</h2>
          <ConnectedEditActivity activity={activity}/>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default ActivityTile
