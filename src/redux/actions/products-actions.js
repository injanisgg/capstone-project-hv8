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