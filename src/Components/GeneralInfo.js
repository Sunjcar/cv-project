import React, { Component } from 'react'

/* export class GeneralInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: []
    }
  }
  render(){
    const {name, email, phoneNumber, schoolName, degreeName, date, companyName, position, from, to, tasks} = this.state
  return (
    <div className='Personal-Info'>
        <h1>Personal Information</h1>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
        <h1>Educational Experience</h1>
        <h3>School: {schoolName}</h3>
        <h3>Degree in: {degreeName}</h3>
        <h3>Year Graduated: {date}</h3>
        <h1>Work Experience</h1>
        <h3>Company: {companyName}</h3>
        <h3>Position/Title: {position}</h3>
        <h3>From: {from}</h3>
        <h3>To: {to}</h3>
        <Tasks tasks={tasks}/>
    </div>
  )
}
}

export default GeneralInfo */

function GeneralInfo(props) {

    const {name, email, phoneNumber} = props
  return (
    <div className='Personal-Info'>
        <h1>Personal Information</h1>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
    </div>
  )
}

export default GeneralInfo

