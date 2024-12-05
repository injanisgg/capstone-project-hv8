import { ActionsTypes } from "../contants/actions-type";

const initialState = {
    products: []
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