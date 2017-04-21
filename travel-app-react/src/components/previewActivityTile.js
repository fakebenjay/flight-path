import React from 'react'

const PreviewActivityTile = (props) => (
      <div>
        <h3>{props.activity.name}</h3>
        <div>{props.activity.rating ? props.activity.rating : <h2>No Rating</h2>}</div>
        <img src={props.activity.img_url} alt=":(" className="img-responsive"/>
        <p>{props.activity.address}</p>
        <input type="submit" value="Add Activity" onClick={props.handleClick} />
      </div>
    )

export default PreviewActivityTile
