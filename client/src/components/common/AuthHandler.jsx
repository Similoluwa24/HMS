import React from 'react'
import { redirect, useLocation } from 'react-router-dom'
function AuthHandler({isAuthenticated,chilren,user }) {
    const location = useLocation()

  //   //if user isnt loggedin/authenticated and tries to make do anything patient related
  //   if(!isAuthenticated && (location.pathname.includes("/user") || location.pathname.includes("/admin"))){
  //     redirect('/auth/login')
  //   }
  //    // Redirect authenticated users from login/register pages
  // if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
  //   if (user?.role === "admin") {
  //     return <Navigate to="/admin/home" />;
  //   } else if (user?.role === "doctor") {
  //     return <Navigate to="/doctor/home" />;
  //   }else{
  //     redirect('/user/home')
  //   }
  // }


  

  // // Restrict access to admin routes for non-admin users
  // if (isAuthenticated && location.pathname.includes("/admin") && user.role !== "admin") {
  //   return <Navigate to="/shop/home" />;
  // }

  //  // Restrict access to user routes for admin users
  //  if (isAuthenticated && location.pathname.includes("/shop") && user.role === "admin") {
  //   return <Navigate to="/admin/dashboard" />;
  // }
    

  return (
    <>
    {chilren}
    </>
  )
}

export default AuthHandler