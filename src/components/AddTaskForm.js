
function AddTaskForm({
  newListTitle,
  setNewListTitle,
  handleSubmit,
  toggleSubmitButton
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
        {
          toggleSubmitButton ? <i className = "fa fa-edit" /> : <i className = "fa fa-plus" />
        }
      </button>
    </form>
  )
}

export default AddTaskForm
