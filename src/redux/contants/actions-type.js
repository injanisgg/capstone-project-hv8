{/* menyimpan semua tipe actions atau actions type */}
export const ActionsTypes = {
    //Product actions
    SET_PRODUCTS : "SET_PRODUCTS",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",

    //Login actions
    SET_LOGIN_PENDING: "SET_LOGIN_PENDING",
    SET_LOGIN_ERROR: "SET_LOGIN_ERROR",
    SET_LOGIN_SUCCESS: "SET_LOGIN_SUCCESS",
    SET_USERS: "SET_USERS",

    //counter actions quantity
    ADDITION_QUANTITY: "ADDITION_STOCK",
    REDUCTION_QUANTITY: "REDUCTION", 

    //counter actions stock
    ADDITION_STOCK: "ADDITION_STOCK",
    REDUCTION_STOCK: "REDUCTION_STOCK", 

    //error message stock or quantity
    SET_ERROR: "SET_ERROR",
    CLEAR_ERROR: "CLEAR_ERROR",

    //cart
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",

};