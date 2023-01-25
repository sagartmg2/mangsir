import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log("set redux user")
            state.value = action.payload
        },
    },
})

export const { setUser } = UserSlice.actions

export default UserSlice.reducer