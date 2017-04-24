import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../actions/trips'
import { bindActionCreators } from 'redux'
import ActivityTile from './activityTile'

class ActivitiesList extends Component {
  constructor() {
    super()
    this.refreshCurrentTrip = this.refreshCurrentTrip.bind(this)
  }
  refreshCurrentTrip() {
    this.props.fetchTrip(this.props.trip.id)
  }
  render() {
    let actprops = this.props.trip.activities
    let activities = []
    if (actprops) {
      activities = actprops.map((activity, index) => {
        return <ActivityTile activity={activity} friends={this.props.trip.accounts} account={this.props.account} refreshCurrentTrip={this.refreshCurrentTrip}/>
      })
    }
    return (
      <div className="container-flex">
        <div className='row search'>
          <div className="col-sm-8"><h5><em>Click an activity to comment</em></h5></div>
        </div>
        <div className="container-flex">
          {activities}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trip: state.CurrentTrip,
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTrip: fetchTrip
  }, dispatch)
}

const ConnectedActivities = connect(mapStateToProps, mapDispatchToProps)(ActivitiesList)

export default ConnectedActivities
