import React from 'react'

function Tasks(props) {

    const {tasks} = props
  return (
    <h3 className='Tasks'>Tasks:<ul className='task-content'>
        {tasks.map((task) => {
            return <li key={task.id}>
            <h6 className='task-text'>
              {task.text}
            </h6>
            </li>
        })}
    </ul></h3>
  )
}

export default Tasks