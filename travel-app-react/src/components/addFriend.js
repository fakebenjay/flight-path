import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFriends, addFriend, removeFriend, removeAddedFriend } from '../actions/friends'
import { Friend } from './friend'

class AddFriend extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.listPotentialFriends = this.listPotentialFriends.bind(this)
    this.friendsAdded = this.friendsAdded.bind(this)
    this.listAddedFriends = this.listAddedFriends.bind(this)
    this.removeAddedFriendClick = this.removeAddedFriendClick.bind(this)
  }
  listPotentialFriends() {
    return this.props.friends.potentialFriends.map((friend) => {
      return <li>{friend.username} <input type="submit" value="Add Friend" onClick={this.handleClick.bind(null, friend)}/></li>
    })
  }
  listAddedFriends() {
    return this.props.friends.addedFriends.map((friend) => {
      return <li>{friend.username} <input type="submit" value="Remove Friend" onClick={this.removeAddedFriendClick.bind(null, friend)}/></li>
    })
  }

  removeAddedFriendClick(e) {
    this.props.removeAddedFriend(e)
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    })
    if (this.state.query.length > 0) {
      this.queryAPI(this.state.query)
    }
  }
  queryAPI(query) {
    this.props.fetchFriends(query)
  }
  handleClick(e) {
    this.props.addFriend(e)
    this.props.removeFriend(e)
  }

  friendsAdded() {
    return this.props.friends.addedFriends.map((friend) => {
      return <div><li>{friend.username}</li></div>
    })
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange}/>
        <ul>
          {this.props.friends.potentialFriends.length > 0 ? (
            <h4>Users Matching Your Search</h4>, this.listPotentialFriends() ) : null}
          {this.props.friends.addedFriends.length > 0 ? (
            <h4>Friends Added</h4>, this.listAddedFriends() ) : null}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFriends: fetchFriends,
    addFriend: addFriend,
    removeFriend: removeFriend,
    removeAddedFriend: removeAddedFriend
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    friends: state.Friends
  }
}

const ConnectedAddFriend = connect(mapStateToProps, mapDispatchToProps)(AddFriend)

export default ConnectedAddFriend
