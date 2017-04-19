import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../actions/trips'
import ConnectedAuth from '../utils/auth'
import ConnectedNavbar from './Navbar'

class MyTrips extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    let token = localStorage.getItem('token')
    this.props.fetchTrips(token)
  }

  listTrips() {
    return this.props.trips.map((trip) => {
      return  (
        <li><strong>{trip.name}</strong>:
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
            )
          })
  }

  render() {
    return (
      <div>
        <ConnectedNavbar />
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
    fetchTrips: fetchTrips
  }, dispatch)
}


const ConnectedMyTrips = connect(mapStateToProps, mapDispatchToProps)(MyTrips)

export default ConnectedMyTrips
