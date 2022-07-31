import React from 'react'

function EducationInfo(props) {
    const {schoolName, degreeName, date} = props
  return (
    <div className='Personal-Info'>
        <h1>Education Background</h1>
        <h3>School: {schoolName}</h3>
        <h3>Degree in: {degreeName}</h3>
        <h3>Year Graduated: {date}</h3>
    </div>
  )
}

export default EducationInfo