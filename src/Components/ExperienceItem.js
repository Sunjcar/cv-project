import React, { Component } from 'react'

export class ExperienceItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
        }
        this.updateEdit = this.updateEdit.bind(this)
    }

    handleEdit = () => {
        this.setState({ edit: true })
    }

    updateEdit = () => {
        this.setState({ edit: false })
    }

    render() {
        const { companyName, position, tasks, from, to, id } = this.props.experience;
        var view = {};
        var edit = {};

        if (this.state.edit) {
            view.display = 'none'
        } else {
            edit.display = 'none'
        }
        return (
            <div className='work-item'>
                <div onClick={this.handleEdit} style={view}>
                    <div className='work-content'>
                        <p>{position}</p>
                        <p>{companyName} | {from} - {to}</p>
                    </div>
                    <p className='task-text'>{tasks}</p>
                </div>
                <div className='work-edit' style={edit}>
                    <input
                        type='text'
                        name='companyName'
                        value={companyName}
                        placeholder='Company'
                        onChange={e => {
                            this.props.handleEdit(e, id)
                        }}
                    />
                    <input
                        type='text'
                        name='position'
                        value={position}
                        placeholder='Position'
                        onChange={e => {
                            this.props.handleEdit(e, id)
                        }}
                    />
                    <textarea
                        type='text'
                        name='tasks'
                        placeholder='Tasks'
                        onChange={e => {
                            this.props.handleEdit(e, id)
                        }}
                    />
                    <h3>From-To</h3>
                    <input
                        type='month'
                        min='January-1910'
                        max='December-2030'
                        name='from'
                        value={from}
                        onChange={e => {
                            this.props.handleEdit(e, id)
                        }}
                    />
                    <input
                        type='month'
                        name='to'
                        min='January-1910'
                        max='December-2030'
                        value={to}
                        onChange={e => {
                            this.props.handleEdit(e, id)
                        }}
                    />
                    <button onClick={this.updateEdit}> Save </button>
                </div>
            </div>
        )
    }
}

export default ExperienceItem