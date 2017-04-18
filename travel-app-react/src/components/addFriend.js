import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFriends } from '../actions/friends'

class AddFriend extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.listFriends = this.listFriends.bind(this)
  }
  listFriends() {
    return this.props.friends.map((friend) => {
      return <div><button value={friend.name} onClick={this.handleClick} key={friend.id} id={friend.id}/></div>
    })
  }
  handleChange(e) {
    this.setState({
      query: e.target.value
    })
    if (this.state.query.length > 2) {
      this.queryAPI(this.state.query)
    }
  }
  queryAPI(query) {
    this.props.fetchFriends(query)
  }
  handleClick() {

  }
  render() {
    return (
      <div>
        <input type='text' onKeyDown={this.handleChange}/>
        {this.listFriends.length > 0 ? this.listFriends() : null}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFriends: fetchFriends
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

const ConnectedAddFriend = connect(mapStateToProps, mapDispatchToProps)(AddFriend)

export default ConnectedAddFriend
