
function AddTaskForm({
  newListTitle,
  setNewListTitle,
  handleSubmit,
}) {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Here..."
        className="task-input"
        required
        autoFocus
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
      />
      <button className="button-add" type="submit"
        aria-label='Add Item'>
        Add Task
      </button>
    </form>
  )
}

export default AddTaskForm
