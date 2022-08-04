import React from 'react'

function WorkInfo(props) {
    const {companyName, position, from, to} = props
  return (
    <div>
        <h3 className='work-title'>Work Experience</h3>
        <div className='work-content'>
          <div>       
            <p>{position}</p>
          </div>
          <div className='company-time'>
            <p>{companyName} |</p>
            <div className='date'>
              <p>{from} - {to}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkInfo