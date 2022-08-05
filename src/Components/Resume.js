
import EducationInfo from './EducationInfo'
import GeneralInfo from './GeneralInfo'
import WorkInfo from './WorkInfo'
import uniqid from 'uniqid'
import React, { Component } from 'react'
import Tasks from './Tasks'
import Education from './Education'

export class Resume extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Gol D. Roger',
         currentJob:'Pirate King',
         email:'someone@email.com',
         phoneNumber:'123456789',
         address:'Some ST UK ',
         degreeName:'Full Stack Dev',
         courseName: 'The Odin Project',
         dateStart:'2022',
         dateEnd: 'Present',
         position: 'Therapist',
         companyName: 'A Therapy Inc',
         from: '2020',
         to: '2022',
         task: {
             text: '',
             id: uniqid()
           },
           tasks: [],
         count: 0,
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
      this.setState({
        dateStart: e.target.value
      })
     }

    handleDateEndChange = (e) =>{
      this.setState({
        dateEnd: e.target.value
      })
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
    const {name ,currentJob, email, phoneNumber, address, schoolName, degreeName, 
      dateStart,dateEnd, companyName, position, from, to, task, tasks, count} = this.state
    return (
      <div className='Resume'>
              <form className='Personal-Information' onSubmit={this.onSubmitCv}>
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
              <h3 className='school-info'>
                <label htmlFor='degree' className='degreeName'> Course  </label>
                <input
                    type='text'
                    value={degreeName}
                    onChange={this.handleDegreeChange}/>
                <label htmlFor='schoolName' className='schoolName'>School</label>
                <input
                    type='text'
                    value={schoolName}
                    onChange={this.handleSchoolChange}/>
                <label htmlFor='dateOfStudy' className='dateOfStudy'> From </label>
                <input
                    type='text'
                    minLength={4}
                    maxLength={4}
                    value={dateStart}
                    onChange={this.handleDateChange}/>
                <label htmlFor='dateOfStudy' className='dateOfStudy'> To </label>
                <input
                    type='text'
                    minLength={4}
                    value={dateEnd}
                    onChange={this.handleDateEndChange}/>
              </h3>
              <h3>
                <label htmlFor='company-position'> Position </label>
                <input
                    type='text'
                    value={position}
                    onChange={this.handlePositionChange}/>
                <label htmlFor='companyName'> Company </label>
                <input
                    type='text'
                    value={companyName}
                    onChange={this.handleCompanyChange}/>
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
                <label htmlFor='tasks'> Tasks </label>
                    <input
                    type='text'
                    value= {task.text}
                    onChange={this.handleTaskChange}/>
                    <button disabled={!task.text}> Add Task</button>
              </h3>
            </form>
            <div className='cv-view'>
                <GeneralInfo 
                  name = {name} 
                  currentJob = {currentJob}
                  email={email} 
                  phoneNumber = {phoneNumber}
                  address = {address}/>
                <EducationInfo 
                  schoolName={schoolName}
                  degreeName={degreeName}
                  dateStart={dateStart}
                  dateEnd={dateEnd}/>
                <WorkInfo
                  companyName = {companyName}
                  position = {position}
                  from = {from}
                  to = {to}/>
                <Tasks tasks={tasks}/>
              </div>
      </div>
    )
  }
}

export default Resume