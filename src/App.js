import './App.css';
import uniqid from 'uniqid'
import React, { Component } from 'react'
import GeneralInfo from './Components/GeneralInfo';
import Tasks from './Components/Tasks';

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
       companyName: '',
       position: '',
       timeSpent: '',
       task: {
         text: '',
         id: uniqid()
       },
       tasks: []
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

  handleCompanyChange = (e) => {
    this.setState({
      companyName: e.target.value
    })
  }

  handlePositionChange = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  handleTaskChange = (e) =>{
    this.setState({
      task:{
        text: e.target.value,
        id: this.state.tasks
      }
    })
  }

  handleTimeChange =(e) =>{
    this.setState({
      timeSpent: e.target.value
    })
  }

  onSubmitCv = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      schoolName: '',
      degreeName:'',
      date: '',
      companyName: '',
      position: '',
      timeSpent:'',
      task:{
        text: '',
        id:uniqid()
      },
      tasks: this.state.tasks.concat(this.state.task)
    })
  }
  render() {

    const {name,email, phoneNumber, schoolName, degreeName, date, companyName, position, timeSpent, task, tasks} = this.state
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
            <h3 className='school-info'>
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
            <h3>
              <label htmlFor='companyName'> Company </label>
              <input
                type='text'
                value={companyName}
                onChange={this.handleCompanyChange}/>
              <label htmlFor='company-position'> Position </label>
              <input
                type='text'
                value={position}
                onChange={this.handlePositionChange}/>
              <label htmlFor='years-worked'> Time spent at company </label>
              <input
                type='text'
                value={timeSpent}
                onChange={this.handleTimeChange}/>
            </h3>
            <h4>
              <label htmlFor='tasks'> Tasks </label>
              <input
                type='text'
                value= {task.text}
                onChange={this.handleTaskChange}/>
              <button type='submit' disabled={!task.text}> Add Task </button>
            </h4>
          </form>
          <GeneralInfo 
            name = {name} 
            email={email} 
            phoneNumber = {phoneNumber}
            schoolName = {schoolName}
            degreeName ={degreeName}
            date = {date}
            companyName = {companyName}
            position = {position}
            timeSpent = {timeSpent}/>
          <Tasks tasks = {tasks}/>
        </div>
      </div>
    )
  }
}

export default App