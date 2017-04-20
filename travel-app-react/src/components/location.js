import React from 'react'

export const Location = (props) => (
    <button onClick={props.handleClick}>{props.location.formatted_name}</button>
)
