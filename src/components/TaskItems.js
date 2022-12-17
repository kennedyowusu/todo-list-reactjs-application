import React from 'react'

function TaskItems({
  existingList,
  handleDelete,
  handleComplete
}) {
  return (
    <section>
      <div>
        {
          existingList.map((item) => {
            return (
              <div className="list-item" key={item.id} >
                
                <div className="">
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
                    status={item.status}
                    onChange={() => handleComplete(item.id)}
                  />

                    <button className = "button-edit" >
                      <i className="fa fa-edit" />
                  </button>

                  <button className="button-delete"
                    onClick={() => handleDelete(item.id)}
                    tabIndex='0'
                  >
                      <i className="fa fa-trash" />
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
