import React from 'react'

function EducationInfo(props) {
    const {schoolName, degreeName, dateStart, dateEnd} = props
  return (
    <div>
        <h3 className='education-title'>Education</h3>
        <div className='education-content'>
          <div className='course-name'>
            <p>{degreeName}</p>
          </div>
          <div className='education-info'>
            <p>{schoolName}  </p>
            <div>
              <p> | {dateStart} - {dateEnd}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EducationInfo