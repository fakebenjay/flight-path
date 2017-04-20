import React from 'react'
import { Link } from 'react-router-dom'

class ActivityTile extends React.Component {
  render() {
    let activity = this.props.activity
    return (
      <div>
        <div>
          <strong>{activity.name}</strong>
        </div>
        <div>
          <img src={activity.img_url} alt=":(" className="img-responsive"/>
        </div>
      </div>
    )
  }
}

export default ActivityTile
