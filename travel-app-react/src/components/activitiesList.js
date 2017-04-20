import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActivityTile from './activityTile'

class ActivitiesList extends Component {
  render() {
    let actprops = this.props.trip.activities
    let activities = []
    if (actprops) {
      activities = actprops.map((activity) => {
        return <li><ActivityTile key={activity.id} activity={activity}/></li>
      })
    }
    return (
      <div>
        <ul>
          {activities}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trip: state.CurrentTrip
  }
}

const ConnectedActivities = connect(mapStateToProps, null)(ActivitiesList)

export default ConnectedActivities
