import React, { Component } from 'react'

export class ExperienceItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         edit: false,
         count: 0
      }
      this.addCount = this.addCount.bind(this)
      this.removeCount = this.removeCount.bind(this)
      this.updateEdit = this.updateEdit.bind(this)
    }


    addCount = () => {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
    }
    
    removeCount = () => {
        this.setState({count: this.state.count - 1})
    }

    handleEdit = () => {
        this.setState({edit:true})
    }

    handleDelete = () => {
        this.setState({count: this.state.count - 1})
    }

    updateEdit = () => {
        this.setState({edit:false})
    }

  render() {
    const {companyName, position, tasks, from, to, id} = this.props.experience;
    var viewMode = {};
    var editMode = {};

    if(this.state.edit) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }
    return (
      <div className='work-experience'>
          <div onClick={this.handleEdit} style={viewMode}>
              <h3>{position}</h3>
              <h3>{companyName} | {from.slice(0,4)} - {to.slice(0,4)}</h3>
              <h4>{tasks}</h4>
          </div>
          <div className='work-edit' style={editMode}>
            <input
                type='text'
                name='companyName'
                value={companyName}
                placeholder='Company'
                onChange = {e => {
                this.props.handleEdit(e, id)
                }}
            />
            <input
                type='text'
                name='position'
                value={position}
                placeholder='Position'
                onChange = {e => {
                this.props.handleEdit(e, id)
                }}
            />
            <textarea
                type='text'
                name='tasks'
                placeholder='Tasks'
                onChange = {e => {
                this.props.handleEdit(e, id)
                }}
            />
            <h3>From-To</h3>
            <input
                type='month'
                name='from'
                value={from}
                onChange = {e => {
                this.props.handleEdit(e, id)
                }}
            />
            <input
                type='month'
                name='to'
                value={to}
                onChange = {e => {
                this.props.handleEdit(e, id)
                }}
            />
            <button onClick={this.updateEdit}> Save </button>
          </div>
          <button onClick={this.handleEdit}> Edit </button>
          <button disabled={!this.state.count} onClick={this.removeCount}> Delete </button>
      </div>
    )
  }
}

export default ExperienceItem