import { createSlice } from '@reduxjs/toolkit'

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        drawerOpened: false,
    },
    reducers: {
        setDrawerOpened: (state, { payload }) => {
            state.drawerOpened = payload
        },
    }
})

export const {
    setDrawerOpened,
} = applicationSlice.actions

export default applicationSlice.reducer
