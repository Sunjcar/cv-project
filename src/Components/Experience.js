import React, { Component } from 'react'
import uniqid from 'uniqid'
import Tasks from './Tasks'
import WorkInfo from './WorkInfo'


export class Experience extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        companyName: '',
        position: '',
        from: '',
        to: '',
        task: {
            text: '',
            id: uniqid()
          },
          tasks: [],
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
    const {companyName, position, from, to, task, tasks} = this.state
    return (
        <form className='Personal-Information' onSubmit={this.onSubmitCv}>
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
            <label htmlFor='tasks'> Tasks </label>
                <input
                type='text'
                value= {task.text}
                onChange={this.handleTaskChange}/>
                <button disabled={!task.text}> Add Task</button>
            </h3>
            <div>
              <WorkInfo
                companyName = {companyName}
                position = {position}
                from = {from}
                to = {to}/>
              <Tasks tasks={tasks}/>
            </div>
        </form>
    )
  }
}

export default Experience
