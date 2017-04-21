import React from 'react'
import { Link } from 'react-router-dom'

class TripTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let trip = this.props.trip
    return (
      <div>
        <div>
          <Link to={`/trips/${trip.id}`}><strong>{trip.name}</strong></Link>
        </div>
        <div>
          to {trip.formatted_name}
        </div>
        <img src={trip.img_url} alt=':(' className="img-responsive"/>
      </div>
    )
  }

}

export default TripTile
