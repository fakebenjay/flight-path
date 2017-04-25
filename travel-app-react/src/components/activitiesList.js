import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../actions/trips'
import { bindActionCreators } from 'redux'
import ActivityTile from './activityTile'
import { removePotentialActivity } from '../actions/activitySearch'

class ActivitiesList extends Component {
  constructor() {
    super()
    this.refreshCurrentTrip = this.refreshCurrentTrip.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  refreshCurrentTrip() {
    this.props.fetchTrip(this.props.trip.id)
  }
  handleRemove(activity) {
    this.props.removeActivity(activity)
  }
  render() {
    let actprops = this.props.trip.activities
    let activities = []
    if (actprops) {
      activities = actprops.map((activity, index) => {
        return <ActivityTile key={activity.id} activity={activity} trip={this.props.trip} onRemove={this.handleRemove} friends={this.props.trip.accounts} account={this.props.account} refreshCurrentTrip={this.refreshCurrentTrip}/>
      })
    }
    return (
      <div className="container-flex">
        <div className='row click'>
          <em>Click an activity to comment</em>
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
    fetchTrip: fetchTrip,
    removeActivity: removePotentialActivity
  }, dispatch)
}

const ConnectedActivities = connect(mapStateToProps, mapDispatchToProps)(ActivitiesList)

export default ConnectedActivities
