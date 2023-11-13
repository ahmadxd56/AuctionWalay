import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const dispatch = useDispatch()

  const { user, message, isLoading, isError } = useSelector((state) => state.auth)

  const { Component } = props

  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const savedToken = cookies.token;
    if (!savedToken) {
      navigate('/sign-in')
    }
  }, [cookies]);


  return (

    <>
      {
        isLoading ? ("loading..") : (<Component />)
      }
    </>
  );
};

export default ProtectedRoute;