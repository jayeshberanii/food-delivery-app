import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addToCart(state,action){  
            state.push(action.payload);           
        },
        removeFromCart(state,action){
            state.splice(action.payload,1)
        },
        updateCart(state,action){}
    }
})



export default userSlice.reducer
export const {addToCart,removeFromCart,updateCart}=userSlice.actions
