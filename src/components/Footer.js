import React from 'react'

const Footer = ({
  removeAllTasks
 }) => {
 return (
  <div>
   <button className="button-clear"
    aria-label='Clear Item'
    onClick={removeAllTasks}
      >
        Clear All
      </button>
  </div>
 )
}

export default Footer
