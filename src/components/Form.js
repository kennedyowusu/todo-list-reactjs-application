import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Form(props) {
  const [newTask, setNewTask] = useState('')
  const [newTaskId, setNewTaskId] = useState(0)

  const giveId = () => {
    setNewTaskId(newTaskId + 1)
    return newTaskId
  }

  const handleInputChange = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      // id: uuidv4(),
      // id: Math.floor(Math.random() * 10),
      id: giveId(),
      text: newTask
    })

    setNewTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Here..."
        className="task-input"
        value={newTask}
        required
        onChange={handleInputChange}
      />
      <button className="button-add" type="submit">
        Add Task
      </button>
    </form>
  )
}

export default Form
