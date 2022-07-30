import React from 'react'

function GeneralInfo(props) {
    const {name, email, phoneNumber} = props
  return (
    <div>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{phoneNumber}</h3>
    </div>
  )
}

export default GeneralInfo

