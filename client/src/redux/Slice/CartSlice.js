import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
    /* 
        value:[
            {
                _id:,
                quati : 1 + 1
                name
                price
            }
        ]

    */
}

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.value = []
            localStorage.setItem("cart_items",JSON.stringify([]))
        },
        setCart: (state, action) => {
            console.log("set redux Cart")
            state.value = action.payload
        },
        addToCart: (state, action) => {
            // console.log(JSON.stringify(state.value));
            console.log(action.payload);
            let product = action.payload
            let temp = [...state.value]
            let exists = temp.find(el => el._id == product._id)

            if (exists) {

                temp = temp.map(el => {
                    if (el._id == product._id) {
                        return { ...el, quantity: el.quantity + 1 }
                    } else {
                        return el
                    }
                })

            } else {
                temp.push({
                    _id: product._id,
                    price: product.price,
                    quantity: 1,
                    name: product.name
                })
            }
            state.value = temp
            localStorage.setItem("cart_items",JSON.stringify(temp))

        }
    },
})

export const { setCart, addToCart, clearCart } = CartSlice.actions

export default CartSlice.reducer