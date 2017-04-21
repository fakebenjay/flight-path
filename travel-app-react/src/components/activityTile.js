import React from 'react'
import Modal from 'react-modal'
import customStyles from '../stylesheets/modal'
import ConnectedEditActivity from './editActivity'

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
    return (
      <div>
        <div onClick={this.handleClick}>
          <div>
            <strong>{activity.name}</strong>
          </div>
          <div><em>Click to view or add comments</em></div>
          <div>
            <img src={activity.img_url} className="img-responsive"/>
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
