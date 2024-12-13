// /home/fordevgg/capstone/src/components/Search.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/actions/search-actions";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (query.trim()) {
      dispatch(searchProducts(query)); // Panggil action pencarian
      navigate(`/search?query=${encodeURIComponent(query)}`); // Navigasi ke halaman pencarian dengan query
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-96">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-input w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none"
        placeholder="Search for products..."
      />
      <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
        <i className="fa fa-search text-gray-500"></i>
      </button>
    </form>
  );
}

export default Search;