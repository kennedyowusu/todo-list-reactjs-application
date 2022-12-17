import React, {  useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskItems from './TaskItems'

function Content() {
  
  const [existingList, setExistingList] = useState(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []);

  const [newListTitle, setNewListTitle] = useState('');

  const saveToLocalStorage = (taskInfo) => { 
    setExistingList(taskInfo);
    localStorage.setItem('list', JSON.stringify(taskInfo));
  }

  // add new todo task to the list and save to local storage
  const addNewTask = (title) => { // title is the value of newListTitle
    let eachTaskId = existingList.length > 0 ? existingList[existingList.length - 1].id + 1 : 1;

    // if (!title) return alert('Enter Task Title'); // if title is empty, return alert

    const taskObject = {
      id: eachTaskId,
      name: title,
      status: false
    };

    const newListItems = [...existingList, taskObject];
    saveToLocalStorage(newListItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newListTitle) {
      return alert('Enter Task Title');
    } 

    const duplicateTaskTitle = existingList.find((item) => item.title === newListTitle);

    if (duplicateTaskTitle) {
      return alert("Task already exist");
    }

    addNewTask(newListTitle);
    
    setNewListTitle('');
    
  }

  const handleDelete = (id) => {
    const remainingList = existingList.filter((item) => item.id !== id);
    saveToLocalStorage(remainingList);
  }

  const handleComplete = (id) => { 
    const updatedList = existingList.map((item) => item.id === id ? { ...item, status: !item.status } : item);
    saveToLocalStorage(updatedList);
  }
  
  return (
    <section>
      <AddTaskForm
        handleSubmit={handleSubmit}
        newListTitle={newListTitle}
        setNewListTitle={setNewListTitle}

      />
      <TaskItems 
        existingList = {
          existingList
        }
        setExistingList = {
          setExistingList
        }
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
      
    </section>
  )
}

export default Content
