import { ActionsTypes } from "../contants/actions-type";

// Action Creator untuk mengatur hasil pencarian
export const setSearch = (product) => {
  return {
    type: ActionsTypes.SET_SEARCH,
    payload: product
  };
};

// API URL
const API_URL = 'https://fakestoreapi.com/products';

// Fungsi Fetching Data
export const fetchProduct = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data && data.length > 0) {
        if (query) {
          const filteredProducts = data.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );

          dispatch(setSearch(filteredProducts));
        } else {
          dispatch(setSearch(data));
        }
      } else {
        dispatch(setSearch([]));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};