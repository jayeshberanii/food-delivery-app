import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:'mealdata',
    initialState:[],
    reducers:{
        loaddata(state,action){
            return [                
                action.payload
            ]
        }
    }
})

export default dataSlice.reducer
export const{loaddata}=dataSlice.actions