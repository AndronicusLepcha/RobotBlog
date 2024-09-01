import React, { useEffect, useState, useId } from "react";
import authService from "../auth/auth";
import { Container } from "../components";
import { Postcard } from "../components";
import { useSelector,useDispatch } from "react-redux";
import { fetchPostRequest,fetchPostSuccess } from '../store/postSlice'
import Home from "./Home";

function Post() {
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      dispatch(fetchPostRequest());  //set loading is True
      const data = await authService.getAllPosts();
      console.log("all post received ", data);
      setPosts(data);
      console.log("usestate data", posts);
      dispatch(fetchPostSuccess(data));  // set the data in the store.
    };
    fetchPost();
  }, []);

  return (
    <div>
      Post is loading............
      <Home/>
    </div>
    // again list all the post here....!
    
)
}


export default Post;
