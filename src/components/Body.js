import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Browse from './Browse';
import {RouterProvider} from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Body = () => {
  const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

 

  return (
    
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body