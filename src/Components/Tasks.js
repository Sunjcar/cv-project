import React from 'react'

function Tasks(props) {

    const {tasks} = props
  return (
    <ul>
        {tasks.map((task) => {
            return <li key={tasks.id}>
                {task.text}
            </li>
        })}
    </ul>
  )
}

export default Tasks