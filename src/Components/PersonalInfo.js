import React, { Component } from 'react'

export class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  btnClicked = () => {
    this.setState({
      clicked: false
    })
  }

  render() {
    const { name, currentJob, email, phoneNumber, address } = this.props

    var view = {}
    if (this.btnClicked) {
      view.display = 'block'
    } else {
      view.display = 'none'
    }
    return (
      <form className='Personal-Information' onSubmit={this.props.submitPersonalInfo} style={this.props.add}>
        <div>
          <label htmlFor='userName' className='Name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={this.props.changeInfo}
          />
          <label htmlFor='Current Job' className='Current-Job'> Current Job </label>
          <input
            type='text'
            id='currentJob'
            name='currentJob'
            value={currentJob}
            onChange={this.props.changeInfo}
          />
          <label htmlFor='userEmail' className='Email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={this.props.changeInfo}
          />
          <label htmlFor='userPhone' className='Phone'>Phone Number</label>
          <input
            className='phoneNumber'
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={phoneNumber}
            placeholder='123456789'
            onChange={this.props.changeInfo}
          />
          <label htmlFor='Address' className='Address'> Address </label>
          <input
            type='text'
            id='address'
            name='address'
            value={address}
            onChange={this.props.changeInfo}
          />
        </div>
        <button disbaled={this.btnClicked} style={view}> Submit </button>
      </form>
    )
  }
}


export default PersonalInfo