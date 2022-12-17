import React from 'react'

function TaskItems({
  existingList,
  handleDelete,
  handleComplete,
  handleEditTask
}) {
  return (
    <section>
      <div>
        {
          existingList.map((item) => {
            return (
              <div className="list-item" key={item.id} >
                
                <div className="list-item-title">
                  <p style={
                    (item.status) ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
                  }
                    onDoubleClick={() => handleComplete(item.id)}
                  >{item.name}
                  </p>
                </div>

                <div className="button-container">

                  <input type="checkbox"
                    className="checkbox"
                    tabIndex='0'
                    onChange={() => handleComplete(item.id)}
                  />

                  <button className="button-edit"
                    onClick={() => handleEditTask(item.id)}
                  >
                      <i className="fa fa-edit" />
                  </button>

                  <button className="button-delete"
                    onClick={() => handleDelete(item.id)}
                    tabIndex='0'
                  >
                    <i className="fa fa-trash" 
                      role={'button'}
                      aria-label={`Delete ${item.name}`}
                      tabIndex='0'
                      />
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default TaskItems
