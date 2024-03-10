import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        selectedProducts: []
    },
    reducers: {
        addProduct: (state, { payload }) => {
            const matchedProduct = state.selectedProducts.find(({id}) => {
                return payload.id === id
            })
            if(!matchedProduct) {
                state.selectedProducts.push({...payload, quantity: 1})
            } else {
                matchedProduct.quantity = matchedProduct.quantity + 1
            } 
        },
        removeProduct: (state, { payload }) => {
            state.selectedProducts = state.selectedProducts.filter(({ id }) => {
                return id !== payload.id
            })
        },
        incrementQuantity: (state, { payload }) => {
            const matchedProduct = state.selectedProducts.find(({id}) => {
                return payload.id === id
            })
            if(matchedProduct) {
                matchedProduct.quantity = matchedProduct.quantity + 1
            }
        },
        decrementQuantity: (state, { payload }) => {
            const matchedProduct = state.selectedProducts.find(({id}) => {
                return payload.id === id
            })
            if(matchedProduct) {
                matchedProduct.quantity = matchedProduct.quantity - 1
            }
        },
        setQuantity: (state, { payload }) => {
            const matchedProduct = state.selectedProducts.find(({id}) => {
                return payload.id === id
            })
            if(matchedProduct) {
                matchedProduct.quantity = payload.quantity
            }
        },
        
    }
})

export const {
    addProduct,
    removeProduct ,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
} = productsSlice.actions

export default productsSlice.reducer
