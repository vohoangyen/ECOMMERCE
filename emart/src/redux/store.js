import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/slice'
import cartSlice from '../redux/cartSlice'
import orderSlice from "./orderSlice";

const store = configureStore({
    reducer:{
        products: productSlice,
        cart: cartSlice,
        order:orderSlice,
        // allProducts: allProSlice.reducer,

    }
})

export default store;