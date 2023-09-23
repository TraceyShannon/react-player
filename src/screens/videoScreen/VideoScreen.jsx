// 
import { AnimatePresence, motion } from "framer-motion"
// 
import "./VideoScreen.css"

const VideoScreen = ({ setShowScreen }) => {

  function closeScreen(e) {
    if (e.target === e.currentTarget) {
      setShowScreen(s => !s)
    }
  }

  return (
    <>
        <motion.div onClick={closeScreen} className="video-screen-main-container"
          initial={{x: "-100vw"}}
          animate={{x: 0, transition: { duration: 0.2, }}}
          exit={{ x: "100vw", transition: { duration: 0.2, delay: 0.2 }}}>

          <motion.div className="video-screen-container"
            initial={{ y: "-100vh" }}
            animate={{ y: 0, transition: { duration: 0.2, delay: 0.2 } }}
            exit={{ y: "100vh", transition: { duration: 0.2, } }}>

            <div className="video-screen-media-player-container">
              <div className="video-screen-media-player"></div>
            </div>

          </motion.div>

        </motion.div>
    </>
  )

}

export default VideoScreen