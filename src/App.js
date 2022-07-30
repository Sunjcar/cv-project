import './App.css';

import React, { Component } from 'react'
import GeneralInfo from './Components/GeneralInfo';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phoneNumber: '',
       schoolName: '',
       degreeName:'',
       date: '',
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
  
  handleSchoolChange = (e)=> {
    this.setState({
      schoolName: e.target.value
    })
  }

  handleDegreeChange = (e) => {
    this.setState({
      degreeName: e.target.value
    })
  }

  handleDateChange = (e) =>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({date: e.target.value})
   }
  }

  onSubmitCv = (e) => {
    e.preventDefault();
  }
  render() {

    const {name,email, phoneNumber, schoolName, degreeName, date} = this.state
    return (
      <div>
        <div className='Personal-Info'>
          <form onSubmit={this.onSubmitCv}>
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
            <h3>
              <label htmlFor='schoolName' className='schoolName'>School Name</label>
              <input
                type='text'
                value={schoolName}
                onChange={this.handleSchoolChange}/>
              <label htmlFor='degree' className='degreeName'> Degree </label>
              <input
                type='text'
                value={degreeName}
                onChange={this.handleDegreeChange}/>
              <label htmlFor='dateOfStudy' className='dateOfStudy'> Year of Completion </label>
              <input
                type='text'
                minLength={4}
                maxLength={4}
                value={date}
                onChange={this.handleDateChange}/>
            </h3>
            <button type='submit' disabled={!name || !email || !phoneNumber}> Submit </button>
          </form>
          <GeneralInfo 
            name = {name} 
            email={email} 
            phoneNumber = {phoneNumber}
            schoolName = {schoolName}
            degreeName ={degreeName}
            date = {date}/>
        </div>
      </div>
    )
  }
}

export default App