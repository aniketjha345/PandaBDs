import React, { useEffect, useRef } from 'react'
import './index.css' 
import Card from './pages/Card'
import video from './assets/bg2.mp4'
const App = () => {
const videoRef=useRef(null);
//   useEffect(()=>{
//     console.log(videoRef);
// const i =setTimeout(()=>{

//   console.log("hello");
//   startVideo();
// },1000)


// return ()=>clearTimeout(i);
//   },[])

//   const startVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };


  return (
    <div className='container'> 
      <video  className='video' src={video}  ref={videoRef} muted autoPlay playsInline loop >

      </video>
      {/* <button onClick={()=>startVideo() } style={{background:"red" ,color:"white",zIndex:100}} > play</button> */}
      <Card/>
    </div>
  )
}

export default App