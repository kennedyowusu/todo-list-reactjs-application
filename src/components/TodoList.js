import React, { useState } from 'react'
import Form from './Form'

function TodoList() {
  const [todoList, setTodoList] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    setTodoList([todo, ...todoList])
  }

  const deleteTask = id => {
    const removeArr = [...todoList].filter(todo => todo.id !== id)

    setTodoList(removeArr)
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <div>
        {todoList.map((todo, index) => {
          return (
            <div key={index} className="list-item">
              <h3>
                {todo.text}
              </h3>

              <button className="button-complete">
                <i className="fa fa-check-circle" />
              </button>

              <button className="button-edit">
                <i className="fa fa-edit" />
              </button>

              <button
                className="button-delete"
                onClick={() => deleteTask(todo.id)}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
