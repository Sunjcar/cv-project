import React, { Component } from 'react'

export class PersonalItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       edit: false,
    }
    this.updatePersonal = this.updatePersonal.bind(this)
  }

  editPersonalInfo = (e) => {
    this.setState({edit: true})
    e.target = e.target.value
}

  updatePersonal = () => {
      this.setState({edit: false})
  }

  render() {
    const {name ,currentJob, email, phoneNumber, address, id} = this.props.personalInfo
    var view = {};
    var edit = {};

    if(this.state.edit){
      view.display = 'none'
    } else {
      edit.display = 'none'
    }
    return (
      <div>
        <div className='Personal-Info' onClick={this.editPersonalInfo} style={view}>
            <div>
            <h1 className='full-name'>{name}</h1>
            <h3 className='current-job'>{currentJob}</h3>
            </div>
            <div>
              <h6>{email}</h6>
              <h6>{phoneNumber}</h6>
              <h6>{address}</h6>  
            </div>
        </div>
          <div className='personal-edit' style={edit}>
                <input 
                  type='text' 
                  id='name'
                  name='name'
                  value={name} 
                  onChange = {e => {
                    this.props.editPersonalInfo(e, id)
                    }}
                />
                <input 
                  type='text' 
                  id='currentJob'
                  name='currentJob'
                  value={currentJob} 
                  onChange = {e => {
                    this.props.editPersonalInfo(e, id)
                    }}
                />
                <input 
                type='text' 
                id='email'
                name='email'
                value={email} 
                onChange = {e => {
                  this.props.editPersonalInfo(e, id)
                  }}
              />
                <input 
                  className='phoneNumber'
                  type='text' 
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  placeholder='123456789'
                  onChange = {e => {
                    this.props.editPersonalInfo(e, id)
                    }}
                />
                <input 
                  type='text' 
                  id='address'
                  name='address'
                  value={address} 
                  onChange = {e => {
                    this.props.editPersonalInfo(e, id)
                    }}
                />     
                <button onClick={this.updatePersonal}>Save </button>
            </div>
        </div>
    )
  }
}

export default PersonalItem

