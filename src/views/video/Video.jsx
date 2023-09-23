// 
import { useState } from "react"
import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
// 
import MediaPlayer from "../../components/mediaPlayer/MediaPlayer"
// 
import "./Video.css"

const Video = ({ type, }) => {

  const { id, user_id } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <motion.div
        className="video-main-container app-route-container"
        initial={{ x: "-100vw", opacity: 0, }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.4 } }}
        exit={{ x: "100vw", opacity: 0, transition: { duration: 0.3 } }}>
        <div className="video-container">

          <div className="video-media-player-container">
            <MediaPlayer />
          </div>

          <div>
           <h1>{ type } This is the video page! { id }</h1>
          </div>

        </div>
      </motion.div>
    </>
  )

}

export default Video