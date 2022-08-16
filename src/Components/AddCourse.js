import React, { Component } from 'react'

export class AddCourse extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
}
  render() {
    const {degreeName, schoolName, dateStart, dateEnd} = this.props
    return (
      <form onSubmit={this.props.submitEdu} style={this.props.add}>
        <div>
          <label>Degree/Course</label>
          <input
            type='text'
            id='degreeName'
            name='degreeName'
            value={degreeName}
            onChange={this.props.changeEdu}
          />
          <label>School</label>
          <input
            type='text'
            id='schoolName'
            name='schoolName'
            value={schoolName}
            onChange={this.props.changeEdu}
          />
          <label>From</label>
          <input
            type='month'
            min='1910-01' 
            max='2030-12'
            id='dateStart'
            name='dateStart'
            value={dateStart}
            onChange={this.props.changeEdu}
          />
          <label>To</label>
          <input
            type='month'
            min='1910-01' 
            max='2030-12'
            id='dateEnd'
            name='dateEnd'
            value={dateEnd}
            onChange={this.props.changeEdu}
          />
        </div>
        <button > Submit </button>
      </form>
    )
  }
}

export default AddCourse