import React from 'react'


function GeneralInfo(props) {

    const {name, email, phoneNumber} = props
  return (
    <div className='Personal-Info'>
        <h1>Personal Information</h1>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
    </div>
  )
}

export default GeneralInfo

