import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

const store=configureStore({
    reducer:{
        'auth':authSlice,
        // likewise create more slice and add here
    }
})

export default store;