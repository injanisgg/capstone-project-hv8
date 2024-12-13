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

// Action Creator untuk melakukan pencarian
export const searchProducts = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data && data.length > 0) {
        const filteredProducts = data.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );

        dispatch(setSearch(filteredProducts));
      } else {
        dispatch(setSearch([]));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};