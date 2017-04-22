import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/panel.css'

class TripTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let trip = this.props.trip
    return (
      <div className="col-sm-4 tile">
        <div className="panel panel-default">
          <div className="panel-heading">
            <Link to={`/trips/${trip.id}`}><strong>{trip.name}</strong> to {trip.formatted_name}</Link>
          </div>
          <div className="fill">
              <img src={trip.img_url} className='img' alt=':('/>
          </div>
        </div>
      </div>
    )
  }

}

export default TripTile
