import { combineReducers } from "redux";
import { productReducer, quantityReducer, selectedProductReducer, stockReducer } from "./product-reducer";
import { loginReducer } from "./login-reducer";

{/* to combine all reducers */}

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    login: loginReducer,
    quantity: quantityReducer,
    stock: stockReducer,
});

export default reducers;