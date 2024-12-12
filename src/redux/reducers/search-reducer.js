import { ActionsTypes } from "../contants/actions-type";

const initialState = {
    search: '', // Menyimpan kata kunci pencarian
    product: [], // Menyimpan hasil pencarian
};

export const SearchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_SEARCH:
    console.log('Setting search with payload:', payload);
    return { ...state, product: payload };

        case ActionsTypes.RESET_SEARCH:
            return { ...state, product: [] };

        default:
            return state;
    }
};