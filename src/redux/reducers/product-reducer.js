import { ActionsTypes } from "../contants/actions-type";

const initialState = {
    products: [],
    stock: 20,
    quantity: 0,
}

{/*reducer products*/}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return {...state, products: payload};
    
        default:
            return state;
    }
}

{/*reducer selected products*/}
export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionsTypes.SELECTED_PRODUCT:
            return payload;
    
        case ActionsTypes.REMOVE_SELECTED_PRODUCTS:
            return {}

        default:
            return state;
    }
}

{/*reducer for stock*/}
export const stockReducer = (state = { stock: 20 }, { type, payload }) => {
    switch (type) {
        case ActionsTypes.ADDITION:
            return { ...state, stock: state.stock + 1 };  // Mengurangi stok ketika quantity ditambahkan
    
        case ActionsTypes.REDUCTION:
            return { ...state, stock: state.stock - 1 }; // Menambah stok ketika quantity dikurangi

        default:
            return state;
    }
}

{/*reducer for quantity*/}
export const quantityReducer = (state = { quantity: 0 }, { type, payload }) => {
    switch (type) {
        case ActionsTypes.ADDITION:
            return { ...state, quantity: state.quantity + 1 };
    
        case ActionsTypes.REDUCTION:
            if (state.quantity > 0 ) {  // Pastikan quantity tidak kurang dari 0
                return { ...state, quantity: state.quantity - 1 };
            }
            return state;

        default:
            return state;
    }
}

