import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
// 
import App from './App.jsx'
import Home from './views/home/Home.jsx'
import Video from './views/video/Video.jsx'
// 
import './index.css'
import Signin from './views/signin/Signin.jsx'
import User from './views/user/User.jsx'
import SubApp from './subApp/SubApp.jsx'
import MainApp from './mainApp/MainApp.jsx'

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home type="home" />,
        children: [
          {
            path: "video/:id",
            element: <Video type="home" />,
          }
        ],
      },
      {
        path: "user/:user_id",
        element: <User type="user" />,
        children: [
          {
            path: "video/:id",
            element: <Video type="user" />,
          }
        ],
      },
    ]
  },
  {
    path: "/signin",
    element: <Signin />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
    // <RouterProvider router={router} />
)
