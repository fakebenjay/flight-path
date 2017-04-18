import React from 'react'

export const Friend = (props) => (
  <div><input type="button" onClick={props.handleClick} key={props.friend.id} id={props.friend.id} value={props.friend.username}/></div>
)
