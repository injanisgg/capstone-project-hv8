import { ActionsTypes } from "../contants/actions-type";

const initialState = {
    search: '', // Menyimpan kata kunci pencarian
    product: [], // Menyimpan hasil pencarian
};

export const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_SEARCH:
            return { ...state, product: payload };// Menyimpan hasil pencarian ke dalam state

        default:
            return state; // Selalu kembalikan state default jika tidak ada aksi yang cocok
    }
};
