import React from 'react'

export const Friend = (props) => (
  <div>{props.friend.username} <input type="submit" value="Add Friend" onClick={props.handleClick}/></div>
)
