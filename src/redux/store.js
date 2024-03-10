import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.js";
import application from "./slices/application.js";
export default configureStore({
    reducer: {
        products,
        application,
    }
})