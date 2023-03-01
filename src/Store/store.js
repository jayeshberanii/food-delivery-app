import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import dataSlice from "./Slices/mealSlice";

const store=configureStore({
    reducer:{
        users:userSlice,
        mealdata:dataSlice
    }
})
export default store