import React, { Component } from 'react'

export class AddWork extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }


  render() {
    const { companyName, position, tasks, from, to } = this.props

    return (
      <form onSubmit={this.props.submitWork} style={this.props.add}>
        <div>
          <label>Company</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            required
            value={companyName}
            onChange={this.props.changeWork}
          />
          <label>Position</label>
          <input
            type='text'
            id='position'
            name='position'
            required
            value={position}
            onChange={this.props.changeWork}
          />
          <label>Tasks</label>
          <input
            type='text'
            id='tasks'
            name='tasks'
            required
            value={tasks}
            onChange={this.props.changeWork}
          />
          <label>From</label>
          <input
            type='month'
            id='from'
            min='January-1910'
            max='December-2030'
            name='from'
            required
            value={from}
            onChange={this.props.changeWork}
          />
          <label>To</label>
          <input
            type='month'
            id='to'
            min='01-1910'
            max='12-2030'
            name='to'
            required
            value={to}
            onChange={this.props.changeWork}
          />
        </div>
        <button> Submit </button>
      </form>
    )
  }
}
export default AddWork