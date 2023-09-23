// 
import { useState } from "react"
// 
import MediaCard from "../../components/mediaCard/MediaCard"
// 
import "./User.css"
import { motion } from "framer-motion"
import { Outlet, useParams } from "react-router-dom"

const User = ({ type }) => {

  const [videos, setVideos] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ])

  return (
    <>
      <div className="user-main-container">
        <div className="user-container">

          <motion.div
            className=""
            initial={{ x: "-100vw", opacity: 0, }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
            exit={{ x: "100vw", opacity: 0, transition: { duration: 0.3 } }}>

            <h1>This is your user account page!</h1>

            <div className="user-media-card-container">
              {videos.map(video => (
                <MediaCard type={type} video={video} key={video} />
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  )

}

export default User