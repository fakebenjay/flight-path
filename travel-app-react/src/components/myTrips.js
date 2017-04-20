import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrips, fetchTripImage } from '../actions/trips'
import ConnectedNavbar from './Navbar'
import TripTile from './tripTile'

class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem("token"),
    }
  }
  componentWillMount() {
    let token = localStorage.getItem('token')
    this.props.fetchTrips(token)
  }
  listTrips() {
    return this.props.trips.map((trip) => {
      return <TripTile key={trip.id} trip={trip}/>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.listTrips()}
        </ul>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    trips: state.Trip
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTrips: fetchTrips,
    fetchTripImage: fetchTripImage
  }, dispatch)
}


const ConnectedMyTrips = connect(mapStateToProps, mapDispatchToProps)(MyTrips)

export default ConnectedMyTrips
