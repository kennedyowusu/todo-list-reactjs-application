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

  return (
    <div>
      <Form onSubmit={addTodo} />
      <div>
        {todoList.map((todo, index) => {
          return (
            <div key={index}>
              <h3 className="list-item">
                {todo.text}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
