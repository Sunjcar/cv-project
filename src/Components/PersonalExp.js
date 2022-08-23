import React, { Component } from 'react'
import PersonalList from './PersonalList'

export class PersonalExp extends Component {
  render() {
    return (
      <div>
        <PersonalList
          allInfo={this.props.allInfo}
          editPersonalInfo={this.props.editPersonalInfo}
        />
      </div>
    )
  }
}

export default PersonalExp

