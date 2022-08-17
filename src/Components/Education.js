import React, { Component } from 'react'
import EducationList from './EducationList'

export class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <EducationList
         allEdu = {this.props.allEdu}
         eduEdit = {this.props.eduEdit}
        />
      </div>
    )
  }
}

export default Education