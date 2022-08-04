import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'

export class PersonalInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        currentJob: '',
        email: '',
        phoneNumber: '',
        address:''
      }
    }

    handleNameChange = (e) => {
      this.setState({
          name: e.target.value,
        })
      }

    handleJobChange = (e) => {
      this.setState({
        currentJob: e.target.value
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

    handleAddressChange = (e) => {
      this.setState({
        address: e.target.value
      })
    }
  render() {
      const {name, currentJob, email, phoneNumber, address} = this.state
    return (
      <form className='Personal-Information'>
              <h3>
                <label htmlFor='userName' className='Name'>Name</label>
                <input 
                  type='text' 
                  value={name} 
                  onChange={this.handleNameChange}/>
                <label htmlFor='Current Job' className='Current-Job'> Current Job </label>
                <input 
                  type='text' 
                  value={currentJob} 
                  onChange={this.handleJobChange}/>
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
                <label htmlFor='Address' className='Address'> Address </label>
                <input 
                  type='text' 
                  value={address} 
                  onChange={this.handleAddressChange}/>
              </h3>
              <div className='cv-view'>
                <GeneralInfo 
                  name = {name} 
                  currentJob = {currentJob}
                  email={email} 
                  phoneNumber = {phoneNumber}
                  address = {address}/>
              </div>
      </form>
    )
  }
}


export default PersonalInfo