import React, {  useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskItems from './TaskItems'
import Footer from './Footer'

function Content() {
  
  const [existingList, setExistingList] = useState(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []);

  const [newListTitle, setNewListTitle] = useState('');

  const [toggleMode, setToggleMode] = useState(false);

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

    if (toggleMode) {
      const editTaskTitle = existingList.find((item) => item.id === toggleMode);

      const updatedTaskItem = existingList.map((item) => item.id === editTaskTitle.id ? ({ ...item, name: newListTitle }) : item);

      saveToLocalStorage(updatedTaskItem);
      setToggleMode(false);
      setNewListTitle('');
      return;
    }

    if (!newListTitle) {
      
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

  const removeAllTasks = () => { 
    const emptyList = [];
    saveToLocalStorage(emptyList);
  }
  
  const handleEditTask = (id) => { 
    const editTask = existingList.find((item) => item.id === id);
    console.log(editTask); // {id: 1, name: "hello", status: false} This is the data of the task which the user clicked and wants to edit the title. So we need to retrieve the name of the task and update the value of the input field.
    
    setNewListTitle(editTask.name); // this will update the value of the input field
    setToggleMode(id); // this will change the submit button to edit button
  }
  
  return (
    <section>
      <AddTaskForm
        handleSubmit={handleSubmit}
        newListTitle={newListTitle}
        setNewListTitle={setNewListTitle}
        toggleMode={toggleMode}

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
        handleEditTask={handleEditTask}
      />
      <Footer 
        removeAllTasks={removeAllTasks}
      />
      
    </section>
  )
}

export default Content
