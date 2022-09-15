import React from 'react'

const ExperienceItem = ({ experienceItem }) => {
  return (
    <div>
      <div className='work-content'>
        <div>
          <p className='job-title'>{experienceItem.position}</p>
        </div>
        <div className='company-time'>
          <p>{experienceItem.company} |</p>
          <div className='date'>
            <p>{experienceItem.from} - {experienceItem.to}</p>
          </div>
        </div>
      </div>

      <p className='work-description'>{experienceItem.description}</p>
    </div>
  )
}

export default ExperienceItem
