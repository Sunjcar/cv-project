import React from 'react'
import styledComponents from 'styled-components'

const Header = ({ personalInfo }) => {
    const { name, title, address, email, phoneNumber } = personalInfo
    return (
        <div className='Personal-Info'>
            <Wrapper>
                <h1 className='full-name'>{name}</h1>
                <h3 className='current-job'>{title}</h3>
            </Wrapper>
            <div className='contact-info'>
                <h6>Email: {email}</h6>
                <h6>Phone Number: {phoneNumber}</h6>
                <h6>Address: {address}</h6>
            </div>
        </div>

    )
}

export default Header

const Wrapper = styledComponents.div`
background-color:white`
