import React from 'react'

const ExperienceItem = ({ experienceItem }) => {
  return (
    <div>
      <div className='work-content'>
        <div>
          <p>{experienceItem.position}</p>
        </div>
        <div className='company-time'>
          <p>{experienceItem.company} |</p>
          <div className='date'>
            <p>{experienceItem.from} - {experienceItem.to}</p>
          </div>
        </div>
      </div>

      <h6>{experienceItem.description}</h6>
    </div>
  )
}

export default ExperienceItem
