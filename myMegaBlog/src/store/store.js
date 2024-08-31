import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';
import postSlice from './authSlice'

const store=configureStore({
    reducer:{
        'auth':authSlice,
        'post':postSlice,
        // likewise create more slice and add here
    }
})

export default store;