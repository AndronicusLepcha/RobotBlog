import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

export default function Protected({children,authentication = true}) {
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authStatus){
            navigate("/home")
        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
  return loader ? <h1>Not Authenticated ...</h1> : <>{children}</>
}