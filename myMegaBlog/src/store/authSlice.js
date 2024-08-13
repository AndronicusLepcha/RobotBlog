import {createSlice} from '@reduxjs/toolkit'

const initialState={
    status : false,
    userData:null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.status = action.payload.userData;
        },
        logout:(state,action)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

// Export the action creators
export const { login, logout } = authSlice.actions;
// Export the reducer to be used in the store
export default authSlice.reducer;