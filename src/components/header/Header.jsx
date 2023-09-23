// 
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
// 
import "./Header.css"

const Header = ({ setCurrentLocale }) => {

  const navigate = useNavigate()
  const location = useLocation()

  function changeLocale() {
    setCurrentLocale(true)
    navigate("/signin")
  }

  return (
    <>
      <div className="header-main-container">
        <div className="header-container">

          <div className="header-nav-container">
            <div className="header-nav-left-container">
              <div onClick={() => navigate(`/`)} className="header-home-container">
                <p className="header-home-btn header-btn"><i className="fa-solid fa-house"></i></p>
              </div>
              <div className="header-menu-container">
                <p className="header-menu-btn header-btn"><i className="fa-solid fa-bars"></i></p>
              </div>
            </div>

            <div className="header-nav-center-container">
              <div className="header-search-container">
                <div className="header-search-placeholder-container">
                  <p className="header-search-placeholder">Search Videos...</p>
                </div>
                <div className="header-search-btn-container">
                  <p className="header-search-btn"><i className="fa-solid fa-magnifying-glass"></i></p>
                </div>
              </div>
            </div>

            <div className="header-nav-right-container">
              <div onClick={() => navigate(`/user/${ Math.floor(Math.random() * 100) }`)} className="header-user-container">
                <p className="header-user-btn header-btn"><i className="fa-solid fa-circle-user"></i></p>
              </div>
              <div onClick={changeLocale} className="header-signin-container">
                <p className="header-signin-btn header-btn"><i className="fa-solid fa-right-to-bracket"></i></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )

}

export default Header