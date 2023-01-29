import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './Slice/CartSlice'
import UserSlice from './Slice/UserSlice'

export const store = configureStore({
    reducer: {
        user: UserSlice,
        cart: CartSlice,
    },
})