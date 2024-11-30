import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:['pizza','burger']
    },
    reducers:{
        addItems:(states,action)=>{
            states.items.push(action.payload)
        },
        removeItems:(state)=>{
            state.items.pop()
        },
        clearCart:()=>{
            state.items.length=0   //to make list empty which will clear the cart
        }
        
    }
})

// export const {addItems,removeItems,clearCart}=cartSlice.action;

export default cartSlice.reducer;