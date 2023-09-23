// 
import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
// 
import "./MediaCard.css"

const MediaCard = ({ video, type, }) => {

  const navigate = useNavigate()

  const [showScreen, setShowScreen] = useOutletContext()

  function navFunc(type) {
    if (type === "home") {
      navigate(`video/${video }`)
    } else if (type === "user") {
      navigate(`video/${video }`)
    }
  }

  return (
    <>
      <div  className="media-card-main-container">
        <div className="media-card-container">

          <div onClick={() => setShowScreen(s => !s)} className="media-card-title-container">
            <p className="media-card-title">{ video }</p>
          </div>

          <div onClick={() => navigate(`/video/${video}`)} className="media-card-action-container">
            <div className="media-card-action-buttons">
              
            </div>
          </div>

        </div>
      </div>
    </>
  )

}

export default MediaCard