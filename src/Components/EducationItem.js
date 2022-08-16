import React, { Component } from 'react'

export class EducationItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       edit:false,
    }
    this.updateEdu = this.updateEdu.bind(this)
  }

  eduEdit = () => {
    this.setState({edit:true})
  }

  updateEdu = () =>{
    this.setState({edit:false})
  }

  render() {
    const {degreeName, schoolName, dateStart, dateEnd,id } = this.props.education
    var view = {};
    var edit = {};

    if(this.state.edit){
      view.display = 'none'
    } else {
      edit.display = 'none'
    }
    return (
      <div className='education-item'>
        <div onClick={this.eduEdit} style={view}>
          <h3>{degreeName}</h3>
          <h3>{schoolName} | {dateStart} - {dateEnd}</h3>
        </div>
        <div className='education-edit' style={edit}>
          <input
              type='text'
              name='degreeName'
              placeholder='Degree/Course'
              value={degreeName}
              onChange= {e => {
                this.props.eduEdit(e,id)
              }}
            />
          <input
              type='text'
              name='schoolName'
              placeholder='School'
              value={schoolName}
              onChange= {e => {
                this.props.eduEdit(e,id)
              }}
            />
            <input
                type='month'
                min='1910-01' 
                max='2030-12'
                name='dateStart'
                value={dateStart}
                onChange = {e => {
                this.props.eduEdit(e, id)
                }}
            />
            <input
                type='month'
                name='dateEnd'
                min='1910-01' 
                max='2030-12'
                value={dateEnd}
                onChange = {e => {
                this.props.eduEdit(e, id)
                }}
            />
            <button onClick={this.updateEdu}> Save </button>
          </div>
          <button onClick={this.eduEdit}> Edit </button>
      </div>
    )
  }
}

export default EducationItem