import React, { Component } from 'react'
import ExperienceList from './ExperienceList'

export class WorkExperience extends Component {
  render() {
    return (
      <div>
          <h3 className='work-title '>Work Experience</h3>
          <ExperienceList
           allJobs = {this.props.allJobs}
           handleEdit = {this.props.handleEdit}
           deleteWork = {this.props.deleteWork}
          />
      </div>
    )
  }
}

export default WorkExperience