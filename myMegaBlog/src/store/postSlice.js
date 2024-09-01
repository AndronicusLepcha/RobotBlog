import { createSlice } from "@reduxjs/toolkit";

const initialPostState={
    post:[],
    selectedPost:null,
    loading:false,
    error:null
}

const postSlice = createSlice({
    name:'post',
    initialState:initialPostState,
    reducers:{
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

export const { fetchPostRequest, fetchPostSuccess } = postSlice.actions;
export default postSlice.reducer;