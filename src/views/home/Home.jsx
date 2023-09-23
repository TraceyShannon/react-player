// 
import { useEffect, useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
// 
import { AnimatePresence, motion } from "framer-motion"
// 
import MediaCard from "../../components/mediaCard/MediaCard"
// 
import "./Home.css"

let arr = []

const Home = ({ type,  }) => {

  const location = useLocation()

  const [videos, setVideos] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ])

  return (
    <>
      <div className="home-main-container app-route-container">
        <div className="home-container">

          <motion.div
            className="homeAnimationContainer"
            initial={{ x: "-100vw", opacity: 0, }}
            // transition={{ duration: 1 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
            exit={{ x: "100vw", opacity: 0, transition: { duration: 0.3 } }}>
              
            <h1>This is the home page!</h1>

            <div className="home-media-card-container">
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

export default Home