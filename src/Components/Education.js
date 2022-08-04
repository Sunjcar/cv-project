import React, { Component } from 'react'
import EducationInfo from './EducationInfo'
import GeneralInfo from './GeneralInfo'

export class Education extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        schoolName: '',
        degreeName:'',
        date: '',
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
    
  render() {

    const {schoolName, degreeName, date} = this.state
    return (
      <form className='Personal-Information'>
        <h3 className='school-info'>
            <label htmlFor='degree' className='degreeName'> Degree </label>
            <input
                type='text'
                value={degreeName}
                onChange={this.handleDegreeChange}/>
            <label htmlFor='schoolName' className='schoolName'>School Name</label>
            <input
                type='text'
                value={schoolName}
                onChange={this.handleSchoolChange}/>
            <label htmlFor='dateOfStudy' className='dateOfStudy'> Year of Completion </label>
            <input
                type='text'
                minLength={4}
                maxLength={4}
                value={date}
                onChange={this.handleDateChange}/>
        </h3>
        <div className='cv-view'>
          <EducationInfo 
            schoolName={schoolName}
            degreeName={degreeName}
            date={date}/>
        </div>
      </form>
    )
  }
}

export default Education