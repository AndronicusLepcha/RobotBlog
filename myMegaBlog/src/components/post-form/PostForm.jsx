import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
import authService from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content : post?.content || "",
        status: post?.status || 'active',
      },
    });

    const navigate = useNavigate()
    const userData = useSelector(state=>state.user.userData)
    const submit= async(data)=>{
        if(post){
            const file=data.image[0] ? authService.uploadFile(data.image[0]):null
            if(file){
                authService.deleteFile(post.featuredImage)   // create a service to delte the previous post 
            }
            const dbPost = await authService.updatePost()   // create an service in the authService to update post

            if(dbPost){
                navigate(`/post/dbid`)
            }
        }else{
            const file=await authService.uploadFile(data)
            // handle the post data to save in the db here/
        }

    }
  return <div>PostForm</div>;
}

export default PostForm;
