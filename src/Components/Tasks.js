import React from 'react'

function Tasks(props) {

    const {tasks} = props
  return (
    <h3>Tasks:<ul>
        {tasks.map((task) => {
            return <li key={task.id}>
                {task.text}
            </li>
        })}
    </ul></h3>
  )
}

export default Tasks