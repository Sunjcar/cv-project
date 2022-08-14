import React, { Component } from 'react'
import ExperienceItem from './ExperienceItem'

export class ExperienceList extends Component {
  render() {
    return (
      <div>
        {this.props.allJobs.map(experience => (
          <ExperienceItem
            experience = {experience}
            key = {experience.id}
            handleEdit = {this.props.handleEdit}
          />
        ))}
      </div>
    )
  }
}

export default ExperienceList