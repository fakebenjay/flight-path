import React from 'react'
import '../stylesheets/panel.css'

const PreviewActivityTile = (props) => (
  <div className="col-sm-6 tile">
    <div className="panel panel-default">
      <div className="panel-heading">
        <span className='col-md-8'>
          <strong>{props.activity.name}</strong> - Rating: {props.activity.rating ? props.activity.rating : <span>none</span>}
        </span>
        <span className='col-md-4'>
          <input type="submit" disabled={props.isDisabled} value={props.isDisabled ? "Already Added!" : "Add Activity" } onClick={props.handleClick} />
        </span>
      </div>
      <div className="fill">
          <img src={props.activity.img_url} className='img' alt=':('/>
      </div>
    </div>
  </div>
)

export default PreviewActivityTile
