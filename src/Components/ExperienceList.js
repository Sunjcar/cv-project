import React, { Component } from 'react'
import ExperienceItem from './ExperienceItem'

export class ExperienceList extends Component {

  render() {
    return (
      <div>
        {this.props.allJobs.map((experience) => (
          <div>
            <ExperienceItem
              experience={experience}
              key={experience.id}
              handleEdit={this.props.handleEdit}
            />
            {
              experience ?
                <button onClick={() => this.props.deleteWork(experience.id)}> Delete </button>
                : null
            }
          </div>))}
      </div>
    )
  }
}

export default ExperienceList