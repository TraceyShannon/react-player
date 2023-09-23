// 
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
// 
import "./MediaPlayer.css"

// let time = 0
let duration = 208.24

const MediaPlayer = ({  }) => {

  const video = useRef(null)
  const canvas = useRef(null)
  const slider = useRef(null)
  const container = useRef(null)
  
  const [mouse, setMouse] = useState(0)
  const [display, setDisplay] = useState(0)
  const [showCanvas, setShowCanvas] = useState(false)
  const [displayValue, setDisplayValue] = useState(0)
  
  const [time, setTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [updatingTime, setUpdatingTime] = useState(false)

  const [paused, setPaused] = useState(true)
  const [waiting, setWaiting] = useState(false)
  const [showControls, setShowControls] = useState(true)

  function toggleControls(e) {
    if (e.target.className === "media-player-center-controls" ||
        e.target.className === "media-player-controls-main-container") {

          setShowControls(s => !s)

    }
  }

  function handlePlay() {
    video.current.play()
    setPaused(false)
    setWaiting(false)
  }
  
  function handlePause() {
    video.current.pause()
    setPaused(true)
    setWaiting(false)
  }
  
  function handleEnded() {
    setPaused(true)
    setWaiting(false)
  }

  function handleWaiting(e) {
    setWaiting(true)
  }

  function handleRewind() {
    video.current.currentTime -= 10
  }

  function handleFoward() {
    video.current.currentTime += 10
  }

  function handleUpdateTime() {
    if (updatingTime) return
    setTime(video.current.currentTime)
    setProgress((video.current.currentTime * 100) / duration)
  }

  function handleDisplay(layerX, newProgress) {

    if (layerX + (canvas.current.clientWidth / 2) > slider.current.clientWidth) {
      setDisplay(`calc(${100}% - ${canvas.current.clientWidth}px)`)
    } else if (layerX - (canvas.current.clientWidth / 2) < 0) {
      setDisplay(`calc(${0}%)`)
    } else {
      setDisplay(`calc(${newProgress}% - ${canvas.current.clientWidth / 2}px)`)
    }

  }

  function updatePointerEvent(e) {
    let layerX = (e.clientX - (container.current.offsetLeft + e.currentTarget.offsetLeft))

    let newProgress = (layerX * 100) / e.currentTarget.clientWidth
    let newTime = (newProgress * duration) / 100

    if (newProgress <= 0) newProgress = 0
    else if (newProgress >= 100) newProgress = 100

    if (newTime <= 0) newTime = 0
    else if (newTime >= duration) newTime = duration

    setTime(newTime)
    setProgress(newProgress)

    return newTime

  }

  function updateMouseEvent(e) {
    let layerX = (e.clientX - (container.current.offsetLeft + e.currentTarget.offsetLeft))

    let newProgress = (layerX * 100) / e.currentTarget.clientWidth
    let newTime = (newProgress * duration) / 100

    if (newTime <= 0) newTime = 0
    else if (newTime >= duration) newTime = duration

    handleDisplay(layerX, newProgress)

    setMouse(newProgress)
    setDisplayValue(newTime)

    return newProgress

  }

  function handleOnPointerDown(e) {

    let newTime = 0
    let newProgress = 0

    setShowCanvas(true)
    setUpdatingTime(true)
    
    newTime = updatePointerEvent(e)
    newProgress = updateMouseEvent(e)
    
    slider.current.onpointermove = (ev) => {
      newTime = updatePointerEvent(ev)
      newProgress = updateMouseEvent(ev)
    }
    
    slider.current.onpointerup = () => {
      setUpdatingTime(false)
      video.current.currentTime = newTime
      slider.current.onpointermove = null
    }
    
    slider.current.onpointerleave = () => {
      setShowCanvas(false)
      setUpdatingTime(false)
      // video.current.currentTime = newTime

      slider.current.onpointerup = null
      slider.current.onpointermove = null
      slider.current.onpointerleave = null

    }

  }

  function handleOnMouseEnter(e) {

    let newProgress = 0
    
    setShowCanvas(true)

    newProgress = updateMouseEvent(e)
    
    slider.current.onmousemove = (ev) => {
      newProgress = updateMouseEvent(ev)
    }

    slider.current.onmouseleave = () => {
      slider.current.onmousemove = null
      slider.current.onmouseleave = null
      setShowCanvas(false)
      setMouse(0)
    }

  }

  function handleFullscreen() {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
    } else {
      container.current.requestFullscreen();
    }
  }


  useEffect(() => {

    if (video.current !== null) {

      // VIDEO HAS LOADED

    }

  }, [])

  return (
    <>
      <div ref={container} onContextMenu={(e) => e.preventDefault()} onClick={toggleControls} className="media-player-main-container">
        <div className="media-player-container">

          <div className="media-play-video-container">
            <video
              ref={video}
              onEnded={handleEnded}
              onWaiting={handleWaiting}
              onTimeUpdate={handleUpdateTime}
              onPlaying={() => setWaiting(false)}
              // onProgress={(e) => console.log(e)}
              className="media-play-video"
              poster="/src/assets/to_love_ru_poster.jpg" preload="metadata">
              <source src="/src/assets/aotl.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="media-player-controls-main-container">
            <div style={{ display: showControls ? "flex" : "none" }} className="media-player-controls-container">

              <div className="media-player-top-controls">
                <div className="media-player-top-left">
                  <div className="media-player-minimize-container media-player-top-btnCont">
                    <p className="media-player-minimize-btn media-player-top-btn">
                      <i className="fa-solid fa-chevron-down"></i>
                    </p>
                  </div>
                  <div className="media-player-time-container">
                    <p className="media-player-time">
                      {Math.floor(time)} / {Math.floor(duration)}
                    </p>
                  </div>
                  <div className="media-player-close-container media-player-top-btnCont">
                    <p className="media-player-close-btn media-player-top-btn">
                      <i className="fa-solid fa-xmark"></i>
                    </p>
                  </div>
                </div>
                <div className="media-player-top-right">
                  <div className="media-player-settings-container media-player-top-btnCont">
                    <p className="media-player-settings-btn media-player-top-btn">
                      <i className="fa-solid fa-gear"></i>
                    </p>
                  </div>
                  <div onClick={() => handleFullscreen()} className="media-player-fullscreen-container media-player-top-btnCont">
                    <p className="media-player-fullscreen-btn media-player-top-btn">
                      <i className="fa-solid fa-maximize"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="media-player-center-controls">
                <div onClick={handleRewind} className="media-player-rewind-container media-player-center-btnCont">
                  <p style={{display: "flex", alignItems: "center"}} className="media-player-rewind-btn media-player-center-btn">
                    <span><i style={{fontSize: "40px"}} className="fa-solid fa-angles-left"></i></span>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>10</span>
                  </p>
                </div>
                {paused && <div onClick={handlePlay} className="media-player-toggle-container media-player-center-btnCont">
                  <p className="media-player-toggle-btn media-player-center-btn">
                    <i className="fa-solid fa-play"></i>
                  </p>
                </div>}
                {(waiting && !paused) && <div className="media-player-toggle-container media-player-center-btnCont">
                  <p className="media-player-toggle-btn media-player-center-btn">
                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                  </p>
                </div>}
                {(!paused && !waiting) && <div onClick={handlePause} className="media-player-toggle-container media-player-center-btnCont">
                  <p className="media-player-toggle-btn media-player-center-btn">
                    <i className="fa-solid fa-pause"></i>
                  </p>
                </div>}
                <div onClick={handleFoward} className="media-player-forward-container media-player-center-btnCont">
                  <p style={{ display: "flex", alignItems: "center" }} className="media-player-forward-btn media-player-center-btn">
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>10</span>
                    <span><i style={{ fontSize: "40px" }} className="fa-solid fa-angles-right"></i></span>
                  </p>
                </div>
              </div>

              <div className="media-player-bottom-controls">
                <div className="media-player-canvas-container">
                  <div
                    ref={canvas}
                    style={{ left: `${display}`, opacity: showCanvas ? "1" : "0", zIndex: -10 }}
                    className="media-player-slider-display-container">
                    <p className="media-player-slider-display">{Math.floor(displayValue)}</p>
                  </div>
                </div>
                <div ref={slider}
                  onMouseEnter={handleOnMouseEnter}
                  onPointerDown={handleOnPointerDown}
                  className="media-player-slider-container">
                  <div className="media-player-slider-track">
                    <div
                      style={{ width: `${ mouse }%` }}
                      className="media-player-pointer-progress"
                    />
                    <div
                      style={{ width: `${ progress }%` }}
                      key="media-player-slider-progress"
                      className="media-player-slider-progress"
                    />
                    <div
                      style={{ left: `${ progress }%` }}
                      key="media-player-slider-thumb"
                      className="media-player-slider-thumb"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default MediaPlayer