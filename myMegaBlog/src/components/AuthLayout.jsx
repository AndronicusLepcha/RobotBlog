import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {  // true and true 
      navigate("/login");
      console.log("In  if ");
    } else if (authentication && authStatus !== authentication) {  // true && true
      navigate("/");
      console.log("In else if ",authentication);
    } else{
      setLoader(false);
      console.log("In else  ");

    }
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Not Authenticated ...</h1> : <>{children}</>;
}
