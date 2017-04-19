import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../actions/trips'
import { Link } from 'react-router-dom'

class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem("token"),
      redirect: false,
      clickedTrip: null
    }
  }
  componentWillMount() {
    this.props.fetchTrips(this.state.token)
  }
  render() {
    // TODO serialize out account info from trip.accounts
    let trips = this.props.trips.map((trip) => {
      return  <li key={trip.id}><Link to={`/trips/${trip.id}`}><strong>{trip.name}</strong>:</Link>
                <ul>
                  <li>
                    Where To:
                    <ul><li>{trip.formatted_name}</li></ul>
                  </li>
                  <li>
                    Who's Going:
                    <ul>{trip.accounts.map((account) => <li>{account.username}</li>)}</ul>
                  </li>
                  <li>
                    Dates:
                    <ul>
                      <li>{trip.start_date}</li>
                      <li>{trip.end_date}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            })



    return (
      <div>
        {this.state.redirect ? this.handleRedirect() : null}
        <ul>
          {trips}
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
    fetchTrips: fetchTrips
  }, dispatch)
}


const ConnectedMyTrips = connect(mapStateToProps, mapDispatchToProps)(MyTrips)

export default ConnectedMyTrips
