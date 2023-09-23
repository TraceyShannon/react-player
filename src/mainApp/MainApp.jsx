// 
import { useState } from 'react'
import { Outlet, Routes, Route, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
// 
import Header from "../components/header/Header"
// 
import App from '../App'
import Home from '../views/home/Home'
import Video from '../views/video/Video'
import User from '../views/user/User'
import Signin from '../views/signin/Signin'

function MainApp() {

  const location = useLocation()
  const [currentLocale, setCurrentLocale] = useState(false)

  console.log(currentLocale);

  return (
    <>
      <div className="main-app-main-container">
        <div className="main-app-container">

          <AnimatePresence>
            <Routes location={location} key={location.pathname}>

              {/* MAIN APP */}
              <Route element={<App currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />}>
                <Route path="/" element={<Home type="home" />} />
                <Route path="/video/:id" element={<Video type="home" />} />
                <Route path="/user/:user_id" element={<User type="user" />} />
              </Route>

              {/* SIGNIN ROUTE */}
              <Route path="/signin" element={<Signin currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />}>

              </Route>



            </Routes>
          </AnimatePresence>

        </div>
      </div>
    </>
  )
}

export default MainApp
