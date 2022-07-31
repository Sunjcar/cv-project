import React from 'react'

function WorkInfo(props) {
    const {companyName, position, from, to} = props
  return (
    <div className='Personal-Info'>
        <h1>Work Experience</h1>
        <h3>Company: {companyName}</h3>
        <h3>Position/Title: {position}</h3>
        <h3>From: {from}</h3>
        <h3>To: {to}</h3>
    </div>
  )
}

export default WorkInfo