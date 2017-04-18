import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFriends, addFriend, removeFriend } from '../actions/friends'
import { Friend } from './friend'

class AddFriend extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.listFriends = this.listFriends.bind(this)
    this.friendsAdded = this.friendsAdded.bind(this)
  }
  listFriends() {
    return this.props.friends.potentialFriends.map((friend) => {
      return <li><Friend friend={friend} handleClick={this.handleClick.bind(null, friend)}/></li>
    })
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
          {this.props.friends.potentialFriends.length > 0 ? this.listFriends() : null}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFriends: fetchFriends,
    addFriend: addFriend,
    removeFriend: removeFriend
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    friends: state.Friends
  }
}

const ConnectedAddFriend = connect(mapStateToProps, mapDispatchToProps)(AddFriend)

export default ConnectedAddFriend
