import React, { Component } from 'react'

export class AddWork extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }


  render() {
    const {companyName, position, tasks, from, to} = this.props

    return (
      <form onSubmit={this.props.submitWork} style={this.props.add}>
        <div>
          <h1> <br></br></h1>
          <label>Company</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={companyName}
            onChange={this.props.changeWork}
          />
          <label>Position</label>
          <input
            type='text'
            id='position'
            name='position'
            value={position}
            onChange={this.props.changeWork}
          />
          <label>Tasks</label>
          <input
            type='text'
            id='tasks'
            name='tasks'
            value={tasks}
            onChange={this.props.changeWork}
          />
          <label>From</label>
          <input
            type='month'
            id='from'
            name='from'
            value={from}
            onChange={this.props.changeWork}
          />
          <label>To</label>
          <input
            type='month'
            id='to'
            name='to'
            value={to}
            onChange={this.props.changeWork}
          />
        </div>
        <button onClick={this.props.count}> Submit </button>
      </form>
    )
  }
}
export default AddWork