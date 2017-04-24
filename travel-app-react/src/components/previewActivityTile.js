import React from 'react'
import '../stylesheets/panel.css'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'

class PreviewActivityTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      isDisabled: true
    })
    this.props.handleClick()
  }

  render() {
    let name = this.props.activity.name
    let tripActNames = this.props.currentTrip.activities.map(act => act.name)
    let currActNames = this.props.currentActivities.map(act => act.name)
    let disabled = false
    if (tripActNames.includes(name) || currActNames.includes(name)) {
      disabled = true
    }
    let nameShort = name.substring(0,30)
    return (
      <div className="col-sm-4 tile">
        <div className="panel panel-default">
          <div className="panel-heading">
            <strong>{nameShort}</strong> - {this.props.activity.rating}
            <button className="btn btn-success btn-xs" href="" onClick={this.handleClick} disabled={disabled}>
              {disabled ? <FontAwesome className='icon' name='check'/> : <FontAwesome className='icon' name='plus'/>}
            </button>
          </div>
          <div className="fill">
              <img src={this.props.activity.img_url} className='img' alt=':('/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentActivities: state.Activity,
    currentTrip: state.CurrentTrip
  }
}

const ConnectedPreviewActivityTile = connect(mapStateToProps, null)(PreviewActivityTile)

export default ConnectedPreviewActivityTile


 // - Rating: {props.activity.rating ? props.activity.rating : <span>none</span>}
 // <input type="submit" disabled={props.isDisabled} value={props.isDisabled ? "Already Added!" : "Add Activity" } onClick={props.handleClick} />
