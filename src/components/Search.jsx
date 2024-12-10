import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions/search-actions";

function Search() {

  const [query, setQuery] = useState("");//state untuk pencarian
  const dispatch = useDispatch();

  //fungsi submit form
  const handleSearch = (e) => {
    e.preventDefault()//mencegah auto submit atau refresh halaman
    dispatch(fetchProduct(query))
  }

  return (
    <form className="relative w-96" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-input w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none"
        placeholder="Search for products..."
      />
      <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </form>
  )
}

export default Search;
