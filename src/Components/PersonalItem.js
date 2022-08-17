import React, { Component } from 'react'

export class PersonalItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         edit: false,
      }
      this.updatePersonal = this.updatePersonal.bind(this)
    }

    updatePersonal = () => {
        this.setState({edit: false})
    }

    editPersonalInfo = () => {
        this.setState({edit: true})
    }
  render() {
    const {name ,currentJob, email, phoneNumber, address, id} = this.props
    var view = {};
    var edit = {};

    if(this.state.edit){
      view.display = 'none'
    } else {
      edit.display = 'none'
    }
    return (
      <div className='personal-item'>
          <div onClick={this.editPersonalInfo} style={view}>
              <div>
                <h1>{name}</h1>
                <h3>{currentJob}</h3>
              </div>
              <div>
                <h6>{email}</h6>
                <h6>{phoneNumber}</h6>
                <h6>{address}</h6>   
              </div>
              <div className='personal-edit' style={edit}>
                <input 
                  type='text' 
                  id='name'
                  name='name'
                  value={name} 
                  onChange={e => {this.props.editPersonalInfo(e,id)}}/>
                <input 
                  type='text' 
                  id='currentJob'
                  name='currentJob'
                  value={currentJob} 
                  onChange={e => {this.props.editPersonalInfo(e,id)}}/>
                <input 
                type='text' 
                id='email'
                name='email'
                value={email} 
                onChange={e => {this.props.editPersonalInfo(e,id)}}/>
                <input 
                  className='phoneNumber'
                  type='text' 
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  placeholder='123456789'
                  onChange={e => {this.props.editPersonalInfo(e, id)}}/>
                <input 
                  type='text' 
                  id='address'
                  name='address'
                  value={address} 
                  onChange={e => {this.props.editPersonalInfo(e, id)}}/>       
              </div>
              <button onClick={this.updatePersonal}> Edit </button>
          </div>
          <button onClick={this.editPersonalInfo}>Save </button>
      </div>
    )
  }
}

export default PersonalItem