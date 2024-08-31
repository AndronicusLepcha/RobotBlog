import {createSlice} from '@reduxjs/toolkit'

const initialAuthState={
    status : false,
    userData:null
}

const initialPostState={
    post:[],
    selectedPost:null,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name : 'auth',
    initialState:initialAuthState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state,action)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

const postSlice = createSlice({
    name:'post',
    initialState:initialPostState,
    reducer:{
         fetchPostRequest:(state) => {
                state.loading = true;
                state.error=null;
         },
         fetchPostSuccess:(state,action)=>{
                state.post=action.payload;
                state.loading=false;
         }
         // add more reducers as per the need 
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;