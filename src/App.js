import './App.css';

import React, { Component } from 'react'
import GeneralInfo from './Components/GeneralInfo';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phoneNumber: ''
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
  

  onSubmitCv = (e) => {
    e.preventDefault();
  }
  render() {

    const {name,email, phoneNumber} = this.state
    return (
      <div>
        <div>
          <h1> Personal Information</h1>
          <form onSubmit={this.onSubmitCv}>
            <h3>
              <label htmlFor='userName' className='Name'>Name</label>
              <input 
                type='text' 
                value={name} 
                onChange={this.handleNameChange}/>
            </h3>
            <h3>
              <label htmlFor='userEmail' className='Email'>Email</label>
              <input 
              type='text' 
              value={email} 
              onChange={this.handleEmailChange}/>
            </h3>
            <h3>
              <label htmlFor='userPhone' className='Phone'>Phone Number</label>
              <input 
                className='phoneNumber'
                type='text' 
                value={phoneNumber}
                placeholder='123456789'
                onChange={this.handleNumberChange}/>
            </h3>
            <button type='submit' disabled={!name || !email || !phoneNumber}> Submit </button>
          </form>
          <GeneralInfo 
            name = {name} 
            email={email} 
            phoneNumber = {phoneNumber}/>
        </div>
      </div>
    )
  }
}

export default App