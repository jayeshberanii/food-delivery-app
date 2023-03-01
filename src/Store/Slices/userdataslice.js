import { createSlice } from "@reduxjs/toolkit";

const userDataSlice=createSlice({
    name:'userData',
    initialState:[],
    reducers:{
        switch (action.type) {
        case FETCH_USER_RUNNING:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case ERROR_FETCH_USER:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        default: return {
            ...state
        }
    }
    }
})