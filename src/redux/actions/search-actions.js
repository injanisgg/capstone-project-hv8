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
            // Fetch semua produk dari API
            const response = await fetch(API_URL);
            const data = await response.json();

            // Filter produk berdasarkan query pencarian
            const filteredProducts = data.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );

            // Dispatch hasil pencarian
            dispatch(setSearch(filteredProducts));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
};
