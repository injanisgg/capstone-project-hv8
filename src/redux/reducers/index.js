import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./product-reducer";

{/* to combine all reducers */}

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;