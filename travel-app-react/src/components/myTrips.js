import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../actions/trips'


class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem("token")
    }
  }
  componentWillMount() {
    this.props.fetchTrips(this.state.token)
  }
  render() {
    // TODO serialize out account info from trip.accounts
    let trips = this.props.trips.map((trip) => {
      return  <li><strong>{trip.name}</strong>:
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
