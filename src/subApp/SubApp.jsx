// 
import { useState } from 'react'
import { Outlet, Routes, Route, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
// 
import Header from "../components/header/Header"
// 
import Home from '../views/home/Home'
import Video from '../views/video/Video'
import User from '../views/user/User'

function SubApp() {

  const location = useLocation()

  return (
    <>
      <div className="app-main-container">
        <div className="app-container">

          <div className="app-header-container">
            <Header />
          </div>
          
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home type="home" />}>
                <Route path="video/:id" element={<Video type="home" />} />
              </Route>
              <Route path="/user/:user_id" element={<User type="user" />}>
                <Route path="video/:id" element={<Video type="user" />} />
              </Route>
            </Routes>
          </AnimatePresence>

          <div className="app-body-container">
            <Outlet />
          </div>

        </div>
      </div>
    </>
  )
}

export default SubApp
