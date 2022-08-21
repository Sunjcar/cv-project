import React, { Component } from 'react'
import PersonalItem from './PersonalItem'

export class PersonalList extends Component {
  render() {
    return (
      <div>
        {this.props.allInfo.map((personalInfo) => (
          <PersonalItem
            personalInfo={personalInfo}
            key={personalInfo.id}
            editPersonalInfo={this.props.editPersonalInfo}
          />
        ))}
      </div>
    )
  }
}

export default PersonalList