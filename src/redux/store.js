import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.js";

export default configureStore({
    reducer: {
        products,
    }
})