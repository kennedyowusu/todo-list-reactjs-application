import React from 'react'

function TaskItems({ existingList, handleDelete }) {
  return (
    <section>
      <div>
        {
          existingList.map((item) => {
            return (
              <div className="list-item" key={item.id} >
                
                <div className="">
                  <p>{item.name}</p>
                </div>

                <div className="button-container">
                  <button className = "button-complete" >
                    <i className="fa fa-check-circle" />
                    
                  </button>

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
