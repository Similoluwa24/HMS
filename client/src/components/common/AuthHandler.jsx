import React from 'react'
import { redirect, useLocation } from 'react-router-dom'
function AuthHandler({isAuthenticated,chilren,user }) {
    const location = useLocation()

    //if user isnt loggedin/authenticated and tries to make do anything patient related
    if(!isAuthenticated && (location.pathname.includes("/user") || location.pathname.includes("/admin"))){
      redirect('/auth/login')
    }
    

  return (
    <>
    {chilren}
    </>
  )
}

export default AuthHandler