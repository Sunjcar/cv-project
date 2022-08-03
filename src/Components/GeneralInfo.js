import React from 'react'


function GeneralInfo(props) {

    const {name ,currentJob, email, phoneNumber, address} = props
  return (
    <div className='Personal-Info'>
      <div>
        <h1>{name}</h1>
        <h3>{currentJob}</h3>
      </div>
      <div className='contact-info'>
        <h6>Email: {email}</h6>
        <h6>Phone Number: {phoneNumber}</h6>
        <h6>Address: {address}</h6>
      </div>
    </div>
  )
}

export default GeneralInfo

