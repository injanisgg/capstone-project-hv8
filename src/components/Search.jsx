import React from 'react'

function Search() {
  return (
    <form className="relative w-96">
      <input
        type="text"
        className="form-input w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none"
        placeholder="Search for products..."
      />
      <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </form>
  )
}

export default Search;
