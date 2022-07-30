import React from 'react'

function GeneralInfo(props) {
    const {name, email, phoneNumber, schoolName, degreeName, date} = props
  return (
    <div>
        <h1>Personal Information</h1>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
        <h1>Educational Experience</h1>
        <h3>School: {schoolName}</h3>
        <h3>Degree in: {degreeName}</h3>
        <h3>Year: {date}</h3>
    </div>
  )
}

export default GeneralInfo

