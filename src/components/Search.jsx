import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Tambahkan default fungsi kosong
function Search({ onSearch = () => {} }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Debug: Log tipe dan nilai query
    console.log('Search Query:', query);
    
    // Panggil onSearch hanya jika query tidak kosong
    if (query.trim()) {
      onSearch(query);
      navigate('/search');
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="relative w-96"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-input w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none"
        placeholder="Search for products..."
      />
      <button 
        type="submit" 
        className="absolute right-0 top-0 mt-2 mr-4"
      >
        <i className="fa fa-search text-gray-500"></i>
      </button>
    </form>
  );
}

export default Search;