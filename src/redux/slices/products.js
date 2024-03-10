import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        selectedProducts: []
    },
    reducers: {
        addProduct: (state, { payload }) => {
            state.selectedProducts.push(payload)
        },
        removeProduct: (state, { payload }) => {
            state.selectedProducts = state.selectedProducts.filter(({ id }) => {
                return id !== payload.id
            })
        }
    }
})

export const {
    addProduct,
    removeProduct } = productsSlice.actions

export default productsSlice.reducer
