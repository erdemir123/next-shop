"use client"
import Login from '@/components/Login'
import RouteMenu from '@/components/RouteMenu'
import React, { useState } from 'react'



function page() {
  const [loginUser,setLoginUser]=useState<ıLoginUser>({ email:"",password:""})
  return (
    <div className='flex flex-col h-[100%]'>
      <RouteMenu />
      <Login loginUser={loginUser} setLoginUser={setLoginUser}/>
    </div>
  )
}

export default page
