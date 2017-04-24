import React from 'react'
import Modal from 'react-modal'
import customStyles from '../stylesheets/modal'
import ConnectedEditActivity from './editActivity'
import FontAwesome from 'react-fontawesome'
import '../stylesheets/panel.css'

class ActivityTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false,
      comments: this.props.activity.comments
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.updateState = this.updateState.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleClick() {
    this.setState({
      modalStatus: true
    })
  }
  handleRemove(e) {
    e.preventDefault()
    this.props.onRemove(this.props.activity)
  }
  closeModal() {
    this.setState({
      modalStatus: false
    })
    this.props.refreshCurrentTrip()
  }
  updateState(comment) {
    let id = this.state.comments.length
    let newComment = {comment: comment, id: id, author: 'me'}
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }
  render() {
    let activity = this.props.activity
    let comments = this.state.comments.map((comment) => {
      let author = this.props.friends.filter((friend) => {
        return friend.id === comment.account_id
      })
      if (author[0] && author[0].username !== this.props.account.username) {
        return <li key={comment.id}>{comment.comment} - {author[0].username}</li>
      } else {
        return <li key={comment.id}>{comment.comment} - me</li>
      }

    })
    let nameShort = activity.name.substring(0,35)
    let disabled = this.props.trip.creator_id !== this.props.account.account_id
    return (
      <div className="col-sm-4 tile">
        <div className="panel panel-default">
          <div className="panel-heading">
            <span onClick={this.handleClick}>
              <strong>{nameShort}</strong>
            </span>
            {disabled ? null : <button className="btn btn-danger btn-xs" href="" onClick={this.handleRemove}>
              <FontAwesome className='icon' name='minus'/>
            </button>
          }
          </div>
          <div onClick={this.handleClick} className="fill">
              <img src={activity.img_url} className='img' alt=':('/>
          </div>
        </div>
        <Modal isOpen={this.state.modalStatus} style={customStyles} contentLabel="Activity Modal">
          <h2>{activity.name}</h2>
          <ul>
            {comments}
          </ul>
          <ConnectedEditActivity activity={activity} updateState={this.updateState}/>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default ActivityTile
