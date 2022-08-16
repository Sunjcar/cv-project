import React, { Component } from 'react'
import EducationItem from './EducationItem'

export class EducationList extends Component {
  render() {
    return (
      <div>
          {this.props.allEdu.map((education) => (
            <EducationItem
            education = {education}
            key = {education.id}
            eduEdit = {this.props.eduEdit}
            />
          ))}
      </div>
    )
  }
}

export default EducationList