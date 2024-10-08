import React, { useEffect, useState, useId } from "react";
import authService from "../auth/auth";
import { Container } from "../components";
import { Postcard } from "../components";
import { useSelector,useDispatch } from "react-redux";
import { fetchPostRequest,fetchPostSuccess } from '../store/postSlice'

function Home() {
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

  if (posts.length === 0 && authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gray-100">
            {/* Text Section */}
            <div className="flex-1 p-4 md:p-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-gray-500">
                No Post Found.
              </h1>
              <p className="text-lg text-gray-700">
                Be the first one to create the POST
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1 p-4">
              <img
                // src={loginImage}
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Login Illustration"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gray-100">
            {/* Text Section */}
            <div className="flex-1 p-4 md:p-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-gray-500">
                Login to Read Posts....
              </h1>
              <p className="text-lg text-gray-700">
                Please log in to access the latest posts and enjoy exclusive
                content. Sign up now to become a member and stay updated with
                our latest blog entries.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1 p-4">
              <img
                // src={loginImage}
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Login Illustration"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
       <div className="flex flex-wrap">
        {posts.length === 0 ? (
          <div>No posts available</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
