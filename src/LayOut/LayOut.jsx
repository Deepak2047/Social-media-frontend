import React from 'react'

import {Outlet, RouterProvider ,createBrowserRouter } from 'react-router-dom'

// --------page-------------- 
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Chatbox from '../pages/chatbox/Chatbox'


//-------------components--------------------
import Nav from '../components/nav/Nav'
import Leftbar from '../components/leftbar/Leftbar'
import Rightbar from '../components/rightbar/Rightbar'


export default function LayOut() {


//   --------Feed------------
  const Feed=()=>{


    return(
      <>
      <Nav/>
      <main>
        <Leftbar/>
        <div className="container">
          <Outlet/>
        </div>
        <Rightbar/>
      </main>
      </>
    )
  }
   

  //    ---Router-----
  const router=createBrowserRouter([
    {
      path:'/'  ,
      element:<Feed/>  ,
      children:[
        {
          path:'/'  ,
          element:<Home/> 
        },
        {
          path:'/profile/:id'  ,
          element:<Profile/> 
        },
        {
          path:'/chatbox/:id'  ,
          element:<Chatbox/> 
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}