import React, { Component } from 'react'
import EducationList from './EducationList'

export class EducationExp extends Component {
  render() {
    return (
      <div>
          <h3 className='education-title'>Education</h3>
          <EducationList
            allEdu = {this.props.allEdu}
            eduEdit = {this.props.eduEdit}
          />
      </div>
    )
  }
}

export default EducationExp