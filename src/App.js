import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div />
        <TodoList />
      </div>
    </div>
  )
}

export default App
