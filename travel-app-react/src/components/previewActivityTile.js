import React, { Component } from 'react'

const PreviewActivityTile = (props) => (
      <div>
        <h3>{props.activity.name}</h3>
        <p>{props.activity.rating ? props.activity.rating : <p>No Rating</p>}</p>
        <img src={props.activity.img_url} alt=":(" className="img-responsive"/>
        <p>{props.activity.address}</p>
        <input type="submit" value="Add Activity" onClick={props.handleClick} />
      </div>
    )

export default PreviewActivityTile
