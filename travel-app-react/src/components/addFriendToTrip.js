import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFriends, addFriendToTrip, removeFriend, removeAddedFriend, clearFriends } from '../actions/friends'
import '../stylesheets/trip.css'

class AddFriendToTrip extends React.Component {
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
      return <li key={friend.id}>{friend.username} <input type="submit" value="Add Friend" onClick={this.handleClick.bind(null, friend)}/></li>
    })
  }
  listAddedFriends() {
    return this.props.friends.addedFriends.map((friend) => {
      return <li key={friend.id}>{friend.username} <input type="submit" value="Remove Friend" onClick={this.removeAddedFriendClick.bind(null, friend)}/></li>
    })
  }

  removeAddedFriendClick(e) {
    this.props.removeAddedFriend(e)
  }

  handleChange(e) {
    if (this.state.query.length > e.target.value.length) {
      this.setState({
        query: e.target.value
      })
      this.props.clearFriends()
    } else {
      this.setState({
        query: e.target.value
      })
    if (this.state.query.length > 0) {
      this.queryAPI(this.state.query)
    }
  }
}

  queryAPI(query) {
    this.props.fetchFriends(query, this.props.account.token)
  }

  handleClick(e) {
    this.props.addFriendToTrip(e, this.props.trip)
    this.props.removeFriend(e)
  }

  friendsAdded() {
    return this.props.friends.addedFriends.map((friend) => {
      return <div><li key={friend.id}>{friend.username}</li></div>
    })
  }
  render() {
    return (
      <div>
        <input type='text' className="custom-input trip-edit-field" onChange={this.handleChange}/>
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
    addFriendToTrip: addFriendToTrip,
    removeFriend: removeFriend,
    removeAddedFriend: removeAddedFriend,
    clearFriends: clearFriends
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    friends: state.Friends,
    account: state.Account,
    trip: state.CurrentTrip
  }
}

const ConnectedAddFriendToTrip = connect(mapStateToProps, mapDispatchToProps)(AddFriendToTrip)

export default ConnectedAddFriendToTrip
