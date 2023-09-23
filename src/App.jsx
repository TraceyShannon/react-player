// 
import { useState } from 'react'
import { Outlet, useLocation, useRoutes } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
// 
import Header from "./components/header/Header"
import VideoScreen from './screens/videoScreen/VideoScreen'
// 
import './App.css'

const App = ({ currentLocale, setCurrentLocale }) => {


  const location = useLocation()
  const [showScreen, setShowScreen] = useState(false)

  function changeLocale() {
    console.log(currentLocale);
    return currentLocale ? "100vw" : 0
  }

  return (
    <>
      <motion.div initial={false}
        animate={{ x: 0, transition: { duration: 0.3, }  }}
        exit={{ x: changeLocale(), transition: { duration: 0.3, delay: 0.3 } }}
        className="app-main-container">
        <div className="app-container">

          <div className="app-header-container">
            <Header setCurrentLocale={setCurrentLocale} />
          </div>

          <div className="app-body-container">
            <Outlet context={[showScreen, setShowScreen]} />
          </div>

          <div className="app-screen-container">
            <div className="app-video-screen-container">
              <AnimatePresence>
                {showScreen && <VideoScreen key={`1234`} setShowScreen={setShowScreen} />}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </>
  )
}

export default App
