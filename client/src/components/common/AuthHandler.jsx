import React from 'react'
import { useLocation } from 'react-router-dom'
function AuthHandler({isAuthenticated,chilren,user }) {
    const location = useLocation()

    //if user isnt loggedin/authenticated and tries to make do anything patient related
    if(!isAuthenticated && (location.pathname.includes("/patient") || location.pathname.includes("/")))

  return (
    <>
    {chilren}
    </>
  )
}

export default AuthHandler