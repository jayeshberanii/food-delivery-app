import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import UserSlice from "./Slices/UserSlice";


const initialstate = {
    loading: false,
    user: [],
    error: ''
}

const FETCH_USER_RUNNING = 'FETCH_USER_RUNNUNG'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const ERROR_FETCH_USER = 'ERROR_FETCH_USER'

const fetchuserloading = () => {
    return {
        type: FETCH_USER_RUNNING
    }
}
const fetchusersuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchuserfailure = (error) => {
    return {
        type: ERROR_FETCH_USER,
        payload: error
    }
}

const rootreducer = (state = initialstate, action) => {
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


export const fetchusers = () => async dispatch => {
    dispatch(fetchuserloading())
    console.log('loading');
    await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response =>response.json())
        .then(result=>dispatch(fetchusersuccess(result)))
        .catch(err => dispatch(fetchuserfailure(err)))
}

export const store1 = configureStore({
    reducer:rootreducer,
    middleware:[thunk]
})
store1.subscribe(() => { console.log(store1.getState()) })