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
       from: '',
       to: '',
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

  handleFromChange =(e) =>{
    this.setState({
      from: e.target.value
    })
  }

  handleToChange =(e) =>{
    this.setState({
      to: e.target.value
    })
  }

  onSubmitCv = (e) => {
    e.preventDefault();
    this.setState({
      task:{
        text: '',
        id:uniqid()
      },
      tasks: this.state.tasks.concat(this.state.task)
    })
  }
  render() {

    const {name,email, phoneNumber, schoolName, degreeName, date, companyName, position, from, to, task, tasks} = this.state
    return (
      <div>
        <div className='header'>
          <header> CV CREATOR </header>
        </div>
        <div className='main'>
          <div className='form'>
            <form onSubmit={this.onSubmitCv}>
              <h1>Fill In</h1>
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
                <label htmlFor='years-from'> From </label>
                <input
                  type='text'
                  value={from}
                  onChange={this.handleFromChange}/>
                <label htmlFor='years-to'> To </label>
                <input
                  type='text'
                  value={to}
                  onChange={this.handleToChange}/>
              </h3>
              <h4>
                <label htmlFor='tasks'> Tasks </label>
                <input
                  type='text'
                  value= {task.text}
                  onChange={this.handleTaskChange}/>
                <button onChange={this.handleTaskChange}> Add Task</button>
              </h4>
            </form>
          </div>
          <div>
          <GeneralInfo 
              name = {name} 
              email={email} 
              phoneNumber = {phoneNumber}
              schoolName = {schoolName}
              degreeName ={degreeName}
              date = {date}
              companyName = {companyName}
              position = {position}
              from = {from}
              to = {to}/>
            <Tasks tasks = {tasks}/>
          </div> 
        </div>
        
      </div>
    )
  }
}

export default App