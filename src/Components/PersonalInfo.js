import React, { Component } from 'react'

export class PersonalInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
      }
    }

  render() {
      const {name, currentJob, email, phoneNumber, address} = this.props
    return (
      <form className='Personal-Information' onSubmit={this.props.submitPersonalInfo}>
        <div>
    
                <label htmlFor='userName' className='Name'>Name</label>
                <input 
                  type='text' 
                  id='name'
                  name='name'
                  value={name} 
                  onChange={this.props.personalInfo}/>
                <label htmlFor='Current Job' className='Current-Job'> Current Job </label>
                <input 
                  type='text' 
                  id='currentJob'
                  name='currentJob'
                  value={currentJob} 
                  onChange={this.props.personalInfo}/>
                <label htmlFor='userEmail' className='Email'>Email</label>
                <input 
                type='text' 
                id='email'
                name='email'
                value={email} 
                onChange={this.props.personalInfo}/>
                <label htmlFor='userPhone' className='Phone'>Phone Number</label>
                <input 
                  className='phoneNumber'
                  type='text' 
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  placeholder='123456789'
                  onChange={this.props.personalInfo}/>
                <label htmlFor='Address' className='Address'> Address </label>
                <input 
                  type='text' 
                  id='address'
                  name='address'
                  value={address} 
                  onChange={this.props.personalInfo}/>
        </div>
        <button > Submit </button>
      </form>
    )
  }
}


export default PersonalInfo