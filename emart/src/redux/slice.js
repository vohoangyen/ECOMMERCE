import { createSlice } from "@reduxjs/toolkit"

import data from "../data/product.json"

export const productsSlice = createSlice({
    name: "products",
    initialState:{
        product: data,
        search:[]
    },
    reducers: {
        addKw(state,action){
            state.search.push(action.payload)
        },
        addSearch(state, action){
            state.search = data.filter(
                (p) => p.name.toLowerCase().includes(action.payload)
            )
        }
    }
})

export const { addKw, addSearch } = productsSlice.actions

export const getListSearch = state => state.products.search

export const getListProduct = state => state.products.product

export const getProductByCate = (state, cateId) => state.products.product.filter(p => p.cateId === cateId)

export const getProductById = (state, id) => state.products.product.find(p => p.id == id)

export const getProductByKw = (state, kw) => {
    state.products.product.filter(p => p.name.toLowerCase().includes(kw))
}

export default productsSlice.reducer