import React from 'react'

const EducationItem = ({ educationItem }) => {
  return (
    <div className='education-content'>
      <div>
        <p>{educationItem.course}</p>
      </div>
      <div className='education-time'>
        <p>{educationItem.school}  </p>
        <div className='date'>
          <p> | {educationItem.from} - {educationItem.to}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationItem

