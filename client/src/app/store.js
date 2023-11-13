import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/auth.slice"
import productReducer from "../product/product.slice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer
    },
});
export default store
