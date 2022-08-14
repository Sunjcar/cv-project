import React, { Component } from 'react'
import ExperienceList from './ExperienceList'

export class WorkExperience extends Component {
  render() {
    return (
      <div>
          <h2>Work Experience</h2>
          <ExperienceList
           allJobs = {this.props.allJobs}
           handleEdit = {this.props.handleEdit}
          />
      </div>
    )
  }
}

export default WorkExperience