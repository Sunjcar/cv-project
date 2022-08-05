import React from 'react'

function AddCourse(props) {
    const {schoolName, degreeName, dateStart, dateEnd} = props
  return (
    <div>
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

export default AddCourse