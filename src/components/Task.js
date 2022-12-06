import React from 'react'

function Task(props) {
  return (
    <div>
      {/* style={{ textDecoration: props.todo.completed ? 'line-through' : '' }} */}
      <div key={props.index} className="list-item">
        <h3>
          {props.todo.text}
        </h3>
        <button
          className="button-complete"
          onClick={() => props.completedTask(props.todo.id)}
        >
          <i className="fa fa-check-circle" />
        </button>
        <button className="button-edit">
          <i className="fa fa-edit" />
        </button>
        <button
          className="button-delete"
          onClick={() => props.deleteTask(props.todo.id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  )
}

export default Task
