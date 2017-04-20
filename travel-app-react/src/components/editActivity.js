import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editActivity } from '../actions/editActivity'

class EditActivity extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.editActivity(this.state.input, this.props.activity, this.props.account)
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div>Add a Comment:</div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}/>
          <input type='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editActivity: editActivity
  }, dispatch)
}

const ConnectedEditActivity = connect(mapStateToProps, mapDispatchToProps)(EditActivity)

export default ConnectedEditActivity
