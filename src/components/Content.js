import React, {  useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskItems from './TaskItems'
import Footer from './Footer'
import Search from './Search'

function Content() {
  
  // get the existing list from local storage
  // if there is no existing list, then set the existing list to an empty array
  // State for all the existing tasks in the list
  const [existingList, setExistingList] = useState(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []);

  // newListTitle is the value of the input field
  // setNewListTitle is the function that updates the value of the input field
  // State for the new task title that the user wants to add to the list --> Single task from the user

  const [newListTitle, setNewListTitle] = useState('');

  // toggleSubmitButton is the id of the task that the user wants to edit
  // setToggleSubmitButton is the function that toggles the edit mode
  const [toggleSubmitButton, setToggleSubmitButton] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

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

    const newListItems = [...existingList, taskObject]; // add the new task to the existing list of tasks --> newListItems is the new list of tasks that includes the new task and the existing tasks in the list

    saveToLocalStorage(newListItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if the user is in edit mode, then we need to update the task title
    if (toggleSubmitButton) {
      const editTaskTitle = existingList.find((item) => item.id === toggleSubmitButton);

      // if the user didn't change the task title, then we don't need to update the task title
      
      // if (editTaskTitle.name === newListTitle) { 
      //   setToggleSubmitButton(false);
      //   setNewListTitle('');
      //   return;
      // }

      // if the user changed the task title, then we need to update the task title
      const updatedTaskItem = existingList.map((item) => item.id === editTaskTitle.id ? ({ ...item, name: newListTitle }) : item);

      // save the updated task title to local storage
      saveToLocalStorage(updatedTaskItem);

      // reset the toggleMode and newListTitle
      setToggleSubmitButton(false);

      // reset the newListTitle
      setNewListTitle('');
      return;
    }

    if (!newListTitle) {
      return alert("Enter Task Title"); // but not necessary because we have required attribute in the input field
    } 

    const duplicateTaskTitle = existingList.find((item) => item.title === newListTitle);

    if (duplicateTaskTitle) {
      return alert("Task already exist");
    }

    addNewTask(newListTitle);
    
    setNewListTitle('');
    
  }

  // if the user clicks on the delete button, then we need to delete the task from the list and save the updated list to local storage 
  const handleDelete = (id) => {
    const remainingList = existingList.filter((item) => item.id !== id);
    saveToLocalStorage(remainingList);
  }

  const handleComplete = (id) => { 
    const completedTask = existingList.map((item) => item.id === id ? { ...item, status: !item.status } : item);
    saveToLocalStorage(completedTask);
  }

  const removeAllTasks = () => { 
    const emptyList = [];
    saveToLocalStorage(emptyList);
  }
  
  const handleEditTask = (id) => { 
    const editTask = existingList.find((item) => item.id === id);
    console.log(editTask); // {id: 1, name: "hello", status: false} This is the data of the task which the user clicked and wants to edit the title. So we need to retrieve the name of the task and update the value of the input field.
    
    setNewListTitle(editTask.name); // this will update the value of the input field
    setToggleSubmitButton(id); // this will toggle the edit mode
  }
  
  return (
    <section>
      
      <AddTaskForm
        handleSubmit={handleSubmit}
        newListTitle={newListTitle}
        setNewListTitle={setNewListTitle}
        toggleSubmitButton = {
          toggleSubmitButton
        }

      />
      
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <h2 style={{ color: 'white', fontSize: '20px', textAlign: 'center', marginTop: '20px' }}>All Tasks</h2>

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
