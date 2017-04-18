import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class MyTrips extends Component {
  render() {
    return (
    )
  }

  componentWillMount() {
    this.props.fetchTrips()
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.Trip
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchTrips: fetchTrips()
    }, dispatch)
  }
}

const ConnectedMyTrips = connect(mapStateToProps, mapDispatchToProps)(MyTrips)

export default MyTrips
