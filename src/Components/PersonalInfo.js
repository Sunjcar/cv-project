import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'

export class PersonalInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        email: '',
        phoneNumber: '',
      }
    }

    handleNameChange = (e) => {
        this.setState({
          name: e.target.value,
        })
      }
    
      handleEmailChange = (e) => {
        this.setState({
          email: e.target.value
        })
      }
    
      handleNumberChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
          this.setState({phoneNumber: e.target.value})
       }
      }

  render() {
      const {name, email, phoneNumber} = this.state
    return (
      <form className='Personal-Information'>
              <h3>
                <label htmlFor='userName' className='Name'>Name</label>
                <input 
                  type='text' 
                  value={name} 
                  onChange={this.handleNameChange}/>
                <label htmlFor='userEmail' className='Email'>Email</label>
                <input 
                type='text' 
                value={email} 
                onChange={this.handleEmailChange}/>
                <label htmlFor='userPhone' className='Phone'>Phone Number</label>
                <input 
                  className='phoneNumber'
                  type='text' 
                  value={phoneNumber}
                  placeholder='123456789'
                  onChange={this.handleNumberChange}/>
              </h3>
              <GeneralInfo 
                name = {name} 
                email={email} 
                phoneNumber = {phoneNumber}/>
      </form>
    )
  }
}


export default PersonalInfo