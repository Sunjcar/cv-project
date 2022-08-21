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
                    <h3>{position}</h3>
                    <h3>{companyName} | {from.slice(0, 4)} - {to.slice(0, 4)}</h3>
                    <h4>{tasks}</h4>
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
                        min='1910-01'
                        max='2030-12'
                        name='from'
                        value={from}
                        onChange={e => {
                            this.props.handleEdit(e, id)
                        }}
                    />
                    <input
                        type='month'
                        name='to'
                        min='1910-01'
                        max='2030-12'
                        value={to}
                        onChange={e => {
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