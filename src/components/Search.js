import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
 
 return (
  <form>
   <input
    type="text"
    placeholder="Search..." 
    className="search-input"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
  </form>
 )
}

export default Search
