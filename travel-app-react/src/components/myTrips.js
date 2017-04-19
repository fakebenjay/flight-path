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
    // this.handleClick = this.handleClick.bind(this)
  }
  // handleClick(e) {
  //   this.setState({
  //     redirect: true,
  //     clickedTrip: e.target.id
  //   })
  // }
  // handleRedirect() {
  //   let tripID = this.state.clickedTrip
  //   return <Redirect to={`/trips/${tripID}`} />
  // }
  componentWillMount() {
    this.props.fetchTrips(this.state.token)
  }
  render() {
    // TODO serialize out account info from trip.accounts
    let trips = this.props.trips.map((trip) => {
      return  <div>
                <Link to={`/trips/${trip.id}`}><strong>{trip.name}</strong>:</Link><br/>
                Where To: {trip.formatted_name}<br/>
                Who's Going:<br/>
                <ul>{trip.accounts.map((account) => <li>{account.username}</li>)}</ul>
                Dates:<br/>
                Start: {trip.start_date}<br/>
                End: {trip.end_date}<br/>
              </div>
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
