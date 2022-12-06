import React, { useEffect, useState } from 'react'
import Form from './Form'
import Task from './Task'

function TodoList() {
  const [todoList, setTodoList] = useState([])

  // Add to local storage
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList'))
    if (todoList) {
      setTodoList(todoList)
    }
  }, [])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    localStorage.setItem('todoList', JSON.stringify([todo, ...todoList]))

    setTodoList([todo, ...todoList])
  }

  const deleteTask = id => {
    const removeArr = [...todoList].filter(todo => todo.id !== id)

    setTodoList(removeArr)
    localStorage.setItem('todoList', JSON.stringify(removeArr))
  }

  const completedTask = id => {
    let updatedTodos = todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed

        console.log(todo.completed)
      }
      return todo
    })
    setTodoList(updatedTodos)
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <div>
        {todoList.map((todo, index) => {
          return (
            <Task
              key={index}
              // index={index}
              todo={todo}
              deleteTask={deleteTask}
              completedTask={completedTask}
              completed={todo.completed}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
