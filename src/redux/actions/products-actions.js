import { ActionsTypes } from "../contants/actions-type"

{/*MENYIMPAN SEMUA AKSI/ACTIONS*/}

export const setProducts = (products) => {
    return{
        type: ActionsTypes.SET_PRODUCTS, //key sebagai type
        payload: products //datanya
    }
}

export const selectedProduct = (product) => {
    return{
        type: ActionsTypes.SELECTED_PRODUCT, //key sebagai type
        payload: product //datanya
    }
}

export const removeSelectedProduct = (product) => {
    return{
        type: ActionsTypes.REMOVE_SELECTED_PRODUCTS, //key sebagai type
    }
}

export const addingQuantity = () => {
    return {
        type: ActionsTypes.ADDITION_QUANTITY
    }
}

export const reducingQuantity = () => {
    return {
        type: ActionsTypes.REDUCTION_QUANTITY
    }
}

export const addingStock = () => {
    return {
        type: ActionsTypes.ADDITION_STOCK
    }
}

export const reducingStock = () => {
    return {
        type: ActionsTypes.REDUCTION_STOCK
    }
}

export const setError = (errorMessage) => {
    return{
        type: ActionsTypes.SET_ERROR,
        payload: errorMessage
    }
}

export const clearError = () => {
    return{
        type: ActionsTypes.CLEAR_ERROR
    }
}

export const addToCart = (product) => {
    return{
        type: ActionsTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return{
        type: ActionsTypes.REMOVE_FROM_CART,
        payload: productId
    }
}

export const updateCartQuantity = (product) => {
    return{
        type: ActionsTypes.UPDATE_CART_QUANTITY,
        payload: product
    }
}
