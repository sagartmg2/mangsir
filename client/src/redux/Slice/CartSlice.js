import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            console.log("set redux Cart")
            // state.value = action.payload
        },
    },
})

export const { setCart } = CartSlice.actions

export default CartSlice.reducer