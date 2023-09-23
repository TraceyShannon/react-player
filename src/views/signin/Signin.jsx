// 
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// 
import { motion } from "framer-motion"
// 
import "./Signin.css"

const Signin = ({ setCurrentLocale }) => {

  const navigate = useNavigate()

  function changeLocale() {
    setCurrentLocale(false)
    navigate("/")
  }

  return (
    <>
      <motion.div
        className="SigninMainContainer"
        initial={{ x: "-100vw", opacity: 0, }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
        exit={{ x: "100vw", opacity: 0, transition: { duration: 0.3 } }}>
        <div className="SigninContainer">

          <div onClick={changeLocale} className="sigin-back-container">
            <p className="signin-back-btn signin-btn"><i className="fa-solid fa-arrow-left-long"></i></p>
          </div>

          <h1>This is the signin page!</h1>

        </div>
      </motion.div>
    </>
  )

}

export default Signin