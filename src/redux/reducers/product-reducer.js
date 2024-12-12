import { ActionsTypes } from "../contants/actions-type";

const initialState = {
    products: [],
    stock: 20,
    quantity: 0,
    error: null,
    cartItems: [], 
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
        case ActionsTypes.ADDITION_STOCK:
            return { ...state, stock: state.stock + 1 };  // Mengurangi stok ketika quantity ditambahkan
    
        case ActionsTypes.REDUCTION_STOCK:
            return { ...state, stock: state.stock - 1 }; // Menambah stok ketika quantity dikurangi

        default:
            return state;
    }
}

{/*reducer for quantity*/}
export const quantityReducer = (state = { quantity: 0 }, { type, payload }) => {
    switch (type) {
        case ActionsTypes.ADDITION_QUANTITY:
            return { ...state, quantity: state.quantity + 1 };
    
        case ActionsTypes.REDUCTION_QUANTITY:
            if (state.quantity > 0 ) {  // Pastikan quantity tidak kurang dari 0
                return { ...state, quantity: state.quantity - 1 };
            }
            return state;

        default:
            return state;
    }
}

{/*reducer for error stock and quantity*/}
export const errorReducer = (state = {error : null}, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_ERROR:
            return { ...state, error: payload }
        
        case ActionsTypes.CLEAR_ERROR:
            return { ...state, error: payload }

        default:
            return state;
    }
}

{/*reducer for cart*/}
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ActionsTypes.ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload }],
        };
      }

    case ActionsTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
